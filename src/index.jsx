import React from "react";
import { render } from "react-dom";
import App from "./App";
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';


render(
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.querySelector('.root')
);