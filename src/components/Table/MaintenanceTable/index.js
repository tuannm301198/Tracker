import { useState } from 'react';
import { Input, Button, Col, Row, Table, Icon, Badge, Divider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ModalAddMaintenance from '../../Modal/ModalAddMaintenance';

const MaintenanceTable = props => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const columnMaintenance = [
    {
      title: 'Vehicle',
      dataIndex: 'vehicle',
      key: 'vehicle',
    },
    {
      title: 'Service work',
      dataIndex: 'serviceWork',
      key: 'serviceWork',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: () => (
        <>
          <Badge dot offset={[5, 0]} status="warning"></Badge>
          <span style={{ fontSize: '12px' }}>Pending</span>
        </>
      ),
    },
    {
      title: 'Target values',
      dataIndex: 'targetValues',
      key: 'targetValues',
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
      key: 'cost',
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      key: 'completed',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      width: 120,
      fixed: 'right',
      render: (text, record) => (
        <div>
          <a onClick={showModal}>Edit</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </div>
      ),
    },
  ];
  const dataMaintenance = [
    {
      vehicle: 'Mazda 6',
      serviceWork: 'Repolish',
      targetValues: 'High value',
      cost: '2000 USD',
      completed: 'Waiting for payment',
    },
    {
      vehicle: 'Vinfast',
      serviceWork: 'Recolor',
      targetValues: 'Medium value',
      cost: '1000 USD',
      completed: 'Succeed',
    },
    {
      vehicle: 'Mayback',
      serviceWork: 'Change mirror',
      targetValues: 'High value',
      cost: '4500 USD',
      completed: 'Succeed',
    },
    {
      vehicle: 'Mazda 6',
      serviceWork: 'Repolish',
      targetValues: 'High value',
      cost: '2000 USD',
      completed: 'Waiting for payment',
    },
  ];
  const rowSelectionM = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeysM: ${selectedRowKeys}`, 'selectedRowsM: ', selectedRows);
    },
  };
  return (
    <div style={{ margin: 5 }}>
      <Row>
        <Col span={12}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{ margin: '10px' }}
            onClick={showModal}
          >
            Add Maintenance
          </Button>
        </Col>
        <Col span={4} offset={8} style={{ marginRight: '-20px' }}>
          <Input
            style={{ margin: '10px -10px' }}
            placeholder="Maintenance Search"
            prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </Col>
      </Row>
      <Row>
        <Table
          style={{ width: '100%' }}
          rowSelection={rowSelectionM}
          columns={columnMaintenance}
          dataSource={dataMaintenance}
        />
      </Row>
      <ModalAddMaintenance visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default MaintenanceTable;
