/**
 * Created by liliwen on 2017/2/1.
 */
import React from 'react';
import ControlAreaCpn from '../controlarea';
import SearchAreaCpn from '../searcharea';
import TableCpn from '../table';
import PaginationCpn from '../pagination';

class IndexPageCpn extends React.Component {

    constructor() {
        super();
    }

    render() {
        let props = {
            admins: this.props.admins,
            checkAll: this.props.checkAll,
            checkSingleAdminHandler: this.props.checkSingleAdminHandler
        };

        return (
            <div>
                <SearchAreaCpn />
                <ControlAreaCpn />
                <TableCpn {...props} />
                <PaginationCpn />
            </div>
        );
    }

}

export default IndexPageCpn;