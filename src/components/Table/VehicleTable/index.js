import { useState } from 'react';
import {
  Input,
  Button,
  Col,
  Row,
  Divider,
  Table,
  Icon,
  Badge,
  Tooltip,
  Avatar,
  Modal,
  Typography,
  Form,
  Select,
  Tabs,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ModalAddVehicle from '../../Modal/ModalAddVehicle/ModalAddVehicle';

const { Text, Title } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;
const VehicleTable = props => {
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { setVehicleData } = props;
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModalVehicle = () => {
    setVisible(true);
  };
  const columnVehicles = [
    {
      title: 'Label',
      dataIndex: 'label',
      width: 100,
      fixed: 'left',
      key: 'label',
    },
    {
      title: 'Model',
      dataIndex: 'model',
      width: 150,
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
      dataIndex: 'regplate',
    },
    {
      title: 'Type',
      key: 'type',
      dataIndex: 'type',
    },
    {
      title: 'Cargo capacity',
      key: 'cargocapacity',
      dataIndex: 'cargocapacity',
    },
    {
      title: 'Fuel',
      key: 'fuel',
      dataIndex: 'fuel',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: () => (
        <>
          <Badge dot offset={[5, 0]} status="success"></Badge>
          <span style={{ fontSize: '12px' }}>Available</span>
        </>
      ),
    },
    {
      title: 'Recent Event',
      key: 'event',
      width: 250,
      ellipsis: {
        showTitle: false,
      },
      dataIndex: 'event',
      render: event => (
        <Tooltip placement="topLeft" title={event}>
          {event}
        </Tooltip>
      ),
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
          <Modal
            width="40%"
            title="Vehicle"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="MAIN" key="1">
                <Row>
                  <Title level={3}>Main information</Title>
                </Row>
                <Form colon={false} labelAlign="left">
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="Name" style={{ flexDirection: 'column' }}>
                        <Input value={record.tracker} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="License plate" style={{ flexDirection: 'column' }}>
                        <Input value={text.regplate} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="Color" style={{ flexDirection: 'column' }}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="VIN" style={{ flexDirection: 'column' }}>
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="Depot" style={{ flexDirection: 'column' }}>
                        <Select defaultValue="No Depot">
                          <Option>No Depot</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Model" style={{ flexDirection: 'column' }}>
                        <Input value={record.model} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="Type" style={{ flexDirection: 'column' }}>
                        <Select defaultValue="Car">
                          <Option>Car</Option>
                          <Option>Truck</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Subtype" style={{ flexDirection: 'column' }}>
                        <Select defaultValue="Covered">
                          <Option>Tipper</Option>
                          <Option>Minivan</Option>
                          <Option>Board</Option>
                          <Option>Covered</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Title level={3}>Additional Information</Title>
                  <Row>
                    <Form.Item label="Tags" style={{ flexDirection: 'column', width: '100%' }}>
                      <Input />
                    </Form.Item>
                  </Row>
                  <Row>
                    <Form.Item label="Note" style={{ flexDirection: 'column', width: '100%' }}>
                      <Input />
                    </Form.Item>
                  </Row>
                </Form>
              </TabPane>
              <TabPane tab="SPECIFICATION" key="2">
                <Row>
                  <Title level={3}>Size</Title>
                </Row>
                <Form colon={false} labelAlign="left">
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="Payload" style={{ flexDirection: 'column' }}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Col span={6}>
                            <Input defaultValue="4000" suffix="mm" maxLength={4} />
                          </Col>
                          <Text style={{ alignSelf: 'center' }}>x</Text>
                          <Col span={6}>
                            <Input defaultValue="4000" suffix="mm" maxLength={4} />
                          </Col>
                          <Text style={{ alignSelf: 'center' }}>x</Text>
                          <Col span={6}>
                            <Input defaultValue="4000" suffix="mm" maxLength={4} />
                          </Col>
                        </div>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Cargo capacity" style={{ flexDirection: 'column' }}>
                        <Input defaultValue={record.cargocapacity} suffix="kg" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="Passengers capacity" style={{ flexDirection: 'column' }}>
                        <Input defaultValue="2" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Gross weight" style={{ flexDirection: 'column' }}>
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Title level={3}>Wheels</Title>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="Axle configuration" style={{ flexDirection: 'column' }}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Col span={10}>
                            <Input defaultValue="6" suffix="mm" maxLength={4} />
                          </Col>
                          <Text style={{ alignSelf: 'center' }}>x</Text>
                          <Col span={10}>
                            <Input defaultValue="2" suffix="mm" maxLength={4} />
                          </Col>
                        </div>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Tire size" style={{ flexDirection: 'column' }}>
                        <Input defaultValue="10.00 RC2" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Form.Item label="Tires number" style={{ flexDirection: 'column' }}>
                        <Input defaultValue="10" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Title level={3}>Additional Information</Title>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="Permitted speed" style={{ flexDirection: 'column' }}>
                        <Input defaultValue="90" suffix="km / h" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Chassic number" style={{ flexDirection: 'column' }}>
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="Trailer" style={{ flexDirection: 'column' }}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Manifacture year" style={{ flexDirection: 'column' }}>
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </TabPane>
              <TabPane tab="FUEL" key="3">
                <Form colon={false} labelAlign="left">
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="Fuel type" style={{ flexDirection: 'column' }}>
                        <Select defaultValue={1}>
                          <Option value={1}>Diesel</Option>
                          <Option value={2}>Petrol</Option>
                          <Option value={3}>Gas</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Fuel grade" style={{ flexDirection: 'column' }}>
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        label="Fuel consumption per 100 km"
                        style={{ flexDirection: 'column' }}
                      >
                        <Input defaultValue={30} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Tank capacity" style={{ flexDirection: 'column' }}>
                        <Input defaultValue={400} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </TabPane>
            </Tabs>
          </Modal>
          <Divider type="vertical" />
          <a>Delete</a>
        </div>
      ),
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
      fuel: 'Diesel',
      event: 'Rahul Adenauer: task "Stall Shawarma - 49km MKAD" FAILED!   4 days ago',
    },
    {
      key: '2',
      label: 'Man truck',
      model: 'TBA 4.23',
      tracker: 'Man truck',
      regplate: 'I84B2',
      type: 'Truck',
      cargocapacity: '20000 kg',
      fuel: 'Diesel',
      event: 'Rahul Humar: task "Stall Shawarma - 49km MKAD" SUCCEED!   2 days ago',
    },
    {
      key: '3',
      label: 'Man truck',
      model: 'MBI 93.203',
      tracker: 'Man truck',
      regplate: 'D853A',
      type: 'Truck',
      cargocapacity: '25000 kg',
      fuel: 'Diesel',
      event: 'Paul Marker: task "Stall Shawarma - 49km MKAD" FAILED!   4 days ago',
    },
  ];

  const rowSelectionV = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeysV: ${selectedRowKeys}`, 'selectedRowsV: ', selectedRows);
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
            onClick={showModalVehicle}
          >
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
        <Table
          onRow={record => {
            return {
              onClick: () => {
                setVehicleData(record);
              },
            };
          }}
          rowSelection={rowSelectionV}
          columns={columnVehicles}
          dataSource={dataVehicles}
          // scroll={{ x: 900, y: 300 }}
        />
      </Row>
      <ModalAddVehicle visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default VehicleTable;
