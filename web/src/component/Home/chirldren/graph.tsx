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
    } = props;

    const datas:Array<MetricsComponentProps> = MetricsDiffJson.data;

    const [refresh, setRefresh] = React.useState(true);

    return (
        <Grid item sx={HomeGraphSX()}>
            <Box
                sx={{ flex: 1,bgcolor: '#0b0c0e', display: 'flex'}}
            >                
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
                </TabPanel>

                <TabPanel value={tabs} index={1}>
                    Item Two
                </TabPanel>
                
                <TabPanel value={tabs} index={2}>
                    <Grid item xs={12} sx={{ marginBottom: "8px", height: "500px"}} className={"HomeRawMetricsGraph"}>
                        <iframe 
                            src={
                                refresh ? ("http://" + "18.237.4.239" + ":" + "3000" + "/d-solo/000000011/aws-test-v530-tidb?orgId=1&refresh=30s&from=1641206337164&to=1641209937164&panelId=80") : undefined
                            }
                            width="100%" 
                            height="100%" 
                            frameBorder="0">
                        </iframe>
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: "8px",paddingBottom: "1px", height: "500px"}} className={"HomeRawMetricsGraph"}>
                        <iframe 
                            src={
                                refresh ? ("http://" + "18.237.4.239" + ":" + "3000" + "/d-solo/000000011/aws-test-v530-tidb?orgId=1&refresh=30s&from=1641206337164&to=1641209937164&panelId=80") : undefined
                            }
                            width="100%" 
                            height="100%" 
                            frameBorder="0"
                        >                                    
                        </iframe>
                    </Grid>
                </TabPanel>

                <TabsChirldren 
                    tabs={tabs}
                    handleTabsChange={handleTabsChange}
                />
            </Box>
        </Grid>
    );
}