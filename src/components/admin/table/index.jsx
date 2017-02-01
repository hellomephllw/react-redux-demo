/**
 * Created by liliwen on 2017/2/1.
 */
import React from 'react';
import {Table, FormGroup, Checkbox} from 'react-bootstrap';
import './index.scss';

class TableCpn extends React.Component {

    constructor() {
        super();
    }

    render() {
        let admins = [
            {id: 5, username: 'favorittt', name: '张三'},
            {id: 7, username: 'tracymcgrady', name: '麦迪'},
            {id: 10, username: 'iverson', name: '艾弗森'},
            {id: 20, username: 'durant', name: '杜兰特'},
            {id: 77,username: 'terminal', name: '李四'}
        ];
        let adminTrs = admins.map((admin, i) =>
                <tr key={i}>
                    <td className="table-checkboxwrap">
                        <input type="checkbox"/>
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
                                <input type="checkbox"/>
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