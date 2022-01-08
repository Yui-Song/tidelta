package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"sync"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/panjf2000/ants/v2"
	"github.com/prometheus/common/model"
)

type QueryResponse struct {
	Status string      `json:"status"`
	Data   QueryResult `json:"data"`
}

type QueryResult struct {
	Type   string       `json:"resultType"`
	Result model.Matrix `json:"result"`
}

type DiffReportResponse struct {
	Message string           `json:"message"`
	Data    []*DiffComponent `json:"data"`
}

type DiffReportParam struct {
	name   string
	host1  string
	start1 string
	end1   string
	host2  string
	start2 string
	end2   string

	component *DiffComponent
}

type DiffComponent struct {
	sync.Mutex

	Component string     `json:"component"`
	Data      []DiffItem `json:"data"`
}

type DiffItem struct {
	Metrics string                 `json:"metrics"`
	Value   map[string]interface{} `json:"value"`
}

func ConfigReport(c *gin.Context) {
	host1 := c.Query("host1")
	host2 := c.Query("host2")
	index1 := make(map[string]map[string]string)
	db1, err := sql.Open("mysql", host1)
	if err != nil {
		c.String(http.StatusBadRequest, fmt.Sprintf("%v", err))
		return
	}
	rows, err := db1.Query("select `TYPE`, `INSTANCE`, `KEY`, `VALUE` from Information_schema.cluster_config")
	if err != nil {
		c.String(http.StatusBadRequest, fmt.Sprintf("%v", err))
		return
	}
	for rows.Next() {
		var component, instance, key, value string
		err = rows.Scan(&component, &instance, &key, &value)
		if err != nil {
			c.String(http.StatusBadRequest, fmt.Sprintf("%v", err))
			return
		}
		if _, ok := index1[fmt.Sprintf("%v_%v", component, key)]; ok {
			index1[fmt.Sprintf("%v_%v", component, key)][instance] = value
		} else {
			index1[fmt.Sprintf("%v_%v", component, key)] = map[string]string{
				instance: value,
			}
		}
	}

	result := make(map[string][]DiffItem)

	index2 := make(map[string]map[string]string)
	db2, err := sql.Open("mysql", host2)
	if err != nil {
		c.String(http.StatusBadRequest, fmt.Sprintf("%v", err))
		return
	}
	rows, err = db2.Query("select `TYPE`, `INSTANCE`, `KEY`, `VALUE` from Information_schema.cluster_config")
	if err != nil {
		c.String(http.StatusBadRequest, fmt.Sprintf("%v", err))
		return
	}
	for rows.Next() {
		var component, instance, key, value string
		err = rows.Scan(&component, &instance, &key, &value)
		if err != nil {
			c.String(http.StatusBadRequest, fmt.Sprintf("%v", err))
			return
		}
		if _, ok := index2[fmt.Sprintf("%v_%v", component, key)]; ok {
			index2[fmt.Sprintf("%v_%v", component, key)][instance] = value
		} else {
			index2[fmt.Sprintf("%v_%v", component, key)] = map[string]string{
				instance: value,
			}
		}
	}

	// compare two config index
	for combinedKey, value1 := range index1 {
		var diffFlag bool
		var value2 interface{}
		if v2, ok := index2[combinedKey]; ok {
			diffFlag = diff2Map(value1, v2)
			value2 = v2
			delete(index2, combinedKey)
		} else {
			diffFlag = true
		}

		if diffFlag {
			splitList := strings.Split(combinedKey, "_")
			component, key := splitList[0], splitList[1]
			if c, ok := result[component]; ok {
				result[component] = append(c, DiffItem{
					Metrics: key,
					Value: map[string]interface{}{
						"start": value1,
						"end":   value2,
					},
				})
			} else {
				result[component] = []DiffItem{
					{
						Metrics: key,
						Value: map[string]interface{}{
							"start": value1,
							"end":   value2,
						},
					},
				}
			}
		}
	}

	// Add key not in index1 but in index2
	for combinedKey, value2 := range index2 {
		splitList := strings.Split(combinedKey, "_")
		component, key := splitList[0], splitList[1]
		if c, ok := result[component]; ok {
			result[component] = append(c, DiffItem{
				Metrics: key,
				Value: map[string]interface{}{
					"start": "",
					"end":   value2,
				},
			})
		} else {
			result[component] = []DiffItem{
				{
					Metrics: key,
					Value: map[string]interface{}{
						"start": "",
						"end":   value2,
					},
				},
			}
		}
	}

	response := DiffReportResponse{
		Message: "success",
		Data:    []*DiffComponent{},
	}
	for component, diffItemList := range result {
		response.Data = append(response.Data, &DiffComponent{
			Component: component,
			Data:      diffItemList,
		})
	}
	c.JSON(http.StatusOK, response)
}

