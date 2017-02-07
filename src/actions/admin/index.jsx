/**
 * Created by liliwen on 2017/2/1.
 */
'use strict';

/**常量*/
export const CHECK_SINGLE_ADMIN = 'CHECK_SINGLE_ADMIN';
export const CHECK_ALL_ADMIN = 'CHECK_ALL_ADMIN';

/**Action Creator*/
export function checkSingleAdminActionCreator(id) {
    return {
        type: CHECK_SINGLE_ADMIN,
        id
    };
}
export function checkAllAdminActionCreator() {
    return {
        type: CHECK_ALL_ADMIN
    };
}