/**
 * Created by liliwen on 2017/1/29.
 */
'use strict';
import React from 'react';
import {connect} from 'react-redux';

class LoginContainer extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>{this.props.info}!!</div>
        );
    }

}

export default connect(state => ({
    info: 'hello world'
}))(LoginContainer);