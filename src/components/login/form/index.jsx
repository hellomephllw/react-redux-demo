/**
 * Created by liliwen on 2017/1/29.
 */
'use strict';
import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Col, Checkbox, Button} from 'react-bootstrap';
import './index.scss';

class FormCpn extends React.Component {

    constructor(props) {
        super(props);
    }

    loginAction() {

    }

    render() {
        return (
            <Form className="login-form">
                <FormGroup bsSize="large" validationState={null}>
                    <ControlLabel>账号或密码错误！</ControlLabel>
                    <FormControl type="text" placeholder="账号" />
                </FormGroup>
                <FormGroup bsSize="large" validationState={null}>
                    <FormControl type="password" placeholder="密码" />
                </FormGroup>
                <Button bsStyle="primary" bsSize="large" block onClick={}>登陆</Button>
            </Form>
        );
    }

}

export default FormCpn;