import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import DoneIcon from '@mui/icons-material/Done';
import { alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { visuallyHidden } from '@mui/utils';
import { Grid } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import $ from "jquery";
import Typography from '@mui/material/Typography';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone';
import ClearIcon from '@mui/icons-material/Clear';
import { ThemeProvider } from '@mui/material/styles';
import {
    alertLevelStyle,
    lightThemeMenuButtonTooltip2,
    darkThemeMenuButtonTooltip2,
    cardHeaderCheckboxStyle,
    CatalogTooltip2,
    TableCellStyle,
} from '@/component/Home/style';
import { MetricsComponentProps, MetricsData } from '../graph';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function EnhancedTableHead() {
    
    return (
        <TableHead>
            <TableRow>

                <TableCell
                    align={'left'}
                    padding={'none'}
                    sortDirection={false}
                    sx={TableCellStyle()}
                >
                    Metrics
                </TableCell>

                <TableCell
                    align={'left'}
                    padding={'none'}
                    sortDirection={false}
                    sx={TableCellStyle()}
                >
                    1h
                </TableCell>
                <TableCell
                    align={'left'}
                    padding={'none'}
                    sortDirection={false}
                    sx={TableCellStyle()}
                >
                    2d
                </TableCell>
                <TableCell
                    align={'left'}
                    padding={'none'}
                    sortDirection={false}
                    sx={TableCellStyle()}
                >
                    diff
                </TableCell>
                <TableCell
                    align={'left'}
                    padding={'none'}
                    sortDirection={false}
                    sx={TableCellStyle()}
                >
                    diff %
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

interface EnhancedTableProp {
    propsData: Array<MetricsData>,
    components: string,
}

const EnhancedTableToolbar = (props: {components: string}) => {    
    const {components} = props;
    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 }, 
                backgroundColor: "#3b4046",
                borderRadius: "8px 8px 0px 0px"               
            }}
        >
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                {components}
            </Typography>            
        </Toolbar>
    );
};

export default function EnhancedTable(props: EnhancedTableProp) {

    const { propsData, components } = props;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(30);

    const handleChangePage = (event: unknown, newPage: number) => {
        console.log("[newPage]", newPage);
        // setParamsObj({
        //     ...paramsObj,
        //     page: newPage,
        // });
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // React.useEffect(() => {
    //     $("#tabsContainer").css("height", $("#root").height() - 17 + "");
    //     window.onresize = () => {
    //         $("#tabsContainer").css("height", $("#root").height() - 17 + "");
    //     }
    // }, []);

    return (
        <Box sx={{ width: '100%', flex: 1, flexGrow: 1, display: "flex", marginBottom: "16px" }}>
            <Paper sx={{ 
                width: '100%', 
                mb: 2, 
                boxShadow: "initial", 
                position: "relative", 
                flex: 1, 
                flexGrow: 1, 
                marginBottom: 0, 
                backgroundColor: "#22252a",
                color: "#ffffff",
            }}>
                <EnhancedTableToolbar components={components}/>
                <TableContainer
                    sx={{
                        flex: 1,
                        flexGrow: 1,
                        // maxHeight: "450px",
                        "&::-webkit-scrollbar": {
                            backgroundColor: " #2b2b2b",
                            width: "12px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            cursor: "pointer",
                            border: "1px solid #2b2b2b",
                            borderRadius: "12px",
                            backgroundColor: "#6b6b6b",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                            backgroundColor: "#959595",
                            border: "1px solid #2b2b2b",
                        }
                    }}
                    id={"alertTableContainer"}
                >
                    <Table
                        sx={{ minWidth: 300 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                        stickyHeader
                    >

                        <EnhancedTableHead
                            
                        />

                        <TableBody >
                            {
                                propsData?.map((row, index) => {
                                    const labelId = `enhanced2-table-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={"key" + index}
                                        >
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                                sx={{
                                                    color: "#fff",
                                                    borderBottom: "1px solid #3d4048",
                                                    padding: "14px 16px"
                                                }}
                                            >
                                                {row.metrics}
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                                sx={{
                                                    color: "#fff",
                                                    borderBottom: "1px solid #3d4048",
                                                    padding: "14px 16px"
                                                }}
                                            >
                                                {parseInt(row.value?.start, 10)}
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                padding="none"
                                                sx={{
                                                    color: "#fff",
                                                    borderBottom: "1px solid #3d4048",
                                                    padding: "14px 16px"
                                                }}
                                            >
                                                <Grid>
                                                    {parseInt(row.value?.end, 10)}                                                
                                                </Grid>
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                padding="none"
                                                sx={{
                                                    color: "#fff",
                                                    borderBottom: "1px solid #3d4048",
                                                    padding: "10px 16px"
                                                }}
                                            >
                                                <Grid container sx={{ justifyContent: "left" }}>
                                                    <Grid sx={alertLevelStyle()}>
                                                        {parseInt(row.value?.end, 10) - parseInt(row.value?.start, 10)}
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                padding="none"
                                                sx={{
                                                    color: "#fff",
                                                    borderBottom: "1px solid #3d4048",
                                                    padding: "10px 16px"
                                                }}
                                            >
                                                {(parseInt(row.value?.end, 10) - parseInt(row.value?.start, 10)) / 
                                                    parseInt(row.value?.start, 10) * 100
                                                }%
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}