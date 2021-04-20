import React from 'react';
import { useState } from 'react';
import { Input, Button, Col, Row, Divider, Table, Icon, Badge, Typography, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
const DeviceTable = props => {
  const { setDeviceData } = props;
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
  const columnsDevice = [
    {
      title: 'No.',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Account',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: 'Device Name',
      dataIndex: 'deviceName',
      key: 'deviceName',
    },
    {
      title: 'IMEI',
      dataIndex: 'imei',
      key: 'imei',
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Activated Date',
      dataIndex: 'activatedDate',
      key: 'activatedDate',
    },
    // {
    //   title: 'Subscription Expiration',
    //   dataIndex: 'subExpired',
    //   key: 'subExpired',
    // },
    {
      title: 'Expiration Date',
      dataIndex: 'expirationDate',
      key: 'expirationDate',
    },
    {
      title: 'Status',
      render: () => (
        <>
          <Badge dot offset={[5, 0]} status="success" />
          <Text style={{ fontSize: '12px' }}>Enabled</Text>
        </>
      ),
    },
    {
      title: 'Action',
      key: 'x',
      fixed: 'right',
      width: 150,
      render: (text, record) => (
        <div>
          <a onClick={showUserModal}>Edit</a>

          <Divider type="vertical" />
          <a>Monitor</a>
        </div>
      ),
    },
  ];
  const dataDevice = [
    {
      id: 1,
      account: 'Tester',
      deviceName: 'OB33-571',
      imei: 3744729584212,
      model: 'BA95',
      activatedDate: '2021-04-12',
      subExpired: '2041-04-12',
      expirationDate: '2041-04-12',
    },
    {
      id: 2,
      account: 'Tester',
      deviceName: 'OB33-571',
      imei: 3744729584212,
      model: 'BA95',
      activatedDate: '2021-04-12',
      subExpired: '2041-04-12',
      expirationDate: '2041-04-12',
    },
    {
      id: 3,
      account: 'Tester',
      deviceName: 'OB33-571',
      imei: 3744729584212,
      model: 'BA95',
      activatedDate: '2021-04-12',
      subExpired: '2041-04-12',
      expirationDate: '2041-04-12',
    },
  ];
  return (
    <div style={{ margin: '5' }}>
      <Row>
        <Table style={{ width: '100%' }} columns={columnsDevice} dataSource={dataDevice} />
      </Row>
    </div>
  );
};

export default DeviceTable;
