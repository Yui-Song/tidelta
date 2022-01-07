import React from "react";
import Box from "@mui/material/Box";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import $ from "jquery";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export default function TabPanel(props: TabPanelProps) {
    
    const { children, value, index, ...other } = props; 
    
    React.useEffect(() => {
        $("#tabsContainer").css("height", $("#root").height() - 17 + "");
        window.onresize = () => {
            $("#tabsContainer").css("height", $("#root").height() - 17 + "");
        }
    }, []);

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
                <Box sx={{ 
                    p: 1, 
                    display: "flex", 
                    flexWrap: "wrap", 
                    overflowY: "auto",                    
                    // flex: 1,
                    "&::-webkit-scrollbar": {
                        backgroundColor: " #2b2b2b",
                        width: "12px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        cursor: "pointer",
                        border: "1px solid #2b2b2b",
                        borderRadius: "12px",
                        backgroundColor: "#6b6b6b",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#959595",
                        border: "1px solid #2b2b2b",             
                    }                    
                }} id={"tabsContainer"}>
                    {children}
                </Box>
            )}
        </div>
    );
}