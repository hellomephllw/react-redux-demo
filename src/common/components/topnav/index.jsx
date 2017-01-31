/**
 * Created by liliwen on 2017/1/31.
 */
'use strict';
import React from 'react';
import {Navbar} from 'react-bootstrap';
import './index.scss';

class TopNavCpn extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React Redux</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Text>
                        Signed in as: <Navbar.Link href="https://www.github.com/hellomephllw">hellomephllw</Navbar.Link>
                    </Navbar.Text>
                    <Navbar.Text pullRight>
                        Have a great day!
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default TopNavCpn;