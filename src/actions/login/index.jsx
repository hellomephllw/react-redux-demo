/**
 * Created by liliwen on 2017/1/31.
 */
'use strict';

/**常量*/
export const CLICK_TO_LOGIN = 'CLICK_TO_LOGIN';
export const NOW_IS_LOGINING = 'NOW_IS_LOGINING';
export const LOGIN_RESULT = 'LOGIN_RESULT';

/**ActionCreator*/
export function clickToLoginActionCreator(username, password, clickLoginBtn) {
    return {
        type: CLICK_TO_LOGIN,
        username,
        password,
        clickLoginBtn
    };
}
export function nowIsLoginingActionCreator() {
    return {
        type: NOW_IS_LOGINING
    };
}
export function loginResultActionCreator(success) {
    return {
        type: LOGIN_RESULT,
        success
    };
}