/**
 * Created by liliwen on 2017/1/31.
 */
'use strict';
import React from 'react';
import {Accordion, Panel} from 'react-bootstrap';
import './index.scss';

class LeftNavCpn extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Accordion className="leftnav">
                <Panel header="系统管理" eventKey="1">
                    <div className="leftnav-item">管理员</div>
                    <div className="leftnav-item">权限</div>
                </Panel>
                <Panel header="#2" eventKey="2">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </Panel>
                <Panel header="#3" eventKey="3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </Panel>
            </Accordion>
        );
    }

}

export default LeftNavCpn;