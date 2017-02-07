/**
 * Created by liliwen on 2017/2/1.
 */
'use strict';
import Immutable from 'immutable';
import * as adminAction from '../../actions/admin';

const initialBranchState = {
    admins: [
        {id: 5, username: 'favorittt', name: '张三', isChecked: false},
        {id: 7, username: 'tracymcgrady', name: '麦迪', isChecked: false},
        {id: 10, username: 'iverson', name: '艾弗森', isChecked: false},
        {id: 20, username: 'durant', name: '杜兰特', isChecked: false},
        {id: 77,username: 'terminal', name: '李四', isChecked: false}
    ],
    checkAll: false
};

let objs = Immutable.fromJS({
    admins: [
        {id: 5, username: 'favorittt', name: '张三', isChecked: false},
        {id: 7, username: 'tracymcgrady', name: '麦迪', isChecked: false},
        {id: 10, username: 'iverson', name: '艾弗森', isChecked: false},
        {id: 20, username: 'durant', name: '杜兰特', isChecked: false},
        {id: 77,username: 'terminal', name: '李四', isChecked: false}
    ],
    checkAll: false
});

console.log(objs.getIn(['admins']));
console.log(objs.get('admins'));
console.log(objs.toJS());
console.log('=====');

const adminReducer = (branchState = initialBranchState, action) => {
    switch (action.type) {
        case adminAction.CHECK_SINGLE_ADMIN:
            //处理选中项
            for (let i = 0, len = branchState.admins.length; i < len; ++i) {
                if (action.id == branchState.admins[i].id) {
                    console.log(!branchState.admins[i].isChecked);
                    branchState.admins[i].isChecked = !branchState.admins[i].isChecked;
                    break;
                }
            }

            return {
                ...branchState
            };
        case adminAction.CHECK_ALL_ADMIN:
            return {
                ...branchState,
                checkAll: !branchState.checkAll
            };
        default:
            return branchState;
    }
};

export default adminReducer;