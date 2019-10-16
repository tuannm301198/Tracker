import { Tabs, Table, Button, Icon, Input, Row, Col, Divider } from 'antd';
import VehiclesTable from '../../components/VehicleTable/VehicleTable';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
const { TabPane } = Tabs;
const Staff = () => {
    const columnEmployees = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Tracker',
            dataIndex: 'tracker',
            key: 'tracker',
        },
        {
            title: 'Phone',
            key: 'phone',
            dataIndex: 'phone'
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email'
        },
        {
            title: 'Hardware Key',
            key: 'hardwarekey',
            dataIndex: 'hardwarekey'
        },
        {
            title: 'D/L',
            key: 'dl',
            dataIndex: 'dl'
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <div><a>Edit</a><Divider type="vertical"/><a>Delete</a></div>
        }
    ];

    const dataEmployees = [
        {
            key: '1',
            id: '43345',
            name: 'John Brown',
            tracker: 'Volkswagen',
            phone: '099896556',
            email: 'johnbrown@gmail.com',
            hardwarekey: 'KFLDLKFDSF',
            dl: 'EU5903490TR'
        },
        {
            key: '2',
            id: '4345',
            name: 'Jim Green',
            tracker: 'Volkswagen',
            phone: '089896556',
            email: 'jimgreen@gmail.com',
            hardwarekey: 'KIFKLLKFDSF',
            dl: 'SAKO848561AS'
        },
        {
            key: '3',
            id: '4545',
            name: 'Joe Black',
            tracker: 'Volkswagen',
            phone: '089896556',
            email: 'joeblack@gmail.com',
            hardwarekey: 'KIELLKFDSF',
            dl: 'AKFO8496AS'
        },
    ];

    const rowSelectionE = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeysE: ${selectedRowKeys}`, 'selectedRowsE: ', selectedRows);
        }
    };
    
    return (
        <div style={{margin:'5px'}}>
            <h2 style={{margin:10}}>Staff Management</h2>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Employees" key="1">
                    <EmployeeTable/>
                </TabPane>
                <TabPane tab="Vehicles" key="2">
                    <VehiclesTable/>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default Staff;