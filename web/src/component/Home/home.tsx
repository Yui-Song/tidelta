import React from "react";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { SelectChangeEvent } from '@mui/material/Select';
import { getDashboardsList } from "@/api/api-grafana";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
    HomeBoxSX,
    HomeFormSX
} from '@/component/Home/style';
import ParamComponent from "@/component/Home/chirldren/param";
import GraphChirldren from "@/component/Home/chirldren/graph";

import BackupImport from "@/resource/data/select-panel/row/0.Backup&Import.json";
import Binlog from "@/resource/data/select-panel/row/1.Binlog.json";
import Blackbox_exporter from "@/resource/data/select-panel/row/2.aws-test-v530-Blackbox_exporter.json";
import Disk_Performance from "@/resource/data/select-panel/row/3.aws-test-v530-Disk-Performance.json";
import Kafka_Overview from "@/resource/data/select-panel/row/4.aws-test-v530-Kafka-Overview.json";
import Lightning from "@/resource/data/select-panel/row/5.aws-test-v530-Lightning.json";
import Overview from "@/resource/data/select-panel/row/6.aws-test-v530-Overview.json";
import PD from "@/resource/data/select-panel/row/7.aws-test-v530-PD.json";
import Performance_Read from "@/resource/data/select-panel/row/8.aws-test-v530-Performance-Read.json";
import Performance_Write from "@/resource/data/select-panel/row/9.aws-test-v530-Performance-Write.json";
import TiCDC from "@/resource/data/select-panel/row/10.aws-test-v530-TiCDC.json";
import TiDB from "@/resource/data/select-panel/row/11.aws-test-v530-TiDB.json";
import TiDB_Runtime from "@/resource/data/select-panel/row/12.aws-test-v530-TiDB-Summary.json";
import TiDB_Summary from "@/resource/data/select-panel/row/13.aws-test-v530-TiDB-Runtime.json";
import TiFlash_Proxy_Details from "@/resource/data/select-panel/row/14.aws-test-v530-TiFlash-Proxy-Details.json";
import TiFlash_Proxy_Summary from "@/resource/data/select-panel/row/15.aws-test-v530-TiFlash-Proxy-Summary.json";
import TiFlash_Summary from "@/resource/data/select-panel/row/16.aws-test-v530-TiFlash-Summary.json";
import TiKV_Details from "@/resource/data/select-panel/row/17.aws-test-v530-TiKV-Details.json";
import TiKV_FastTune from "@/resource/data/select-panel/row/18.aws-test-v530-TiKV-FastTune.json";
import TiKV_Raw from "@/resource/data/select-panel/row/19.aws-test-v530-TiKV-Raw.json";
import TiKV_Summary from "@/resource/data/select-panel/row/20.aws-test-v530-TiKV-Summary.json";
import TiKV_Trouble_Shooting from "@/resource/data/select-panel/row/21.aws-test-v530-TiKV-Trouble-Shooting.json";
import Tidb_Cluster_Node_exporter from "@/resource/data/select-panel/row/22.Tidb-Cluster-Node_exporter.json";

export interface DataSource {
    grafanaHost: string,
    grafanaPort: string,
    prometheusHost: string,
    prometheusPort: string,
    dateFrom: string,
    dateTo: string,
    graphId: string,
}

interface SubmitData {
    grafanaHost1: string,
    grafanaHost2: string,
    grafanaPort1: string,
    grafanaPort2: string,
    prometheusHost1: string,
    prometheusHost2: string,
    prometheusPort1: string,
    prometheusPort2: string,
}

