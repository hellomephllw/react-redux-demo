/**
 * Created by liliwen on 2017/1/29.
 */
'use strict';
import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Col, Checkbox, Button} from 'react-bootstrap';
import './index.scss';

class FormCpn extends React.Component {

    clickToLogin() {
        this.props.loginHandler(this.usernameEle.value, this.passwordEle.value);
    }

    render() {
        //初始化验证状态
        let validateState = this.props.success ? null : 'error',
            showWarn = this.props.success ? 'hidden' : 'visible',
            loginBtnWords = this.props.isLogining ? '正在登陆...' : '登陆';
        //第一次通过
        if (this.props.firstTime) validateState = null;
        //第一次不显示
        if (this.props.firstTime) showWarn = 'hidden';

        return (
            <Form className="login-form">
                <FormGroup bsSize="large" validationState={validateState}>
                    <ControlLabel style={{visibility: showWarn}}>账号或密码错误！</ControlLabel>
                    <FormControl inputRef={ref => this.usernameEle = ref} type="text" placeholder="账号" />
                </FormGroup>
                <FormGroup bsSize="large" validationState={validateState}>
                    <FormControl inputRef={ref => this.passwordEle = ref} type="password" placeholder="密码" />
                </FormGroup>
                <Button bsStyle="primary" bsSize="large" block onClick={() => this.clickToLogin()}>{loginBtnWords}</Button>
            </Form>
        );
    }

}

export default FormCpn;