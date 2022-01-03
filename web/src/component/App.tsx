import { useState } from 'react';
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import { defaultRoutes } from '@/component/router/router';

export default function App() {
    const Routing = useRoutes(defaultRoutes);
    return (        
        <div className="App">
            { Routing }
        </div>        
    )
}
