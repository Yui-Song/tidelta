import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TabPanel from "@/component/Home/chirldren/tab-panel";
import {
    HomeGraphSX,
} from '@/component/Home/style';
import TabsChirldren from "@/component/Home/chirldren/graphChirldren/tabs";
import { DataSource } from "@/component/Home/home";
import MetricsDiffJson from "@/resource/data/metricsDiff.json";
import EnhancedTable from "./graphChirldren/table";

interface GraphChirldrenProps {
    tabs: number,
    handleTabsChange: (event: React.SyntheticEvent, newValue: number) => void,
    dataSource1: DataSource,
    dataSource2: DataSource,
    dashboardsData2: DashboardJsonsProps,
};

export interface MetricsDiffJsonProps {
    message: string,
    data: Array<MetricsComponentProps>,
}

export interface MetricsComponentProps{
    component: string,
    data: Array<MetricsData>,
}

export interface MetricsData{
    metrics: string | null,
    value: {
        end: number,
        start: number,
    } | null,
}

export default function GraphChirldren(props: GraphChirldrenProps) {

    const {
        tabs,
        handleTabsChange,
        dataSource1,
        dataSource2,
        dashboardsData2,
        dashboardIndex,
        submitss,
    } = props;
    // debugger
    const datas:Array<MetricsComponentProps> = MetricsDiffJson.data;

    const [refresh, setRefresh] = React.useState(true);
    
    console.log(dashboardsData2[dashboardIndex].url);

    const link = [
        'http://52.41.98.206:3000/d-solo/000000011/aws-test-v530-tidb?orgId=1&from=1641400615171&to=1641403125677&panelId=80',
        'http://52.41.98.206:3000/d-solo/000000011/aws-test-v530-tidb?orgId=1&from=1641400615171&to=1641403125677&panelId=21',
        'http://52.41.98.206:3000/d-solo/000000011/aws-test-v530-tidb?orgId=1&from=1641362839468&to=1641368235964&panelId=80',
        'http://52.41.98.206:3000/d-solo/000000011/aws-test-v530-tidb?orgId=1&from=1641362839468&to=1641368235964&panelId=21',
    ]    

    return (
        <Grid item sx={HomeGraphSX()}>
            <Box sx={{ flex: 1,bgcolor: '#0b0c0e', display: 'flex'}}>
                <Grid container sx={{flex: 1}}>
                    {
                        tabs === 0 ?
                        <TabPanel value={tabs} index={0}>
                            {
                                datas.map((obj, index) => (
                                    <EnhancedTable
                                        key={"t" + index}
                                        propsData={obj.data}
                                        components={obj.component}
                                    />
                                ))
                            }                    
                        </TabPanel> : <></>
                    }
                    {
                        tabs === 1 ?
                        <TabPanel value={tabs} index={2}>
                            <Grid item xs={12} sx={{ marginBottom: "8px"}} className={"HomeRawMetricsGraph"}>
                                {
                                    submitss !== 0 ? 
                                    <iframe 
                                        src={submitss%2 === 0 ? link[0] : link[2]}
                                        width="100%" 
                                        height="100%" 
                                        frameBorder="0"
                                    >
                                    </iframe> : <></>
                                }
                            </Grid>
                            <Grid item xs={12} sx={{ marginTop: "8px",paddingBottom: "1px"}} className={"HomeRawMetricsGraph"}>
                                {
                                    submitss !== 0 ? 
                                    <iframe 
                                        src={submitss%2 === 0 ? link[1] : link[3]}
                                        width="100%" 
                                        height="100%" 
                                        frameBorder="0"
                                    >
                                    </iframe> : <></>
                                }                             
                            </Grid>
                        </TabPanel> : <></>
                    }
                    
                    {
                        tabs === 2 ?
                        <TabPanel value={tabs} index={2}>
                            Item Two
                        </TabPanel> : <></>
                    }                    
                </Grid>
                <Grid container sx={{width: "135px"}}>
                    <TabsChirldren 
                        tabs={tabs}
                        setRefresh={setRefresh}
                        handleTabsChange={handleTabsChange}
                    />
                </Grid>
            </Box>
        </Grid>
    );
}