/**
 * Created by liliwen on 2017/1/26.
 */
'use strict';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import LoginContainer from './components/login';
import reducers from './reducers';

let store = createStore(reducers);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={LoginContainer} />
        </Router>
    </Provider>,
    document.getElementById('app')
);