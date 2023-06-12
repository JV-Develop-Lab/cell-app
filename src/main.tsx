import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "@stackflow/plugin-basic-ui/index.css";

import App from "./App";

// Render our app!
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <React.StrictMode>
            <CssBaseline/>
            <App/>
        </React.StrictMode>,
    )
}
