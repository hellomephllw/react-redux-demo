/**
 * Created by liliwen on 2017/1/26.
 */
'use strict';
import {combineReducers} from 'redux';
import loginReducer from './login';
import adminReducer from './admin';

export default combineReducers({
    loginReducer,
    adminReducer
});