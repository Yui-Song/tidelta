import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { inputVerify } from "@/component/Home/util/input-verify";
import {
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
    HomeInput2SX,
    HomeSelectDateFromContainer2SX,
} from '@/component/Home/style';
import { UseFormRegister } from "react-hook-form";

interface DataSource1Props {
    grafanaHostError1: boolean,
    grafanaPortError1: boolean,
    prometheusHostError1: boolean,
    prometheusPortError1: boolean,
    register: UseFormRegister<Record<string, any>>,
    errors: {
        [x: string]: any;
    },
    dateFrom1: Date | null,
    setDateFrom1: React.Dispatch<React.SetStateAction<Date | null>>,
    dateTo1: Date | null,
    setDateTo1: React.Dispatch<React.SetStateAction<Date | null>>,  
    valueTimePicker1: any,
    setValueTimePicker1: any,
    valueTimePicker2: any,
    setValueTimePicker2: any,
    dateFromError01: boolean,
    dateFromError02: boolean,
    dateToError01: boolean,
    dateToError02: boolean,
    setDateFromError01: React.Dispatch<React.SetStateAction<boolean>>,
    setDateFromError02: React.Dispatch<React.SetStateAction<boolean>>,
    setDateToError01: React.Dispatch<React.SetStateAction<boolean>>,
    setDateToError02: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function DataSource1(props: DataSource1Props) {

    const {
        grafanaHostError1,
        grafanaPortError1,
        prometheusHostError1,
        prometheusPortError1,
        register,
        errors,
        dateFrom1,
        setDateFrom1,
        dateTo1,
        setDateTo1,
        valueTimePicker1,
        setValueTimePicker1,
        valueTimePicker2,
        setValueTimePicker2,
        dateFromError01,
        dateFromError02,
        dateToError01,
        dateToError02,
        setDateFromError01,
        setDateFromError02,
        setDateToError01,
        setDateToError02,
    } = props;

    return (
        <Box sx={HomeSelectOneSX()}>
            <Grid sx={HomeSelectOneTitleSX()}>
                Data source 1
                </Grid>
            <Divider sx={DividerStyle()} />
            <Grid item sx={HomeInputSX()}>
                <Grid item xs={7} sx={HomeInputHostSX()}>
                    <TextField
                        id={"data-source-1-input-Grafanahost"}
                        label={"Grafana Host"}
                        variant="outlined"
                        sx={HomeInputHostTextSX()}
                        error={grafanaHostError1}
                        autoComplete="false"
                        {...register("grafanaHost1", inputVerify("host"))}
                    />
                    {errors["grafanaHost1"] &&
                        <span className={"form-dialog-input-error-tip"}>
                            {errors["grafanaHost1"].message}
                        </span>
                    }
                </Grid>
                <Grid item xs={5} sx={HomeInputPortSX()}>
                    <TextField
                        id={"data-source-1-input-port"}
                        label={"Grafana Port"}
                        variant="outlined"
                        sx={HomeInputHostTextSX()}
                        error={grafanaPortError1}
                        autoComplete="false"
                        {...register("grafanaPort1", inputVerify("port"))}
                    />
                    {errors["grafanaPort1"] &&
                        <span className={"form-dialog-input-error-tip"}>
                            {errors["grafanaPort1"].message}
                        </span>
                    }
                </Grid>
            </Grid>

            <Grid item sx={HomeInput2SX()}>
                <Grid item xs={7} sx={HomeInputHostSX()}>
                    <TextField
                        id={"data-source-1-input-Prometheushost"}
                        label={"Prometheus Host"}
                        variant="outlined"
                        sx={HomeInputHostTextSX()}
                        error={prometheusHostError1}
                        autoComplete="false"
                        {...register("prometheusHost1", inputVerify("host"))}
                    />
                    {errors["prometheusHost1"] &&
                        <span className={"form-dialog-input-error-tip"}>
                            {errors["prometheusHost1"].message}
                        </span>
                    }
                </Grid>
                <Grid item xs={5} sx={HomeInputPortSX()}>
                    <TextField
                        id={"data-source-1-input-Prometheusport"}
                        label={"Prometheus Port"}
                        variant="outlined"
                        sx={HomeInputHostTextSX()}
                        error={prometheusPortError1}
                        autoComplete="false"
                        {...register("prometheusPort1", inputVerify("port"))}
                    />
                    {errors["prometheusPort1"] &&
                        <span className={"form-dialog-input-error-tip"}>
                            {errors["prometheusPort1"].message}
                        </span>
                    }
                </Grid>
            </Grid>

            <Grid item sx={HomeSelectDateFromSX()}>
                <Grid item xs={7} sx={HomeSelectDateFromContainer2SX()}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Date from"
                            value={dateFrom1}
                            onChange={(newValue) => {
                                setDateFrom1(newValue);
                                if (dateFromError01) setDateFromError01(false);
                            }}
                            inputFormat="yyyy/MM/dd"
                            mask="____/__/__"
                            renderInput={
                                (params) =>
                                    <TextField
                                        {...params}
                                        error={dateFromError01}
                                        sx={HomeSelectDateFromComponentSX()}
                                    />
                            }
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={5} sx={HomeSelectDateFromContainerSX()}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                            ampm={false}
                            openTo="hours"
                            views={['hours', 'minutes', 'seconds']}
                            inputFormat="HH:mm:ss"
                            mask="__:__:__"
                            label="Date from"
                            value={valueTimePicker1}
                            onChange={(newValue) => {
                                setValueTimePicker1(newValue);
                                if (dateFromError02) setDateFromError02(false);
                            }}
                            renderInput={
                                (params) => 
                                <TextField 
                                    {...params}
                                    error={dateFromError02} 
                                    sx={HomeSelectDateFromComponentSX()}
                                />
                            }
                        />
                    </LocalizationProvider>
                </Grid>
            </Grid>

            <Grid item sx={HomeSelectDateToSX()}>
                <Grid item xs={7} sx={HomeSelectDateFromContainer2SX()}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Date to"
                            value={dateTo1}
                            inputFormat="yyyy/MM/dd"
                            mask="____/__/__"
                            onChange={(newValue) => {
                                setDateTo1(newValue);
                                if (dateToError01) setDateToError01(false);
                            }}
                            renderInput={
                                (params) =>
                                    <TextField
                                        {...params}
                                        error={dateToError01}
                                        sx={HomeSelectDateFromComponentSX()}
                                    />
                            }
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={5} sx={HomeSelectDateFromContainerSX()}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                            ampm={false}
                            openTo="hours"
                            views={['hours', 'minutes', 'seconds']}
                            inputFormat="HH:mm:ss"
                            mask="__:__:__"
                            label="Date to"
                            value={valueTimePicker2}
                            onChange={(newValue) => {
                                setValueTimePicker2(newValue);
                                if (dateToError02) setDateToError02(false);
                            }}
                            renderInput={
                                (params) => 
                                <TextField 
                                    {...params}
                                    error={dateToError02} 
                                    sx={HomeSelectDateFromComponentSX()}
                                />
                            }
                        />
                    </LocalizationProvider>
                </Grid>
            </Grid>
        </Box>
    );
}