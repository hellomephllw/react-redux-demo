/**
 * Created by liliwen on 2017/2/1.
 */
import React from 'react';
import {Table, FormGroup, Checkbox} from 'react-bootstrap';
import './index.scss';

class TableCpn extends React.Component {

    constructor() {
        super();
        this.checkSingleAdmin = this.checkSingleAdmin.bind(this);
    }

    checkSingleAdmin(event) {
        let id = event.currentTarget.getAttribute('data-id');
        this.props.checkSingleAdminHandler(id);
    }

    render() {
        console.log(this.props.admins);
        let adminTrs = this.props.admins.map((admin, i) =>
                <tr key={admin.id} data-id={admin.id} onClick={this.checkSingleAdmin}>
                    <td className="table-checkboxwrap">
                        <input type="checkbox" defaultChecked={admin.isChecked} />
                    </td>
                    <td>{i + 1}</td>
                    <td>{admin.name}</td>
                    <td>{admin.username}</td>
                </tr>
        );

        return (
            <div className="admin-table">
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th className="table-checkboxwrap">
                                <input type="checkbox" defaultChecked={this.props.checkAll}/>
                            </th>
                            <th>序号</th>
                            <th>姓名</th>
                            <th>账号</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminTrs}
                    </tbody>
                </Table>
            </div>
        );
    }

}

export default TableCpn;