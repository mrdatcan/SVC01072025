import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import RouterCustom from './until/router';        // Import RouterCustom

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter> 
        <RouterCustom />
    </BrowserRouter>
);
//BrowserRouter giúp định tuyến cho toàn bộ app. 
//RouterCustom là component chứa các route của bạn.