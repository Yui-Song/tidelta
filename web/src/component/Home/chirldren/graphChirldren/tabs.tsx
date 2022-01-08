
import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { IconButton } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

interface TabsChirldrenProps {
    tabs: number,
    handleTabsChange: (event: React.SyntheticEvent, newValue: number) => void,
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TabsChirldren(props: TabsChirldrenProps) {

    const {
        tabs,
        handleTabsChange,
        setRefresh,
    } = props;

    const handleRefresh: React.MouseEventHandler<HTMLButtonElement> | undefined = () => {
        setRefresh(false);
        setRefresh(true);
    }

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
                position: "relative",
                "& .MuiButtonBase-root": {
                    color: "#caced9",
                }
            }}
        >
            <Tab label="Metrics Diff" {...a11yProps(0)} />
            <Tab label="Raw Metrics" {...a11yProps(1)} />
            <Tab label="Config Diff" {...a11yProps(2)} />
            {
                tabs === 1 ?
                <IconButton
                    aria-label="add to shopping cart"
                    onClick={handleRefresh}
                    sx={{
                        position: "absolute",
                        bottom: "32px",
                        borderRadius: "8px",
                        left: "50%",
                        backgroundColor: "#1976d2",
                        transform: 'translate(-50%, 0px)',
                        "&:hover": {
                            backgroundColor: "#1976d2"
                        }
                    }}
                >
                    <ReplayIcon />
                </IconButton> : <></>
            }
        </Tabs>
    );
}