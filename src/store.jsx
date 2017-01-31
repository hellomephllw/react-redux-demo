/**
 * Created by liliwen on 2017/1/26.
 */
'use strict';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

//创建sage中间件
const sagaMiddleware = createSagaMiddleware();

//创建store
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

//开启saga
sagaMiddleware.run(rootSaga);

export default store;