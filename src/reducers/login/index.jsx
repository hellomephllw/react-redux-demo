/**
 * Created by liliwen on 2017/1/29.
 */
'use strict';
import {CLICK_TO_LOGIN} from '../../actions/login';

const loginReducer = (state = {firstTime: true, success: false}, action) => {
    switch (action.type) {
        case CLICK_TO_LOGIN:
            //初始化参数
            let success = true,
                firstTime = action.clickLoginBtn ? false : true;

            if (action.username == 'zhangsan' && action.password == '123456') success = true;
            else success = false;

            return {
                firstTime,
                success
            };
        default:
            console.log(state);
            return state;
    }
};

export default loginReducer;