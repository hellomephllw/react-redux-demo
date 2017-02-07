/**
 * Created by liliwen on 2017/2/1.
 */
'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as adminAction from '../../actions/admin';
import BreadCrumbCpn from './breadcrumb';
import './index.scss';

class AdminContainer extends React.Component {

    constructor() {
        super();
        this.checkSingleAdminHandler = this.checkSingleAdminHandler.bind(this);
    }

    checkSingleAdminHandler(id) {
        this.props.dispatch(adminAction.checkSingleAdminActionCreator(id));
    }

    render() {
        console.log('render~~~');
        return (
            <div className="admin">
                <BreadCrumbCpn />
                {React.cloneElement(
                    this.props.children,
                    {
                        admins: this.props.admins,
                        checkAll: this.props.checkAll,
                        checkSingleAdminHandler: this.checkSingleAdminHandler
                    })}
            </div>
        );
    }

}

export default connect(chunkState => ({
    admins: chunkState.adminReducer.admins,
    checkAll: chunkState.adminReducer.checkAll
}))(AdminContainer);