/**
 * Created by liliwen on 2017/2/1.
 */
'use strict';
import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import './index.scss';

class BreadCrumbCpn extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Breadcrumb className="admin-breadcrumb">
                <Breadcrumb.Item href="/home">
                    首页
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    管理员
                </Breadcrumb.Item>
            </Breadcrumb>
        );
    }

}

export default BreadCrumbCpn;