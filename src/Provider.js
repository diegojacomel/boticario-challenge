
// Modules
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from 'redux/rootReducers';
import createSagaMiddleware from 'redux-saga'; // SAGA
import rootSagas from 'redux/rootSagas';

// Styles
import 'index.css';
import { ThemeProvider } from 'styled-components';
import { primaryTheme } from 'styles/themes';

// Router
import { BrowserRouter as Router } from 'react-router-dom';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, {}, composeEnhancers(applyMiddleware(sagaMiddleware)));

// run the saga
sagaMiddleware.run(rootSagas);

export default class extends Component {
    render() {
        const { props: { children } } = this;
        return (
            <Provider store={store}>
                <ThemeProvider theme={primaryTheme}>
                    <Router>
                        {children}
                    </Router>
                </ThemeProvider>
            </Provider>
        )
    }
}