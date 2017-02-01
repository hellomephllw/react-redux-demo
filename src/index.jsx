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
import Layout from './components/layout';
import HomeContainer from './components/home';
import AdminContainer from './components/admin';
import './common/css/common.scss';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={LoginContainer} />
            <Route path="home" component={Layout}>
                <IndexRoute component={HomeContainer} />
                <Route path="index" component={HomeContainer} />
                <Route path="admin" component={AdminContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);