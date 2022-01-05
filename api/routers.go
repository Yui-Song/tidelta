package main

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/panjf2000/ants/v2"
	"github.com/prometheus/common/model"
	"io/ioutil"
	"math"
	"net/http"
	"net/url"
	"strconv"
	"sync"
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
	Metrics string             `json:"metrics"`
	Value   map[string]float64 `json:"value"`
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
	c.JSON(200, response)
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
		Value: map[string]float64{
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
