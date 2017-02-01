/**
 * Created by liliwen on 2017/2/1.
 */
'use strict';
import React from 'react';
import './index.scss';

class ControlAreaCpn extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="admin-controlarea">
                <span className="admin-ctrladd"><span className="glyphicon glyphicon-plus" /><span className="admin-ctrlwords">新增</span></span>
                <span className="admin-ctrlremove"><span className="glyphicon glyphicon-trash" /><span className="admin-ctrlwords">删除</span></span>
                <span className="admin-ctrlmodify"><span className="glyphicon glyphicon-pencil" /><span className="admin-ctrlwords">修改</span></span>
                <span className="admin-ctrldetail"><span className="glyphicon glyphicon-th-list" /><span className="admin-ctrlwords">详细</span></span>
            </div>
        );
    }

}

export default ControlAreaCpn;