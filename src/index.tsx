import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components";
import {theme} from "./assets/style/theme";
import {BrowserRouter} from "react-router-dom";
import {App} from './App';
import './assets/style/style.css'
import {Provider} from "react-redux";
import {store} from "./core/redux/store";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

