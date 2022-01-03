import React from "react";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { SelectChangeEvent } from '@mui/material/Select';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
    HomeBoxSX,
} from '@/component/Home/style';
import ParamComponent from "@/component/Home/chirldren/param";
import GraphChirldren from "@/component/Home/chirldren/graph";

export default function Home() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [hostError1, setHostError1] = React.useState<boolean>(false);
    const [portError1, setPortError1] = React.useState<boolean>(false);
    const [hostError2, setHostError2] = React.useState<boolean>(false);
    const [portError2, setPortError2] = React.useState<boolean>(false);
    const [dateFrom1, setDateFrom1] = React.useState<Date | null>(null);
    const [dateTo1, setDateTo1] = React.useState<Date | null>(null);
    const [dateFrom2, setDateFrom2] = React.useState<Date | null>(null);
    const [dateTo2, setDateTo2] = React.useState<Date | null>(null);    
    const [dashboard, setDashboard] = React.useState('');
    const [tabs, setTabs] = React.useState(0);

    const handleTabsChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabs(newValue);
    };

    const handleChange = (event: SelectChangeEvent) => {
        setDashboard(event.target.value as string);
    };

    const onSubmits = (data: any, e: any) => {
        console.log("[data]: ", data);
    };

    const onError = (errors: any, e: any) => {
        if (errors.host1) {
            setHostError1(true);
        };
        if (errors.host2) {
            setHostError2(true);
        };
        if (errors.port1) {
            setPortError1(true);
        };
        if (errors.port2) {
            setPortError2(true);
        };
    };

    return (
        <Box sx={HomeBoxSX()}>
            <form 
                onSubmit={handleSubmit(onSubmits, onError)} 
                style={{ flex: 1, display: 'flex', height: "100%", }}
            >
                {/* 左边参数组件 */}
                <ParamComponent 
                    hostError1={hostError1}
                    register={register}
                    errors={errors}
                    portError1={portError1}
                    dateFrom1={dateFrom1}
                    setDateFrom1={setDateFrom1}
                    dateTo1={dateTo1}
                    setDateTo1={setDateTo1}
                    hostError2={hostError2}
                    dateFrom2={dateFrom2}
                    setDateFrom2={setDateFrom2}
                    dateTo2={dateTo2}
                    setDateTo2={setDateTo2}
                    portError2={portError2}
                    dashboard={dashboard}
                    handleChange={handleChange}
                />
                {/* 右边展示组件 */}
                <GraphChirldren
                    tabs={tabs}
                    handleTabsChange={handleTabsChange}
                />
            </form>
        </Box>
    );
}