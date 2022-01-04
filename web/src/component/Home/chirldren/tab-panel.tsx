import React from "react";
import Box from "@mui/material/Box";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export default function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{
                flex: value !== index ? 0 : 1,
                display: "flex",
                flexDirection: "column",
            }}
            {...other}
        >
            {value === index && (
                <Box sx={{ height: "100%", p: 2, display: "flex", flexWrap: "wrap", }}>
                    {children}
                </Box>
            )}
        </div>
    );
}