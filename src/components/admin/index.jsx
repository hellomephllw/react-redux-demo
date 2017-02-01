/**
 * Created by liliwen on 2017/2/1.
 */
'use strict';
import React from 'react';
import {connect} from 'react-redux';
import BreadCrumbCpn from './breadcrumb';
import ControlAreaCpn from './controlarea';
import SearchAreaCpn from './searcharea';
import TableCpn from './table';
import PaginationCpn from './pagination';
import './index.scss';

class AdminContainer extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="admin">
                <BreadCrumbCpn />
                <SearchAreaCpn />
                <ControlAreaCpn />
                <TableCpn />
                <PaginationCpn />
            </div>
        );
    }

}

export default connect(state => ({

}))(AdminContainer);