/**
 * Created by liliwen on 2017/1/31.
 */
'use strict';

/**常量*/
export const CLICK_TO_LOGIN = 'CLICK_TO_LOGIN';

/**ActionCreator*/
export function clickToLoginActionCreator(username, password, clickLoginBtn) {
    return {
        type: CLICK_TO_LOGIN,
        username,
        password,
        clickLoginBtn
    };
}