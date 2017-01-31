/**
 * Created by liliwen on 2017/1/31.
 */
'use strict';
import React from 'react';
import './index.scss';

class FooterCpn extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    Copyright ©2017-2020 hellomephllw Personal, All Rights Reserved
                </div>
            </div>
        );
    }

}

export default FooterCpn;