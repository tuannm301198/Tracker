import { useState } from 'react';
import { Input, Button, Col, Row, Divider, Table, Icon, Badge, Typography, Modal } from 'antd';
import ModalAddEmployee from '../../Modal/ModalAddEmployee/ModalAddEmployee';
import ModalEditEmployee from '../../Modal/ModalEditEmployee/ModalEditEmployee';
import { PlusOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
const EmployeeTable = props => {
  const { setUserData } = props;
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showUserModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModal = () => {
    setVisible(true);
  };
  const columnEmployees = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      fixed: 'left',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 120,
      fixed: 'left',
    },
    {
      title: 'Tracker',
      dataIndex: 'tracker',
      key: 'tracker',
    },
    {
      title: 'Phone',
      key: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
      width: 200,
    },
    {
      title: 'Hardware Key',
      key: 'hardwarekey',
      dataIndex: 'hardwarekey',
    },
    {
      title: 'D/L',
      key: 'dl',
      dataIndex: 'dl',
    },
    {
      title: 'Status',
      width: 100,
      render: () => (
        <>
          <Badge dot offset={[5, 0]} status="success"></Badge>
          <Text style={{ fontSize: '12px' }}>Online</Text>
        </>
      ),
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      fixed: 'right',
      width: 150,
      render: (text, record) => (
        <div>
          <a onClick={showUserModal}>Edit</a>

          <Divider type="vertical" />
          <a>Delete</a>
          <ModalEditEmployee
            isModalVisible={isModalVisible}
            handleCancel={handleCancel}
            handleOk={handleOk}
          />
        </div>
      ),
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
      dl: 'EU5903490TR',
    },
    {
      key: '2',
      id: '4345',
      name: 'Jim Green',
      tracker: 'Volkswagen',
      phone: '089896556',
      email: 'jimgreen@gmail.com',
      hardwarekey: 'KIFKLLKFDSF',
      dl: 'SAKO848561AS',
    },
    {
      key: '3',
      id: '4545',
      name: 'Joe Black',
      tracker: 'Volkswagen',
      phone: '089896556',
      email: 'joeblack@gmail.com',
      hardwarekey: 'KIELLKFDSF',
      dl: 'AKFO8496AS',
    },
    {
      key: '4',
      id: '43345',
      name: 'John Brown',
      tracker: 'Volkswagen',
      phone: '099896556',
      email: 'johnbrown@gmail.com',
      hardwarekey: 'KFLDLKFDSF',
      dl: 'EU5903490TR',
    },
    {
      key: '5',
      id: '4345',
      name: 'Jim Green',
      tracker: 'Volkswagen',
      phone: '089896556',
      email: 'jimgreen@gmail.com',
      hardwarekey: 'KIFKLLKFDSF',
      dl: 'SAKO848561AS',
    },
    {
      key: '6',
      id: '4545',
      name: 'Joe Black',
      tracker: 'Volkswagen',
      phone: '089896556',
      email: 'joeblack@gmail.com',
      hardwarekey: 'KIELLKFDSF',
      dl: 'AKFO8496AS',
    },
  ];

  const rowSelectionE = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeysE: ${selectedRowKeys}`, 'selectedRowsE: ', selectedRows);
    },
  };
  return (
    <div style={{ margin: 5 }}>
      <Row style={{ justifyContent: 'space-between' }}>
        <Col span={12}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{ margin: '10px' }}
            onClick={showModal}
          >
            Add Employee
          </Button>
        </Col>
        <Col span={4}>
          <Input
            style={{ margin: '10px -10px' }}
            placeholder="Employee Search"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </Col>
      </Row>
      <Row>
        <Table
          style={{ width: '100%' }}
          onRow={record => {
            return {
              onClick: () => {
                setUserData(record);
              },
            };
          }}
          rowSelection={rowSelectionE}
          columns={columnEmployees}
          dataSource={dataEmployees}
        />
      </Row>
      <ModalAddEmployee visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default EmployeeTable;