export default function Home() {

    const selectJsonData = [
        BackupImport,
        Binlog,
        Blackbox_exporter,
        Disk_Performance,
        Kafka_Overview,
        Lightning,
        Overview,
        PD,
        Performance_Read,
        Performance_Write,
        TiCDC,
        TiDB,
        TiDB_Runtime,
        TiDB_Summary,
        TiFlash_Proxy_Details,
        TiFlash_Proxy_Summary,
        TiFlash_Summary,
        TiKV_Details,
        TiKV_FastTune,
        TiKV_Raw,
        TiKV_Summary,
        TiKV_Trouble_Shooting,
        Tidb_Cluster_Node_exporter,
    ];    
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    /**
     * 控制错误红色边框
     */
    const [grafanaHostError1, setGrafanaHostError1] = React.useState<boolean>(false);
    const [grafanaPortError1, setGrafanaPortError1] = React.useState<boolean>(false);
    const [grafanaHostError2, setGrafanaHostError2] = React.useState<boolean>(false);
    const [grafanaPortError2, setGrafanaPortError2] = React.useState<boolean>(false);
    const [prometheusHostError1, setPrometheusHostError1] = React.useState<boolean>(false);
    const [prometheusPortError1, setPrometheusPortError1] = React.useState<boolean>(false);
    const [prometheusHostError2, setPrometheusHostError2] = React.useState<boolean>(false);
    const [prometheusPortError2, setPrometheusPortError2] = React.useState<boolean>(false);
    const [dateFromError01, setDateFromError01] = React.useState<boolean>(false);
    const [dateFromError02, setDateFromError02] = React.useState<boolean>(false);
    const [dateToError01, setDateToError01] = React.useState<boolean>(false);
    const [dateToError02, setDateToError02] = React.useState<boolean>(false);
    const [dateFromError11, setDateFromError11] = React.useState<boolean>(false);
    const [dateFromError12, setDateFromError12] = React.useState<boolean>(false);
    const [dateToError11, setDateToError11] = React.useState<boolean>(false);
    const [dateToError12, setDateToError12] = React.useState<boolean>(false);

    /**
     * mm:dd:yy
     */
    const [dateFrom1, setDateFrom1] = React.useState<Date | null>(null);
    const [dateTo1, setDateTo1] = React.useState<Date | null>(null);
    const [dateFrom2, setDateFrom2] = React.useState<Date | null>(null);
    const [dateTo2, setDateTo2] = React.useState<Date | null>(null);    

    /**
     * hh:mm:ss
     */
    const [valueTimePicker1, setValueTimePicker1] = React.useState<Date | null>(new Date());
    const [valueTimePicker2, setValueTimePicker2] = React.useState<Date | null>(new Date());
    const [valueTimePicker3, setValueTimePicker3] = React.useState<Date | null>(new Date());
    const [valueTimePicker4, setValueTimePicker4] = React.useState<Date | null>(new Date());

    /**
     * 下拉框的选择
     */
    const [dashboard, setDashboard] = React.useState<string>(""); 
    const [row, setRow] = React.useState<string>(""); 
    const [graph, setGraph] = React.useState<string>(""); 

    /**
     * 下拉框选择的index
     */
    const [dashboardIndex, setDashboardIndex] = React.useState<number>(0); 
    const [rowIndex, setRowIndex] = React.useState<number>(0); 
    const [graphIndex, setGraphIndex] = React.useState<number>(0); 

    const [tabs, setTabs] = React.useState(0); // 标签页
    const [rowSelectData, setRowSelectData] = React.useState<any>(); // 二级下拉框数据
    const [graphSelectData, setgraphSelectData] = React.useState<any>(); // 三级下拉框数据

    /**
     * 数据源
     */
    const [dataSource1, setDataSource1] = React.useState<DataSource>({
        grafanaHost: "",
        grafanaPort: "",
        prometheusHost: "",
        prometheusPort: "",
        dateFrom: "",
        dateTo: "",
        graphId: "",
    });
    const [dataSource2, setDataSource2] = React.useState<DataSource>({
        grafanaHost: "",
        grafanaPort: "",
        prometheusHost: "",
        prometheusPort: "",
        dateFrom: "",
        dateTo: "",
        graphId: "",
    });

    const handleTabsChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabs(newValue);
    };

    const handleGraphChange = (event: SelectChangeEvent) => {
        setGraphIndex(parseInt(event.target.value, 10));
        setGraph(event.target.value as string);
    };

    const handleRowChange = (event: SelectChangeEvent) => {
        setRowIndex(parseInt(event.target.value, 10));
        setRow(event.target.value as string);
        setGraph("");
    };

    const handleChange = (event: SelectChangeEvent) => {        
        setDashboardIndex(parseInt(event.target.value, 10));
        setDashboard(event.target.value as string);
        setRow("0");
        setGraph("");
    };

    const onSubmits = (data: SubmitData, e: any) => {
        // console.log("[data]: ", data);
        let timeFrom1 = null;
        let timeTo1 = null;
        let timeFrom2 = null;
        let timeTo2 = null;
        !dateFrom1 && setDateFromError01(true);
        !valueTimePicker1 && setDateFromError02(true);
        !dateTo1 && setDateToError01(true);
        !valueTimePicker2 && setDateToError02(true);
        !dateFrom2 && setDateFromError11(true);
        !valueTimePicker3 && setDateFromError12(true);
        !dateTo2 && setDateToError11(true);
        !valueTimePicker4 && setDateToError12(true);

        const formatTime = (d1: Date, d2: Date): number  => {
            return Date.UTC(
                d1.getFullYear(), 
                d1.getMonth(), 
                d1.getDate(), 
                d2.getHours(), 
                d2.getMinutes(), 
                d2.getSeconds()
            )
        };

        if (dateFrom1 && valueTimePicker1) {
            timeFrom1 = formatTime(dateFrom1, valueTimePicker1);
        };
        if (dateTo1 && valueTimePicker2) {
            timeTo1 = formatTime(dateTo1, valueTimePicker2);
        };
        if (dateFrom2 && valueTimePicker3) {
            timeFrom2 = formatTime(dateFrom2, valueTimePicker3);
        };
        if (dateTo2 && valueTimePicker4) {
            timeTo2 = formatTime(dateTo2, valueTimePicker4);
        };
        
        if (!timeFrom1 || !timeTo1 || !timeFrom2 || !timeTo2) {
            return;
        }
                   
        setDataSource1({
            grafanaHost: data.grafanaHost1,
            grafanaPort: data.grafanaPort1,
            prometheusHost: data.prometheusHost1,
            prometheusPort: data.prometheusPort1,
            dateFrom: timeFrom1.toString(),
            dateTo: timeTo1.toString(),
            graphId: graphIndex.toString(),
        });
        setDataSource2({
            grafanaHost: data.grafanaHost2,
            grafanaPort: data.grafanaPort2,
            prometheusHost: data.prometheusHost2,
            prometheusPort: data.prometheusPort2,
            dateFrom: timeFrom2.toString(),
            dateTo: timeTo2.toString(),
            graphId: graphIndex.toString(),
        });
    };

    const onError = (errors2: any, e: any) => {
        if (errors2.grafanaHost1) 
            setGrafanaHostError1(true);
        if (errors2.grafanaPort1) 
            setGrafanaPortError1(true);
        if (errors2.grafanaHost2) 
            setGrafanaHostError2(true);
        if (errors2.grafanaPort2) 
            setGrafanaPortError2(true);
        if (errors2.prometheusHost1) 
            setPrometheusHostError1(true);
        if (errors2.prometheusPort1) 
            setPrometheusPortError1(true);
        if (errors2.prometheusHost2) 
            setPrometheusHostError2(true);
        if (errors2.prometheusPort2) 
            setPrometheusPortError2(true);
    };

    React.useEffect(() => {
        const host = "http://52.41.98.206:8089/";
        const authorization = "Bearer eyJrIjoiczZteVJMNWdpMGNkWEhzaEVWVk1SVTBkRlVMSmRsYzEiLCJuIjoiaGFuY2tzaG9uIiwiaWQiOjF9";
        const params = {
            query: null,
            starred: false,
            skipRecent: true,
            skipStarred: true,
            folderIds: 1,
            layout: "list",
            prevSort: null,
            type: "dash-db",
        };
        getDashboardsList(host, authorization, params).then((response) => {
            console.log("[#002] getDashboardsList: ", response);
        }).catch((err) => {
            console.log("[#l001] error:", err);            
        });
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            if (name === "grafanaHost1") {
                if (value?.grafanaHost1 === "") {
                    setGrafanaHostError1(true)
                } else {
                    setGrafanaHostError1(false)
                }
            }
            if (name === "grafanaPort1") {
                if (value?.grafanaPort1 === "") {
                    setGrafanaPortError1(true)
                } else {
                    setGrafanaPortError1(false)
                }
            }
            if (name === "grafanaHost2") {
                if (value?.grafanaHost2 === "") {
                    setGrafanaHostError2(true)
                } else {
                    setGrafanaHostError2(false)
                }
            }
            if (name === "grafanaPort2") {
                if (value?.grafanaPort2 === "") {
                    setGrafanaPortError2(true)
                } else {
                    setGrafanaPortError2(false)
                }
            }
            if (name === "prometheusHost1") {
                if (value?.prometheusHost1 === "") {
                    setPrometheusHostError1(true)
                } else {
                    setPrometheusHostError1(false)
                }
            }
            if (name === "prometheusPort1") {
                if (value?.prometheusPort1 === "") {
                    setPrometheusPortError1(true)
                } else {
                    setPrometheusPortError1(false)
                }
            }
            if (name === "prometheusHost2") {
                if (value?.prometheusHost2 === "") {
                    setPrometheusHostError2(true)
                } else {
                    setPrometheusHostError2(false)
                }
            }
            if (name === "prometheusPort2") {
                if (value?.prometheusPort2 === "") {
                    setPrometheusPortError2(true)
                } else {
                    setPrometheusPortError2(false)
                }
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    React.useEffect(() => {
        setRowSelectData(selectJsonData[dashboardIndex]);
    }, [dashboardIndex]);

    React.useEffect(() => {
        setgraphSelectData(selectJsonData[dashboardIndex].panels[rowIndex]);
    }, [rowIndex]);

    return (
        <Box sx={HomeBoxSX()}>
            <form 
                onSubmit={handleSubmit(onSubmits, onError)} 
                style={HomeFormSX()}
            >
                {/* 左边参数组件 */}
                <ParamComponent 
                    grafanaHostError1={grafanaHostError1}
                    grafanaPortError1={grafanaPortError1}
                    grafanaHostError2={grafanaHostError2}
                    grafanaPortError2={grafanaPortError2}
                    prometheusHostError1={prometheusHostError1}
                    prometheusPortError1={prometheusPortError1}
                    prometheusHostError2={prometheusHostError2}
                    prometheusPortError2={prometheusPortError2}
                    register={register}
                    errors={errors}
                    dateFrom1={dateFrom1}
                    setDateFrom1={setDateFrom1}
                    dateTo1={dateTo1}
                    setDateTo1={setDateTo1}
                    dateFrom2={dateFrom2}
                    setDateFrom2={setDateFrom2}
                    dateTo2={dateTo2}
                    setDateTo2={setDateTo2}
                    dashboard={dashboard}
                    handleChange={handleChange}
                    row={row}
                    handleRowChange={handleRowChange}
                    graph={graph}
                    handleGraphChange={handleGraphChange}
                    rowSelectData={rowSelectData}
                    graphSelectData={graphSelectData}
                    tabs={tabs}
                    valueTimePicker1={valueTimePicker1}
                    setValueTimePicker1={setValueTimePicker1}
                    valueTimePicker2={valueTimePicker2}
                    setValueTimePicker2={setValueTimePicker2}
                    valueTimePicker3={valueTimePicker3}
                    setValueTimePicker3={setValueTimePicker3}
                    valueTimePicker4={valueTimePicker4}
                    setValueTimePicker4={setValueTimePicker4}
                    dateFromError01={dateFromError01}
                    dateFromError02={dateFromError02}
                    dateToError01={dateToError01}
                    dateToError02={dateToError02}
                    dateFromError11={dateFromError11}
                    dateFromError12={dateFromError12}
                    dateToError11={dateToError11}
                    dateToError12={dateToError12}
                    setDateFromError01={setDateFromError01}
                    setDateFromError02={setDateFromError02}
                    setDateToError01={setDateToError01}
                    setDateToError02={setDateToError02}
                    setDateFromError11={setDateFromError11}
                    setDateFromError12={setDateFromError12}
                    setDateToError11={setDateToError11}
                    setDateToError12={setDateToError12}
                />
                {/* 右边展示组件 */}
                <GraphChirldren
                    tabs={tabs}
                    handleTabsChange={handleTabsChange}
                    dataSource1={dataSource1}
                    dataSource2={dataSource2}
                />
            </form>
        </Box>
    );
}