/**
 * Created by liliwen on 2017/1/26.
 */
'use strict';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';
import LoginContainer from './components/login';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={LoginContainer} />
        </Router>
    </Provider>,
    document.getElementById('app')
);