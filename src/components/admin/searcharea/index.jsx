/**
 * Created by liliwen on 2017/2/1.
 */
'use strict';
import React from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import './index.scss';

class SearchAreaCpn extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Form className="admin-searcharea" inline>
                <FormGroup controlId="formInlineName" bsSize="small">
                    <ControlLabel>姓名</ControlLabel>
                    {' '}
                    <FormControl type="text" />
                </FormGroup>
                {' '}
                <FormGroup controlId="formInlineEmail" bsSize="small">
                    <ControlLabel>账号</ControlLabel>
                    {' '}
                    <FormControl type="text" />
                </FormGroup>
                {' '}
                <Button bsSize="small">
                    查询
                </Button>
            </Form>
        );
    }

}

export default SearchAreaCpn;