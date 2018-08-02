import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import config from '../config'
import reducer from './reducer'

const devtools = config.isDev && config.isBrowser && window.devToolsExtension
    ? window.devToolsExtension
    : () => fn => fn;

const configureStore = (initialState, services = {}) => {

    const mid = [
        applyMiddleware(
            thunk
        ),
        devtools(),
    ];

    const store = createStore(reducer, initialState, compose(...mid));

    return store
};

export default configureStore
