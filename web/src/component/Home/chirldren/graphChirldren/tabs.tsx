
import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

interface TabsChirldrenProps {
    tabs: number,
    handleTabsChange: (event: React.SyntheticEvent, newValue: number) => void,
}

export default function TabsChirldren(props: TabsChirldrenProps) {

    const {
        tabs,
        handleTabsChange,
    } = props;

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={tabs}
            onChange={handleTabsChange}
            aria-label="Vertical tabs example"
            sx={{
                borderRight: 1,
                borderColor: 'divider',
                bgcolor: '#22252a',
                "& .MuiButtonBase-root": {
                    color: "#caced9",
                }
            }}
        >
            <Tab label="Metrics Diff" {...a11yProps(0)} />
            <Tab label="Config Diff" {...a11yProps(1)} />
            <Tab label="Raw Metrics" {...a11yProps(2)} />
        </Tabs>
    );
}