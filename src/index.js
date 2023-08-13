import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./index.css";
import TickTackApp from './TicTackApp.jsx';
import ApiData from './api/ApiData.jsx';



var destination = ReactDOM.createRoot(document.querySelector('#container'));


destination.render(
    <StrictMode>
        {/* <TickTackApp /> */}
        <App />
        <ApiData />
    </StrictMode>
);
