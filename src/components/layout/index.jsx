/**
 * Created by liliwen on 2017/1/31.
 */
'use strict';
import React from 'react';
import TopNavCpn from '../../common/components/topnav';
import LeftNavCpn from '../../common/components/leftnav';
import FooterCpn from '../../common/components/footer';
import './index.scss';

class Layout extends React.Component {

    render() {
        let wholeHeight = window.screen.availHeight,
            wholeWidth = window.screen.availWidth;

        return (
            <div>
                <TopNavCpn />
                <div className="middle" style={{height: wholeHeight, width: wholeWidth}}>
                    <div className="middle-left"><LeftNavCpn /></div>
                    <div className="middle-main"></div>
                </div>
                <FooterCpn />
            </div>
        );
    }

}

export default Layout;