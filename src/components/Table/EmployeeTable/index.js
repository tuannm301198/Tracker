import { useState } from 'react';
import { Input, Button, Col, Row, Divider, Table, Icon, Badge, Typography, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ModalAddEmployee from '../../Modal/ModalAddEmployee/ModalAddEmployee';
import {
  IdcardFilled,
  CarFilled,
  EnvironmentFilled,
  HomeFilled,
  PhoneFilled,
  MailFilled,
  LockFilled,
  ToolFilled,
  EditFilled,
} from '@ant-design/icons';
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
          <Modal
            width="40%"
            title="Driver"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Title level={3}>Summary</Title>
                <Row style={{ marginBottom: '10px' }}>
                  <Col span={3} style={{ alignSelf: 'center' }}>
                    <EditFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
                  </Col>
                  <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                    <Text type="secondary" style={{ marginBottom: '4px' }}>
                      Name
                    </Text>
                    <Input defaultValue={record.name} />
                  </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                  <Col span={3} style={{ alignSelf: 'center' }}>
                    <CarFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
                  </Col>
                  <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                    <Text type="secondary" style={{ marginBottom: '4px' }}>
                      Vehicle
                    </Text>
                    <Input defaultValue={record.tracker} />
                  </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                  <Col span={3} style={{ alignSelf: 'center' }}>
                    <HomeFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
                  </Col>
                  <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                    <Text type="secondary" style={{ marginBottom: '4px' }}>
                      Department
                    </Text>
                    <Input defaultValue="Service Department" />
                  </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                  <Col span={3} style={{ alignSelf: 'center' }}>
                    <IdcardFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
                  </Col>
                  <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                    <Text type="secondary" style={{ marginBottom: '4px' }}>
                      Employer ID
                    </Text>
                    <Input defaultValue={record.id} />
                  </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                  <Col span={3} style={{ alignSelf: 'center' }}>
                    <LockFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
                  </Col>
                  <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                    <Text type="secondary" style={{ marginBottom: '4px' }}>
                      Hardware key
                    </Text>
                    <Input defaultValue={record.hardwarekey} />
                  </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                  <Col span={3} style={{ alignSelf: 'center' }}>
                    <ToolFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
                  </Col>
                  <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                    <Text type="secondary" style={{ marginBottom: '4px' }}>
                      Driver license number
                    </Text>
                    <Input defaultValue={record.dl} />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Title level={3}>Contact Info</Title>
                <Row style={{ marginBottom: '10px' }}>
                  <Col span={3} style={{ alignSelf: 'center' }}>
                    <PhoneFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
                  </Col>
                  <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                    <Text type="secondary" style={{ marginBottom: '4px' }}>
                      Phone number
                    </Text>
                    <Input defaultValue={record.phone} />
                  </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                  <Col span={3} style={{ alignSelf: 'center' }}>
                    <MailFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
                  </Col>
                  <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                    <Text type="secondary" style={{ marginBottom: '4px' }}>
                      Email
                    </Text>
                    <Input defaultValue={record.email} />
                  </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                  <Col span={3} style={{ alignSelf: 'center' }}>
                    <EnvironmentFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
                  </Col>
                  <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                    <Text type="secondary" style={{ marginBottom: '4px' }}>
                      Address
                    </Text>
                    <Input defaultValue="50170 Kerpen, Germany" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Modal>
          <Divider type="vertical" />
          <a>Delete</a>
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
