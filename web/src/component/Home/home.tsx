import React from "react";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { SelectChangeEvent } from '@mui/material/Select';
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

export default function Home() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

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

    const [dateFrom1, setDateFrom1] = React.useState<Date | null>(null);
    const [dateTo1, setDateTo1] = React.useState<Date | null>(null);
    const [dateFrom2, setDateFrom2] = React.useState<Date | null>(null);
    const [dateTo2, setDateTo2] = React.useState<Date | null>(null);    
    /**
     * 秒的值
     */
    const [valueTimePicker1, setValueTimePicker1] = React.useState<Date | null>(new Date());
    const [valueTimePicker2, setValueTimePicker2] = React.useState<Date | null>(new Date());
    const [valueTimePicker3, setValueTimePicker3] = React.useState<Date | null>(new Date());
    const [valueTimePicker4, setValueTimePicker4] = React.useState<Date | null>(new Date());

    const [dashboard, setDashboard] = React.useState<string>(""); // 一级下拉框的选择
    const [row, setRow] = React.useState<string>(""); // 二级下拉框的选择
    const [graph, setGraph] = React.useState<string>(""); // 三级下拉框的选择
    const [dashboardIndex, setDashboardIndex] = React.useState<number>(0); // 一级下拉框的index
    const [rowIndex, setRowIndex] = React.useState<number>(0); // 二级下拉框的index
    const [graphIndex, setGraphIndex] = React.useState<number>(0); // 三级下拉框的index
    const [tabs, setTabs] = React.useState(0); // 标签页
    const [rowSelectData, setRowSelectData] = React.useState<any>(); // 二级下拉框数据
    const [graphSelectData, setgraphSelectData] = React.useState<any>(); // 三级下拉框数据

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

    const onSubmits = (data: any, e: any) => {
        console.log("[data]: ", data);
    };

    const onError = (errors: any, e: any) => {
        if (errors.grafanaHos1) 
            setGrafanaHostError1(true);
        if (errors.grafanaPor1) 
            setGrafanaPortError1(true);
        if (errors.grafanaHos2) 
            setGrafanaHostError2(true);
        if (errors.grafanaPor2) 
            setGrafanaPortError2(true);
        if (errors.prometheusHos1) 
            setPrometheusHostError1(true);
        if (errors.prometheusPor1) 
            setPrometheusPortError1(true);
        if (errors.prometheusHos2) 
            setPrometheusHostError2(true);
        if (errors.prometheusPor2) 
            setPrometheusPortError2(true);
    };

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
                />
                {/* 右边展示组件 */}
                <GraphChirldren
                    tabs={tabs}
                    handleTabsChange={handleTabsChange}
                />
            </form>
        </Box>
    );
}