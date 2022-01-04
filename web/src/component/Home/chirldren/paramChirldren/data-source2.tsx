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
} from '@/component/Home/style';

interface DataSource2Props {
    portError2: boolean,
    hostError2: boolean,
    register: UseFormRegister<Record<string, any>>,
    errors: {
        [x: string]: any;
    },
    dateFrom2: Date | null,
    setDateFrom2: React.Dispatch<React.SetStateAction<Date | null>>,
    dateTo2: Date | null,
    setDateTo2: React.Dispatch<React.SetStateAction<Date | null>>,
};

export default function DataSource2(props: DataSource2Props) {

    const {
        hostError2,
        portError2,
        register,
        errors,
        dateFrom2,
        setDateFrom2,
        dateTo2,
        setDateTo2,
    } = props;

    return (
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
    );
}