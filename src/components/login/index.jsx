/**
 * Created by liliwen on 2017/1/29.
 */
'use strict';
import React from 'react';
import {connect} from 'react-redux';
import {clickToLoginActionCreator} from '../../actions/login';
import FormCpn from './form';
import FooterCpn from '../../common/components/footer';
import './index.scss';

class LoginContainer extends React.Component {

    constructor() {
        super();
    }

    loginHandler(username, password) {
        this.props.dispatch(clickToLoginActionCreator(username, password, true));
    }

    render() {
        console.log('render~~~~');
        let formProps = {
            success: this.props.success,
            isLogining: this.props.isLogining,
            firstTime: this.props.firstTime
        };

        return (
            <div style={{height: this.props.windowHeight, width: this.props.windowWidth}} className="login">
                <FormCpn loginHandler={(username, password) => this.loginHandler(username, password)} {...formProps} />
                <FooterCpn />
            </div>
        );
    }

}

export default connect(state => ({
    windowHeight: window.screen.availHeight,
    windowWidth: window.screen.availWidth,
    success: state.loginReducer.success,
    isLogining: state.loginReducer.isLogining,
    firstTime: state.loginReducer.firstTime
}))(LoginContainer);