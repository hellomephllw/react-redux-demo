/**
 * Created by liliwen on 2017/2/1.
 */
'use strict';
import React from 'react';
import {connect} from 'react-redux';
import {Breadcrumb} from 'react-bootstrap';
import './index.scss';

class AdminContainer extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="admin">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Data
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }

}

export default connect(state => ({

}))(AdminContainer);