import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDom.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <HashRouter basename='/'>
                <App />
            </HashRouter>
           
        </BrowserRouter>
    </Provider>
);