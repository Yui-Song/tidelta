import { 
    useRoutes,
    Navigate,
} from "react-router-dom";
import NotFout from "@/component/router/notFout";
import Home from './../Home/home';

const notFout = {    
    path: '4045', 
    element: <NotFout />
};

const allNotFout = (path: string) => {
    return {
        path: '*',
        element: <Navigate to={path + "/4045"} />,
    }
};

const HomeRouter = {
    path: 'home',
    element: <Home />,
    children: [
        // {
        //     path: '/',
        //     element: <Navigate to={"/nemp/home"} />,
        // },
        notFout,
        allNotFout("/home"),
    ]
};

const defaultRoutes = [
    {
        path: '/',
        element: <Navigate to={"home"} />,
    },
    HomeRouter,
    notFout,
    allNotFout(""),
];

export {
    defaultRoutes
};