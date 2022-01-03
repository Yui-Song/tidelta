import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from '@/component/App';
import { BrowserRouter } from "react-router-dom";
import "@/resource/style/index.css";

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback="loading">
            <BrowserRouter >
                <App />
            </BrowserRouter>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
)
