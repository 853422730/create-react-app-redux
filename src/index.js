import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

import configureStore from './store/configureStore';
import config from './config';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import HomePage from "./pages/homePage";

const store = configureStore({}, {});

const renderApp = () => (
    <Provider store={store}>
        <BrowserRouter basename={config.basename}>
            <App>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(renderApp(), document.getElementById('root'));
registerServiceWorker();
