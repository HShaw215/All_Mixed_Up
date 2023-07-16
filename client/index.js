import React from 'react';
import { createRoot, Root }from 'react-dom/client';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);