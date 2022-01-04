import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
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
} from '@/component/Home/style';
import { UseFormRegister } from "react-hook-form";

interface DataSource1Props {
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
}

export default function DataSource1(props: DataSource1Props) {

    const {
        hostError1,
        register,
        errors,
        portError1,
        dateFrom1,
        setDateFrom1,
        dateTo1,
        setDateTo1,
    } = props;

    return (
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
    );
}