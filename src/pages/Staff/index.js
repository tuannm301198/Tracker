import { Tabs, Table } from 'antd';

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
    const columnVehicles = [
        {
            title: 'Label',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
        },
        {
            title: 'Tracker',
            dataIndex: 'tracker',
            key: 'tracker',
        },
        {
            title: 'Reg.plate',
            key: 'regplate',
            dataIndex: 'regplate'
        },
        {
            title: 'Type',
            key: 'type',
            dataIndex: 'type'
        },
        {
            title: 'Cargo capacity',
            key: 'cargocapacity',
            dataIndex: 'cargocapacity'
        },
        {
            title: 'Fuel',
            key: 'fuel',
            dataIndex: 'fuel'
        },
    ];

    const dataVehicles = [
        {
            key: '1',
            label: 'Man truck',
            model: 'Man TGA 33.480',
            tracker: 'Man truck',
            regplate: 'D028N4',
            type: 'Truck',
            cargocapacity: '20000 kg',
            fuel: 'Diesel'
        },
        {
            key: '2',
            label: 'Man truck',
            model: 'Man TGA 33.480',
            tracker: 'Man truck',
            regplate: 'D028N4',
            type: 'Truck',
            cargocapacity: '20000 kg',
            fuel: 'Diesel'
        },
        {
            key: '3',
            label: 'Man truck',
            model: 'Man TGA 33.480',
            tracker: 'Man truck',
            regplate: 'D028N4',
            type: 'Truck',
            cargocapacity: '20000 kg',
            fuel: 'Diesel'
        },
    ];
    const rowSelectionE = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeysE: ${selectedRowKeys}`, 'selectedRowsE: ', selectedRows);
        }
    };
    const rowSelectionV = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeysV: ${selectedRowKeys}`, 'selectedRowsV: ', selectedRows);
        }
    };
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="Employees" key="1">
                <Table rowSelection={rowSelectionE} columns={columnEmployees} dataSource={dataEmployees} />
            </TabPane>
            <TabPane tab="Vehicles" key="2">
                <Table rowSelection={rowSelectionV} columns={columnVehicles} dataSource={dataVehicles} />
            </TabPane>
        </Tabs>
    );
}

export default Staff;