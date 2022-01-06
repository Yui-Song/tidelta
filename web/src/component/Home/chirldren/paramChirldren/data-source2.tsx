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
import { UseFormRegister } from "react-hook-form";
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

interface DataSource2Props {
    grafanaHostError2: boolean,
    grafanaPortError2: boolean,
    prometheusHostError2: boolean,
    prometheusPortError2: boolean,
    register: UseFormRegister<Record<string, any>>,
    errors: {
        [x: string]: any;
    },
    dateFrom2: Date | null,
    setDateFrom2: React.Dispatch<React.SetStateAction<Date | null>>,
    dateTo2: Date | null,
    setDateTo2: React.Dispatch<React.SetStateAction<Date | null>>,
    valueTimePicker3:any,
    setValueTimePicker3:any,
};

export default function DataSource2(props: DataSource2Props) {

    const {
        grafanaHostError2,
        grafanaPortError2,
        prometheusHostError2,
        prometheusPortError2,
        register,
        errors,
        dateFrom2,
        setDateFrom2,
        dateTo2,
        setDateTo2,
        valueTimePicker3,
        setValueTimePicker3,
    } = props;

    return (
        <Box sx={HomeSelectOneSX()}>
            <Grid sx={HomeSelectOneTitleSX()}>
                Data source 2
                </Grid>
            <Divider sx={DividerStyle()} />
            <Grid item sx={HomeInputSX()}>
                <Grid item xs={7} sx={HomeInputHostSX()}>
                    <TextField
                        id={"data-source-1-input-Grafanahost2"}
                        label={"Grafana Host"}
                        variant="outlined"
                        sx={HomeInputHostTextSX()}
                        error={grafanaHostError2}
                        autoComplete="false"
                        {...register("grafanaHost2", inputVerify("host"))}
                    />
                    {errors["grafanaHost2"] &&
                        <span className={"form-dialog-input-error-tip"}>
                            {errors["grafanaHost2"].message}
                        </span>
                    }
                </Grid>
                <Grid item xs={5} sx={HomeInputPortSX()}>
                    <TextField
                        id={"data-source-1-input-Grafanaport2"}
                        label={"Grafana Port"}
                        variant="outlined"
                        sx={HomeInputHostTextSX()}
                        error={grafanaPortError2}
                        autoComplete="false"
                        {...register("grafanaPort2", inputVerify("port"))}
                    />
                    {errors["grafanaPort2"] &&
                        <span className={"form-dialog-input-error-tip"}>
                            {errors["grafanaPort2"].message}
                        </span>
                    }
                </Grid>
            </Grid>

            <Grid item sx={HomeInput2SX()}>
                <Grid item xs={7} sx={HomeInputHostSX()}>
                    <TextField
                        id={"data-source-1-input-Prometheushost2"}
                        label={"Prometheus Host"}
                        variant="outlined"
                        sx={HomeInputHostTextSX()}
                        error={prometheusHostError2}
                        autoComplete="false"
                        {...register("prometheusHost2", inputVerify("host"))}
                    />
                    {errors["prometheusHost2"] &&
                        <span className={"form-dialog-input-error-tip"}>
                            {errors["prometheusHost2"].message}
                        </span>
                    }
                </Grid>
                <Grid item xs={5} sx={HomeInputPortSX()}>
                    <TextField
                        id={"data-source-1-input-Prometheusport2"}
                        label={"Prometheus Port"}
                        variant="outlined"
                        sx={HomeInputHostTextSX()}
                        error={prometheusPortError2}
                        autoComplete="false"
                        {...register("prometheusPort2", inputVerify("port"))}
                    />
                    {errors["prometheusPort2"] &&
                        <span className={"form-dialog-input-error-tip"}>
                            {errors["prometheusPort2"].message}
                        </span>
                    }
                </Grid>
            </Grid>            

            <Grid item sx={HomeSelectDateFromSX()}>
                <Grid item xs={7} sx={HomeSelectDateFromContainer2SX()}>
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
                <Grid item xs={5} sx={HomeSelectDateFromContainerSX()}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                            ampm={false}
                            openTo="hours"
                            views={['hours', 'minutes', 'seconds']}
                            inputFormat="HH:mm:ss"
                            mask="__:__:__"
                            label="With seconds"
                            value={valueTimePicker3}
                            onChange={(newValue) => {
                                setValueTimePicker3(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
            </Grid>

            <Grid item sx={HomeSelectDateToSX()}>
                <Grid item xs={7} sx={HomeSelectDateFromContainer2SX()}>
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
                <Grid item xs={5} sx={HomeSelectDateFromContainerSX()}>
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
    );
}