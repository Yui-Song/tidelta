import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { inputVerify } from "@/component/Home/util/input-verify";
import { UseFormRegister } from "react-hook-form";
import {
    SelectPanelTheme,
    HomeSelectSX,
    HomeSelectOneSX,
    HomeSelectOneTitleSX,
    DividerStyle,
    HomeInputSX,
    HomeInputPortSX,
    HomeSelectDateFromSX,
    HomeInputHostSX,
    HomeInputHostTextSX,
    HomeSelectDateToSX,
    HomeSelectDateFromComponentSX,
    HomeSelectDateFromContainerSX,
    HomeSubmitButton,
} from '@/component/Home/style';

interface ParamComponentProps {
    hostError1: boolean,
    register: UseFormRegister<Record<string, any>>,
    errors: {
        [x: string]: any;
    },
    portError1: boolean,
    dateFrom1: Date | null,
    setDateFrom1: React.Dispatch<React.SetStateAction<Date | null>>,
    dateTo1: Date | null,
    setDateTo1: React.Dispatch<React.SetStateAction<Date | null>>,
    hostError2: boolean,
    dateFrom2: Date | null,
    setDateFrom2: React.Dispatch<React.SetStateAction<Date | null>>,
    dateTo2: Date | null,
    setDateTo2: React.Dispatch<React.SetStateAction<Date | null>>,
    portError2: boolean,
    dashboard: string,
    handleChange: (event: SelectChangeEvent) => void,
};

export default function ParamComponent(props: ParamComponentProps) {

    const {
        hostError1,
        register,
        errors,
        portError1,
        dateFrom1,
        setDateFrom1,
        dateTo1,
        setDateTo1,
        hostError2,
        dateFrom2,
        setDateFrom2,
        dateTo2,
        setDateTo2,
        portError2,
        dashboard,
        handleChange,
    } = props;

    return (
        <Grid item xs={3} sx={HomeSelectSX()}>

            <Box sx={HomeSelectOneSX()}>
                <Grid sx={HomeSelectOneTitleSX()}>
                    Data source 1
                </Grid>
                <Divider sx={DividerStyle()} />
                <Grid item sx={HomeInputSX()}>
                    <Grid item xs={8} sx={HomeInputHostSX()}>
                        <TextField
                            id={"data-source-1-input-host"}
                            label={"Host"}
                            variant="outlined"
                            sx={HomeInputHostTextSX()}
                            error={hostError1}
                            autoComplete="false"
                            {...register("host1", inputVerify("host"))}
                        />
                        {errors["host1"] &&
                            <span className={"form-dialog-input-error-tip"}>
                                {errors["host1"].message}
                            </span>
                        }
                    </Grid>
                    <Grid item xs={4} sx={HomeInputPortSX()}>
                        <TextField
                            id={"data-source-1-input-port"}
                            label={"Port"}
                            variant="outlined"
                            sx={HomeInputHostTextSX()}
                            error={portError1}
                            autoComplete="false"
                            {...register("port1", inputVerify("port"))}
                        />
                        {errors["port1"] &&
                            <span className={"form-dialog-input-error-tip"}>
                                {errors["port1"].message}
                            </span>
                        }
                    </Grid>
                </Grid>

                <Grid item sx={HomeSelectDateFromSX()}>
                    <Grid item sx={HomeSelectDateFromContainerSX()}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date from"
                                value={dateFrom1}
                                onChange={(newValue) => {
                                    setDateFrom1(newValue);
                                }}
                                renderInput={
                                    (params) =>
                                        <TextField
                                            {...params}
                                            sx={HomeSelectDateFromComponentSX()}
                                        />
                                }
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>

                <Grid item sx={HomeSelectDateToSX()}>
                    <Grid item sx={HomeSelectDateFromContainerSX()}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date to"
                                value={dateTo1}
                                onChange={(newValue) => {
                                    setDateTo1(newValue);
                                }}
                                renderInput={
                                    (params) =>
                                        <TextField
                                            {...params}
                                            sx={HomeSelectDateFromComponentSX()}
                                        />
                                }
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={HomeSelectOneSX()}>
                <Grid sx={HomeSelectOneTitleSX()}>
                    Data source 2
                </Grid>
                <Divider sx={DividerStyle()} />
                <Grid item sx={HomeInputSX()}>
                    <Grid item xs={8} sx={HomeInputHostSX()}>
                        <TextField
                            id={"data-source-1-input-host"}
                            label={"Host"}
                            variant="outlined"
                            sx={HomeInputHostTextSX()}
                            error={hostError2}
                            autoComplete="false"
                            {...register("host2", inputVerify("host"))}
                        />
                        {errors["host2"] &&
                            <span className={"form-dialog-input-error-tip"}>
                                {errors["host2"].message}
                            </span>
                        }
                    </Grid>
                    <Grid item xs={4} sx={HomeInputPortSX()}>
                        <TextField
                            id={"data-source-1-input-port"}
                            label={"Port"}
                            variant="outlined"
                            sx={HomeInputHostTextSX()}
                            error={portError2}
                            autoComplete="false"
                            {...register("port2", inputVerify("port"))}
                        />
                        {errors["port2"] &&
                            <span className={"form-dialog-input-error-tip"}>
                                {errors["port2"].message}
                            </span>
                        }
                    </Grid>
                </Grid>

                <Grid item sx={HomeSelectDateFromSX()}>
                    <Grid item sx={HomeSelectDateFromContainerSX()}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date from"
                                value={dateFrom2}
                                onChange={(newValue) => {
                                    setDateFrom2(newValue);
                                }}
                                renderInput={
                                    (params) =>
                                        <TextField
                                            {...params}
                                            sx={HomeSelectDateFromComponentSX()}
                                        />
                                }
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>

                <Grid item sx={HomeSelectDateToSX()}>
                    <Grid item sx={HomeSelectDateFromContainerSX()}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date to"
                                value={dateTo2}
                                onChange={(newValue) => {
                                    setDateTo2(newValue);
                                }}
                                renderInput={
                                    (params) =>
                                        <TextField
                                            {...params}
                                            sx={HomeSelectDateFromComponentSX()}
                                        />
                                }
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
            </Box>

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
                    <Grid item sx={HomeSelectDateFromSX()}>
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
                    <Grid item sx={HomeSelectDateToSX()}>
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

            <Grid item container sx={{ justifyContent: "flex-end" }}>
                <Button
                    variant="contained"
                    sx={HomeSubmitButton()}
                    endIcon={<ChevronRightOutlinedIcon />}
                    type={"submit"}
                >
                    Submit
                </Button>
            </Grid>
        </Grid>
    );
}