import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
    SelectPanelTheme,
    HomeSelectOneSX,
    HomeSelectOneTitleSX,
    DividerStyle,
    HomeInputSX,
    HomeSelectDateFromSX,
    HomeSelectDateToSX,
} from '@/component/Home/style';
import { getDashboardsList } from "@/api/api-grafana";
import dashboardList from "@/resource/data/param/dashboardList";
import dashboardJson from "@/resource/data/select-panel/dashboard.json";
import BackupImportJson from "@/resource/data/select-panel/row/0.Backup&Import.json";

interface SelectChirldrenProps {
    dashboard: string,
    handleChange: (event: SelectChangeEvent) => void,
    row: string,
    handleRowChange: (event: SelectChangeEvent) => void,
    graph: string,
    handleGraphChange: (event: SelectChangeEvent) => void,
};

export default function SelectChirldren(props: SelectChirldrenProps) {

    const {
        dashboard,
        handleChange,
        row,
        handleRowChange,
        graph,
        handleGraphChange,
    } = props;    

    React.useEffect(() => {
        let rowData: Array<string> = [];
        BackupImportJson.panels.forEach((obj) => {
            rowData.push(obj.title);
        });
        console.log(rowData);
        
    }, []);

    React.useEffect(() => {
        const host = "http://18.237.4.239:3000/";
        const cookie = "grafana_session_3000=00218d99996a3f332f7418445039b74a; grafana_session_3000=2d2c687f55dbb7f2f84d2288ac244459";
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
        // getDashboardsList(host, cookie, params).then((response) => {
        //     console.log("[#002] getDashboardsList: ", response);
        // }).catch((err) => {
        //     console.log("[#l001] error:", err);            
        // });
    }, []);

    return (
        <Box sx={HomeSelectOneSX()}>
            <Grid sx={HomeSelectOneTitleSX()}>
                Select panel
            </Grid>
            <Divider sx={DividerStyle()} />
            <ThemeProvider theme={SelectPanelTheme}>
                <Grid item sx={HomeInputSX()}>
                    <Box sx={{ width: "100%" }}>
                        <FormControl fullWidth>
                            <InputLabel
                                id="select-dashboard"
                            >
                                Dashboard
                            </InputLabel>
                            <Select
                                labelId="select-dashboard"
                                id="dashboard-simple-select"
                                value={dashboard}
                                label="Dashboard"
                                onChange={handleChange}
                                sx={{ maxHeight: '100px', overflowY: "auto" }}
                            >
                                {
                                    dashboardList?.map((d, k) => (
                                        <MenuItem value={(k * 10)} key={"dashboard" + k}>
                                            {d}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item sx={HomeSelectDateFromSX()}>
                    <Box sx={{ width: "100%" }}>
                        <FormControl fullWidth>
                            <InputLabel
                                id="select-row"
                            >
                                Row
                            </InputLabel>
                            <Select
                                labelId="select-row"
                                id="row-simple-select"
                                value={row}
                                label="Row"
                                onChange={handleRowChange}
                            >
                                <MenuItem value={10}>Row</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                <MenuItem value={50}>Thirty</MenuItem>
                                <MenuItem value={40}>Thirty</MenuItem>
                                <MenuItem value={60}>Thirty</MenuItem>
                                <MenuItem value={70}>Thirty</MenuItem>
                                <MenuItem value={80}>Thirty</MenuItem>
                                <MenuItem value={90}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item sx={HomeSelectDateToSX()}>
                    <Box sx={{ width: "100%" }}>
                        <FormControl fullWidth>
                            <InputLabel
                                id="select-graph"
                            >
                                Graph
                            </InputLabel>
                            <Select
                                labelId="select-graph"
                                id="graph-simple-select"
                                value={graph}
                                label="Graph"
                                onChange={handleGraphChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                <MenuItem value={50}>Thirty</MenuItem>
                                <MenuItem value={40}>Thirty</MenuItem>
                                <MenuItem value={60}>Thirty</MenuItem>
                                <MenuItem value={70}>Thirty</MenuItem>
                                <MenuItem value={80}>Thirty</MenuItem>
                                <MenuItem value={90}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </ThemeProvider>
        </Box>
    );
}