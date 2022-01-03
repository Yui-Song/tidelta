export const inputVerify = (key: string) => {
    if (key === "name") {
        return {
            required: "必须输入", 
        };
    } else if (key === "host") {
        return {
            required: "Please enter ipv4", 
            pattern: {
                value: /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g, 
                message: "The entered ipv4 is invalid"
            },
        };
    } else if (key === "gps") {
        return {
            pattern: {
                value: /^[0-9]+(\.[0-9]{0,19}[^\.])?,[0-9]+(\.[0-9]{0,19}[^\.])?$/g, 
                message: "输入的坐标不正确",
            },
        };
    } else if (key === "port") {
        return {
            required: "Please enter port", 
            pattern: {
                value: /^[0-9]{0,5}$/g, 
                message: "Port is invalid"
            },
        };
    };
};