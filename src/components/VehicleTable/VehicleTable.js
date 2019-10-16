import { useState } from 'react';
import { Input, Button, Col, Row, Divider, Table, Icon } from 'antd';
import ModalAddVehicle from '../ModalAddVehicle/ModalAddVehicle';


const VehicleTable = (props) => {
    const [visible, setVisible] = useState(false);
    const showModal = () => {
        setVisible(true);
    };
    const columnVehicles = [
        {
            title: 'Label',
            dataIndex: 'label',
            width: 50,
            fixed: 'left',
            key: 'label',
        },
        {
            title: 'Model',
            dataIndex: 'model',
            width: 100,
            fixed: 'left',
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
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            width: 120,
            fixed: 'right',
            render: () => <div><a>Edit</a><Divider type="vertical" /><a>Delete</a></div>
        }
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
        }
    ];

    const rowSelectionV = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeysV: ${selectedRowKeys}`, 'selectedRowsV: ', selectedRows);
        }
    };
    return (
        <div style={{ margin: 5 }}>
            <Row>
                <Col span={12}>
                    <Button type="primary" icon="plus" style={{ margin: '10px' }} onClick={showModal}>
                        Add Vehicle
                    </Button>
                </Col>
                <Col span={4} offset={7}>
                    <Input
                        style={{ margin: '10px' }}
                        placeholder="Vehicle Search"
                        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                </Col>
            </Row>
            <Row>
                <Table rowSelection={rowSelectionV} columns={columnVehicles} dataSource={dataVehicles} scroll={{ x: 900, y: 300 }}/>
            </Row>
            <ModalAddVehicle visible={visible} setVisible={setVisible} />
        </div>

    );
}


export default VehicleTable;