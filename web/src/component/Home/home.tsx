import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { Grid, Toolbar } from "@mui/material";
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useForm } from "react-hook-form";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { inputVerify } from "@/component/Home/util/input-verify";
import { 
    HomeBoxSX,
    HomeSelectSX,
    HomeGraphSX,
    HomeSelectOneSX,
    HomeSelectOneTitleSX,
    DividerStyle,
    HomeInputSX,
    HomeSelectDateFromSX,
    HomeInputHostSX,
    HomeInputHostTextSX,
    HomeSelectDateToSX,
    HomeSelectDateFromComponentSX,
    HomeSelectDateFromContainerSX,
} from '@/component/Home/style';

export default function Home() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [hostError1, setHostError1] = React.useState<boolean>(false);
    const [portError1, setPortError1] = React.useState<boolean>(false);
    const [dateFrom1, setDateFrom1] = React.useState<Date | null>(null);
    const [dateTo1, setDateTo1] = React.useState<Date | null>(null);
    const [dateFrom2, setDateFrom2] = React.useState<Date | null>(null);
    const [dateTo2, setDateTo2] = React.useState<Date | null>(null);

    return(
        <Box sx={HomeBoxSX()}>
            <Grid item xs={3} sx={HomeSelectSX()}>
                <Box sx={HomeSelectOneSX()}>
                    <Grid sx={HomeSelectOneTitleSX()}>
                        Data source 1
                    </Grid>
                    <Divider sx={DividerStyle()}/>
                    <Grid item sx={HomeInputSX()}>
                        <Grid item xs={8} sx={HomeInputHostSX()}>
                            <TextField
                                id={"data-source-1-input-host"} 
                                label={"Host"}
                                variant="outlined" 
                                sx={HomeInputHostTextSX()}                                        
                                error={hostError1}
                                autoComplete="false"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                {...register("host", inputVerify("host"))}
                            />
                            {errors["host"] &&
                                <span className={"form-dialog-input-error-tip"}>
                                    {errors["host"].message}
                                </span>
                            }
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id={"data-source-1-input-port"} 
                                label={"Port"}
                                variant="outlined" 
                                sx={HomeInputHostTextSX()}                                        
                                error={portError1}
                                autoComplete="false"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                {...register("port", inputVerify("port"))}
                            />
                            {errors["port"] &&
                                <span className={"form-dialog-input-error-tip"}>
                                    {errors["port"].message}
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
                    <Divider sx={DividerStyle()}/>
                    <Grid item sx={HomeInputSX()}>
                        <Grid item xs={8} sx={HomeInputHostSX()}>
                            <TextField
                                id={"data-source-1-input-host"} 
                                label={"Host"}
                                variant="outlined" 
                                sx={HomeInputHostTextSX()}                                        
                                error={hostError1}
                                autoComplete="false"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                {...register("host", inputVerify("host"))}
                            />
                            {errors["host"] &&
                                <span className={"form-dialog-input-error-tip"}>
                                    {errors["host"].message}
                                </span>
                            }
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id={"data-source-1-input-port"} 
                                label={"Port"}
                                variant="outlined" 
                                sx={HomeInputHostTextSX()}                                        
                                error={portError1}
                                autoComplete="false"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                {...register("port", inputVerify("port"))}
                            />
                            {errors["port"] &&
                                <span className={"form-dialog-input-error-tip"}>
                                    {errors["port"].message}
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
            </Grid>
            <Grid item sx={HomeGraphSX()}>
                456
            </Grid>
        </Box>
    );
}