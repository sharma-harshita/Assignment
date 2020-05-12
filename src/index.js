import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import configureStore from "./redux/store/configureStore";
import * as serviceWorker from './serviceWorker';
import Main from './Main';

const store = configureStore()

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Main/>
        </Provider>
    </BrowserRouter>
                
, document.getElementById('root'));

serviceWorker.unregister();
