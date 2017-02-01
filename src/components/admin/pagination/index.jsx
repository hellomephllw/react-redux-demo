/**
 * Created by liliwen on 2017/2/1.
 */
import React from 'react';
import {Pagination} from 'react-bootstrap';
import './index.scss';

class PaginationCpn extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="table-paginationwrap">
                <Pagination className="table-pagination"
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    items={20}
                    maxButtons={5}
                    activePage={1}
                    onSelect={null} />
            </div>
        );
    }

}

export default PaginationCpn;