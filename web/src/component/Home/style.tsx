import React, { CSSProperties } from "react";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { SxProps, Theme } from '@mui/system';

export const HomeBoxSX = ():SxProps<Theme> => {
    return {
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#0b0c0e",
    };
};
export const HomeSelectSX = ():SxProps<Theme> => {
    return {
        padding: 2,
        backgroundColor: "#141619",
    };
};
export const HomeGraphSX = ():SxProps<Theme> => {
    return {
        flex: 1,
        // backgroundColor: "#22252a",
        marginLeft: "8px",
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
        paddingBottom: 2,
        paddingLeft: 2,
        paddingTop: 3,
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
        paddingTop: 4,        
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
        padding: 2,
        paddingTop: 2,        
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
        paddingTop: 2,
        paddingBottom: 4,
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
export const HomeSelectDateFromContainerSX = ():SxProps<Theme> => { 
    return {
        // paddingRight: 2,
        width: "100%",
    }
};