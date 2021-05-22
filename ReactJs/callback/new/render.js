import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

// создаём функцию, которая будет отрисововать страницу, каждый раз когда происходят изменения
export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost}/>
            </React.StrictMode>
        </BrowserRouter>,

        document.getElementById('root'),
    );
};
