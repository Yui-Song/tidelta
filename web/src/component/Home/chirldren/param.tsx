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
    dateFrom2: Date | null,
    setDateFrom2: React.Dispatch<React.SetStateAction<Date | null>>,
    dateTo2: Date | null,
    setDateTo2: React.Dispatch<React.SetStateAction<Date | null>>,
    portError2: boolean,
    hostError2: boolean,
    dashboard: string,
    handleChange: (event: SelectChangeEvent) => void,
    row: string,
    handleRowChange: (event: SelectChangeEvent) => void,
    graph: string,
    handleGraphChange: (event: SelectChangeEvent) => void,
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
        row,
        handleRowChange,
        graph,
        handleGraphChange,
    } = props;

    return (
        <Grid item xs={3} sx={HomeSelectSX()}>   
                 
            <DataSource1 
                hostError1={hostError1}
                register={register}
                errors={errors}
                portError1={portError1}
                dateFrom1={dateFrom1}
                setDateFrom1={setDateFrom1}
                dateTo1={dateTo1}
                setDateTo1={setDateTo1}
            />

            <DataSource2 
                hostError2={hostError2}
                portError2={portError2}
                register={register}
                errors={errors}
                dateFrom2={dateFrom2}
                setDateFrom2={setDateFrom2}
                dateTo2={dateTo2}
                setDateTo2={setDateTo2}
            />

            <SelectChirldren 
                dashboard={dashboard}
                handleChange={handleChange}
                row={row}
                handleRowChange={handleRowChange}
                graph={graph}
                handleGraphChange={handleGraphChange}
            />

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