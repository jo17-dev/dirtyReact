import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useSate} from 'react';
import App from './toDoApp/App.jsx';
import "./index.css";
import ApiData from './api/ApiData.jsx';
import NavBar from './navbar/Navbar.jsx';
import About from './about/About.jsx';
import ContexHookTuto from './context/ContexHook.js';



var destination = ReactDOM.createRoot(document.querySelector('#container'));


destination.render(
    <>
            <Router>
                <NavBar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/api" element={<ApiData />} />
                <Route path="/about" element={<About />} />
                <Route path="/context" element={<ContexHookTuto />} />
                <Route path="*" element={ <h1>Page not Found</h1> } />
            </Routes>
            </Router>
        <StrictMode>
            {/* <TickTackApp /> */}
            {/* <App />
            <ApiData />
            <RouteTest /> */}
            {/* <Autre /> */}
        </StrictMode>

    </>
);
