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

interface GraphChirldrenProps {
    tabs: number,
    handleTabsChange: (event: React.SyntheticEvent, newValue: number) => void,
};

export default function GraphChirldren(props: GraphChirldrenProps) {

    const {
        tabs,
        handleTabsChange,
    } = props;

    return (
        <Grid item sx={HomeGraphSX()}>
            <Box
                sx={{ flex: 1,bgcolor: '#0b0c0e', display: 'flex'}}
            >                
                <TabPanel value={tabs} index={0}>
                    
                </TabPanel>

                <TabPanel value={tabs} index={1}>
                    Item Two
                </TabPanel>
                
                <TabPanel value={tabs} index={2}>
                    <Grid item xs={12} sx={{ marginBottom: "8px",}} className={"HomeRawMetricsGraph"}>
                        <iframe 
                            src="http://18.237.4.239:3000/d-solo/000000011/aws-test-v530-tidb?orgId=1&refresh=30s&from=1641206337164&to=1641209937164&panelId=80" 
                            width="100%" 
                            height="100%" 
                            frameBorder="0">
                        </iframe>
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: "8px",paddingBottom: "1px"}} className={"HomeRawMetricsGraph"}>
                        <iframe 
                            src="http://18.237.4.239:3000/d-solo/000000011/aws-test-v530-tidb?orgId=1&refresh=30s&from=1641208996525&to=1641212596525&panelId=6" 
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