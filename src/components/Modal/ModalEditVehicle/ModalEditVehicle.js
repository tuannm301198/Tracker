import React from 'react';
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
const { Text, Title } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;
const ModalEditVehicle = props => {
  const { isModalVisible, handleOk, handleCancel } = props;
  return (
    <div>
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
                    <Input value="Man truck" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="License plate" style={{ flexDirection: 'column' }}>
                    <Input value="D028N4" />
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
                    <Input value="Man TGA 33.480" />
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
                    <Input defaultValue="20000 kg" suffix="kg" />
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
    </div>
  );
};

export default ModalEditVehicle;