func diff2Map(map1 map[string]string, map2 map[string]string) bool {
	for _, v1 := range map1 {
		for _, v2 := range map2 {
			if v1 != v2 {
				return true
			}
		}
	}
	return false
}

func DiffReport(c *gin.Context) {
	host1 := c.Query("host1")
	start1 := c.Query("start1")
	end1 := c.Query("end1")
	host2 := c.Query("host2")
	start2 := c.Query("start2")
	end2 := c.Query("end2")

	var wg sync.WaitGroup

	//TODO: global goroutine pool
	pool, _ := ants.NewPoolWithFunc(8, func(i interface{}) {
		param, _ := i.(*DiffReportParam)
		diffItem, err := queryDiff(*param)
		if err == nil {
			param.component.Mutex.Lock()
			param.component.Data = append(param.component.Data, diffItem)
			param.component.Mutex.Unlock()
		}
		wg.Done()
	})
	defer pool.Release()

	response := DiffReportResponse{}

	for key, value := range componentMetricMap {
		component := DiffComponent{
			Mutex:     sync.Mutex{},
			Component: key,
			Data:      []DiffItem{},
		}
		response.Data = append(response.Data, &component)
		for _, metric := range value {
			wg.Add(1)
			pool.Invoke(&DiffReportParam{
				name:      metric,
				host1:     host1,
				start1:    start1,
				end1:      end1,
				host2:     host2,
				start2:    start2,
				end2:      end2,
				component: &component,
			})
		}
	}

	wg.Wait()
	response.Message = "success"
	c.JSON(http.StatusOK, response)
}

func queryDiff(param DiffReportParam) (DiffItem, error) {
	timestamp1, _ := strconv.Atoi(param.start1)
	timestamp2, _ := strconv.Atoi(param.end1)
	second := timestamp2 - timestamp1
	item1, err := rangeQuery(param.host1, fmt.Sprintf(metrics[param.name], second), param.start1, param.end1, second)
	if err != nil || math.IsNaN(item1) {
		return DiffItem{}, err
	}
	item2, err := rangeQuery(param.host2, fmt.Sprintf(metrics[param.name], second), param.start2, param.end2, second)
	if err != nil || math.IsNaN(item2) {
		return DiffItem{}, err
	}
	return DiffItem{
		Metrics: param.name,
		Value: map[string]interface{}{
			"start": item1,
			"end":   item2,
		},
	}, nil
}

func rangeQuery(host string, query string, start string, end string, step int) (float64, error) {
	params := url.Values{}
	Url, err := url.Parse(fmt.Sprintf("http://%s/api/v1/query_range", host))
	if err != nil {
		return 0, err
	}

	params.Set("query", query)
	params.Set("start", start)
	params.Set("end", end)
	params.Set("step", strconv.Itoa(step))

	Url.RawQuery = params.Encode()

	response, err := http.Get(Url.String())
	defer response.Body.Close()

	body, _ := ioutil.ReadAll(response.Body)
	var jsonBody QueryResponse
	err = json.Unmarshal(body, &jsonBody)
	if err != nil {
		return 0, err
	}
	return float64(jsonBody.Data.Result[0].Values[len(jsonBody.Data.Result[0].Values)-1].Value), nil
}
