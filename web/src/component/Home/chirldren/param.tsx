import React from "react";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { UseFormRegister } from "react-hook-form";
import {
    HomeSelectSX,
    HomeSubmitButton,
} from '@/component/Home/style';
import DataSource1 from "@/component/Home/chirldren/paramChirldren/data-source1";
import DataSource2 from "@/component/Home/chirldren/paramChirldren/data-source2";
import SelectChirldren from "@/component/Home/chirldren/paramChirldren/select";

interface ParamComponentProps {
    grafanaHostError1: boolean,
    grafanaPortError1: boolean,
    grafanaHostError2: boolean,
    grafanaPortError2: boolean,
    prometheusHostError1: boolean,
    prometheusPortError1: boolean,
    prometheusHostError2: boolean,
    prometheusPortError2: boolean,
    valueTimePicker1: any,
    setValueTimePicker1: any,
    valueTimePicker2: any,
    setValueTimePicker2: any,
    valueTimePicker3: any,
    setValueTimePicker3: any,
    valueTimePicker4: any,
    setValueTimePicker4: any,
    register: UseFormRegister<Record<string, any>>,
    errors: {
        [x: string]: any;
    },
    dateFrom1: Date | null,
    setDateFrom1: React.Dispatch<React.SetStateAction<Date | null>>,
    dateTo1: Date | null,
    setDateTo1: React.Dispatch<React.SetStateAction<Date | null>>,
    dateFrom2: Date | null,
    setDateFrom2: React.Dispatch<React.SetStateAction<Date | null>>,
    dateTo2: Date | null,
    setDateTo2: React.Dispatch<React.SetStateAction<Date | null>>,
    dashboard: string,
    handleChange: (event: SelectChangeEvent) => void,
    row: string,
    handleRowChange: (event: SelectChangeEvent) => void,
    graph: string,
    handleGraphChange: (event: SelectChangeEvent) => void,
    rowSelectData: any,
    graphSelectData: any,
    tabs: number,
    dateFromError01: boolean,
    dateFromError02: boolean,
    dateToError01: boolean,
    dateToError02: boolean,
    dateFromError11: boolean,
    dateFromError12: boolean,
    dateToError11: boolean,
    dateToError12: boolean,
    setDateFromError01: React.Dispatch<React.SetStateAction<boolean>>,
    setDateFromError02: React.Dispatch<React.SetStateAction<boolean>>,
    setDateToError01: React.Dispatch<React.SetStateAction<boolean>>,
    setDateToError02: React.Dispatch<React.SetStateAction<boolean>>,
    setDateFromError11: React.Dispatch<React.SetStateAction<boolean>>,
    setDateFromError12: React.Dispatch<React.SetStateAction<boolean>>,
    setDateToError11: React.Dispatch<React.SetStateAction<boolean>>,
    setDateToError12: React.Dispatch<React.SetStateAction<boolean>>,
};

export default function ParamComponent(props: ParamComponentProps) {

    const {
        grafanaHostError1,
        grafanaPortError1,
        prometheusHostError1,
        prometheusPortError1,
        grafanaHostError2,
        grafanaPortError2,
        prometheusHostError2,
        prometheusPortError2,
        register,
        errors,
        dateFrom1,
        setDateFrom1,
        dateTo1,
        setDateTo1,
        dateFrom2,
        setDateFrom2,
        dateTo2,
        setDateTo2,
        dashboard,
        row,
        graph,
        handleChange,
        handleRowChange,
        handleGraphChange,
        rowSelectData,
        graphSelectData,
        tabs,
        valueTimePicker1,
        setValueTimePicker1,
        valueTimePicker2,
        setValueTimePicker2,
        valueTimePicker3,
        setValueTimePicker3,
        valueTimePicker4,
        setValueTimePicker4,
        dateFromError01,
        dateFromError02,
        dateToError01,
        dateToError02,
        dateFromError11,
        dateFromError12,
        dateToError11,
        dateToError12,
        setDateFromError01,
        setDateFromError02,
        setDateToError01,
        setDateToError02,
        setDateFromError11,
        setDateFromError12,
        setDateToError11,
        setDateToError12,
    } = props;

    return (
        <Grid item xs={3} sx={HomeSelectSX()}>   
                 
            <DataSource1 
                grafanaHostError1={grafanaHostError1}
                grafanaPortError1={grafanaPortError1}
                prometheusHostError1={prometheusHostError1}
                prometheusPortError1={prometheusPortError1}
                register={register}
                errors={errors}
                dateFrom1={dateFrom1}
                setDateFrom1={setDateFrom1}
                dateTo1={dateTo1}
                setDateTo1={setDateTo1}                
                valueTimePicker1={valueTimePicker1}
                setValueTimePicker1={setValueTimePicker1}
                valueTimePicker2={valueTimePicker2}
                setValueTimePicker2={setValueTimePicker2}
                dateFromError01={dateFromError01}
                dateFromError02={dateFromError02}
                dateToError01={dateToError01}
                dateToError02={dateToError02}
                setDateFromError01={setDateFromError01}
                setDateFromError02={setDateFromError02}
                setDateToError01={setDateToError01}
                setDateToError02={setDateToError02}
            />

            <DataSource2 
                grafanaHostError2={grafanaHostError2}
                grafanaPortError2={grafanaPortError2}
                prometheusHostError2={prometheusHostError2}
                prometheusPortError2={prometheusPortError2}
                register={register}
                errors={errors}
                dateFrom2={dateFrom2}
                setDateFrom2={setDateFrom2}
                dateTo2={dateTo2}
                setDateTo2={setDateTo2}
                valueTimePicker3={valueTimePicker3}
                setValueTimePicker3={setValueTimePicker3}
                valueTimePicker4={valueTimePicker4}
                setValueTimePicker4={setValueTimePicker4}
                dateFromError11={dateFromError11}
                dateFromError12={dateFromError12}
                dateToError11={dateToError11}
                dateToError12={dateToError12}
                setDateFromError11={setDateFromError11}
                setDateFromError12={setDateFromError12}
                setDateToError11={setDateToError11}
                setDateToError12={setDateToError12}
            />

            {
                tabs === 1 ? 
                <SelectChirldren 
                    dashboard={dashboard}
                    handleChange={handleChange}
                    row={row}
                    handleRowChange={handleRowChange}
                    graph={graph}
                    handleGraphChange={handleGraphChange}
                    rowSelectData={rowSelectData}
                    graphSelectData={graphSelectData}
                /> : <></>
            }            

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