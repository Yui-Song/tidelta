import React, { CSSProperties } from "react";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { SxProps, Theme } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export const CatalogTooltip2 = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip 
        {...props} 
        arrow         
        enterDelay={1000}
        classes={{ popper: className }}        
    />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.primary.main,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.secondary,
        borderRadius: 5,
        marginTop: "0px !important",
        fontSize: "14px",
    },
}));

export const cardHeaderCheckboxStyle = ():SxProps<Theme> => {
    return {    
        color: "#afbfcf",                        
        '&.Mui-checked': {
            color: "#90caf9",
        },
    };
};
export const darkThemeMenuButtonTooltip2 = createTheme({
    palette: {
        primary: {
            main: "#004c99",
            light: "#fff"            
        },
        text: {
            primary: "#fff",
            secondary: "#fff"
        }
    },
});
export const lightThemeMenuButtonTooltip2 = createTheme({
    palette: {
        primary: {
            main: "#404040",
            light: "#fff"            
        },
        text: {
            primary: "#404040",
            secondary: "#fff"
        }
    },
});
export const alertLevelStyle = (): SxProps<Theme> => {
    return {
        backgroundColor: "#c94e13",
        color: "#fff",
        padding: "3px",
        paddingBottom: "5px",
        minWidth: "70px",
        minHeight: "32px",        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50px",
    };
};
export const TableCellStyle = (): SxProps<Theme> => {
    return {
        maxWidth: "350px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        paddingLeft: "20px",
        backgroundColor: "#22252a",
        color: "#fff",
        borderBottom: "1px solid #3d4048",
        height: "50px",
        fontSize: "18",
        fontWeight: "600",
    };
};
export const SelectPanelTheme = createTheme({
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {

                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: "#caced9 !important"
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "#fff",
                }
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    backgroundColor: "#141619",
                    height: "47px",
                    borderColor: "#5a5f6c",
                    color: "#fff",
                    "& .Mui-focused": {
                        color: "#fff !important",
                    },
                    "& .MuiInputLabel-root": {
                        color: "#fff",
                    },
                    "& .MuiOutlinedInput-root": {
                        color: "#fff",
                        borderRadius: "8px",
                        backgroundColor: "#141619",
                    },
                    "& .MuiOutlinedInput-input": {
                        padding: "12px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#5a5f6c",
                    },
                    '&:hover fieldset': {
                        border: '1px solid #66b2ff !important'
                    },
                }
            }
        }
    }
});
export const HomeBoxSX = ():SxProps<Theme> => {
    return {
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#0b0c0e",
    };
};
export const HomeFormSX = ():React.CSSProperties | undefined => {
    return { 
        flex: 1, 
        display: 'flex', 
        height: "100%", 
    };
};
export const HomeSelectSX = ():SxProps<Theme> => {
    return {
        padding: 2,
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: "#141619",        
        overflowY: "auto", 
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
    };
};
export const HomeGraphSX = ():SxProps<Theme> => {
    return {
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        // marginLeft: "16px",
    };
};
export const HomeGraphSelectSX = ():SxProps<Theme> => {
    return {
        height: "112px",
        backgroundColor: "#141619",
        display: "flex",
        // padding: 1,
        alignItems: "center",
    };
};
export const HomeSelectOneSX = ():SxProps<Theme> => {
    return {
        flex: 1,
        backgroundColor: "#22252a",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        marginBottom: 2,
    };
};
export const HomeSelectOneTitleSX = ():SxProps<Theme> => {
    return {
        color: "#fff",
        fontWeight: 600,
        fontSize: 20,
        padding: 1,
        paddingLeft: 2,
        width: "100%",
    };
};
export const DividerStyle = ():SxProps<Theme> => { 
    return {
        my: 0, 
        backgroundColor: "#5a5f6c", 
        marginTop: "0px", 
        marginBottom: "0px",
        position: "relative",
        zIndex: 999,
    }
};
export const HomeInputSX = ():SxProps<Theme> => { 
    return {        
        padding: 2,
        paddingTop: 3,        
        paddingBottom: 3,
        position: "relative",      
        display: 'flex', 
        "& .MuiTextField-root": {
            // width: {xs: "90%", sm: "75%"},
        },        
        "& .MuiPaper-root": {
            borderRadius: "8px",
        },
        "& .MuiInputLabel-root": {
            top: '-3px'
        }
    }
};
export const HomeInput2SX = ():SxProps<Theme> => { 
    return {        
        padding: 2,
        paddingTop: 0,        
        paddingBottom: 3,
        position: "relative",      
        display: 'flex', 
        "& .MuiTextField-root": {
            // width: {xs: "90%", sm: "75%"},
        },        
        "& .MuiPaper-root": {
            borderRadius: "8px",
        },
        "& .MuiInputLabel-root": {
            top: '-3px'
        }
    }
};
export const HomeSelectDateFromSX = ():SxProps<Theme> => { 
    return {        
        paddingLeft: 2,
        paddingRight: 2,
        // paddingTop: 2,        
        position: "relative",      
        display: 'flex', 
        "& .MuiTextField-root": {
            // width: {xs: "90%", sm: "75%"},
        },        
        "& .MuiPaper-root": {
            borderRadius: "8px",
        },
        "& .MuiInputLabel-root": {
            top: '-3px'
        }
    }
};
export const HomeSelectDateToSX = ():SxProps<Theme> => { 
    return {        
        padding: 2,
        paddingTop: 3,
        paddingBottom: 2,
        position: "relative",      
        display: 'flex', 
        "& .MuiTextField-root": {
            // width: {xs: "90%", sm: "75%"},
        },        
        "& .MuiPaper-root": {
            borderRadius: "8px",
        },
        "& .MuiInputLabel-root": {
            top: '-3px'
        }
    }
};
export const HomeInputHostSX = ():SxProps<Theme> => { 
    return {        
        paddingRight: 2,
        position: "relative",
    }
};
export const HomeInputPortSX = ():SxProps<Theme> => { 
    return {        
        position: "relative",
    }
};
export const HomeInputHostTextSX = ():SxProps<Theme> => { 
    return {
        flex: 1,
        width: "100%",
        "& .Mui-focused": {
            color: "#fff !important",
        },
        "& .MuiInputLabel-root": {
            color: "#fff",
        },
        "& .MuiOutlinedInput-root": {
            color: "#fff",
            borderRadius: "8px",
            backgroundColor: "#141619",
        },
        "& .MuiOutlinedInput-input": {
            padding: "12px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#5a5f6c",
        },
        '&:hover fieldset': {
            border: '1px solid #66b2ff !important'
        },
    }
};
export const HomeSelectDateFromComponentSX = ():SxProps<Theme> => { 
    return {
        flex: 1,
        width: "100%",
        "& .MuiSvgIcon-root": {
            color: "#caced9",
        },
        "& .Mui-focused": {
            color: "#fff !important",
        },
        "& .MuiInputLabel-root": {
            color: "#fff",
        },
        "& .MuiOutlinedInput-root": {
            color: "#fff",
            borderRadius: "8px",
            backgroundColor: "#141619",
        },
        "& .MuiOutlinedInput-input": {
            padding: "12px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#5a5f6c",
        },
        '&:hover fieldset': {
            border: '1px solid #66b2ff !important'
        },
    }
};
export const HomeSelectDateFromContainer2SX = ():SxProps<Theme> => { 
    return {
        // paddingRight: 2,
        width: "100%",
        paddingRight: "16px",
    }
};
export const HomeSelectDateFromContainerSX = ():SxProps<Theme> => { 
    return {
        // paddingRight: 2,
        width: "100%",
    }
};
export const HomeSubmitButton = ():SxProps<Theme> => { 
    return {
        borderRadius: '8px',
        marginBottom: "32px",        
    }
};
export const HomeGraphSelectcontainerSX = ():SxProps<Theme> => { 
    return {
        height: "79px",
        backgroundColor: "#22252a",
        display: "flex",
        padding: 1,
        paddingLeft: 2,
        paddingRight: 2,
        alignItems: "center",
    }
};