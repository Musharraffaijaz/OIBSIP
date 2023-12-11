import React from 'react';
import ReactDOM from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import "./index.css";


const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Router>
        <App />
        </Router>
    </React.StrictMode>
)

