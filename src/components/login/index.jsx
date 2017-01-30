/**
 * Created by liliwen on 2017/1/29.
 */
'use strict';
import React from 'react';
import {connect} from 'react-redux';
import FormCpn from './form';
import FooterCpn from '../../common/components/footer';

import './index.scss';

class LoginContainer extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div style={{height: this.props.windowHeight, width: this.props.windowWidth}} className="login">
                <FormCpn />
                <FooterCpn />
            </div>
        );
    }

}

export default connect(state => ({
    windowHeight: window.screen.availHeight,
    windowWidth: window.screen.availWidth,
    info: 'hello world'
}))(LoginContainer);