import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from "react-router-dom";
import { SignIn } from './components/sign-in';
import './style.css';
import { configureFakeBackend } from './_helpers/fake-backend';
import App from './App';

configureFakeBackend();
ReactDOM.render(
    <Provider store={configureStore()}>
        {/* <HashRouter>
            <Route exact path="/signin" component={SignIn} />
        </HashRouter> */}
        <App />
    </Provider>,
    document.getElementById('root')
);