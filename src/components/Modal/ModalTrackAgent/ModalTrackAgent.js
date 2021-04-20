import React, { useState } from 'react';
import {
  Layout,
  Tabs,
  Modal,
  Select,
  Row,
  Col,
  DatePicker,
  Divider,
  Button,
  Checkbox,
  Typography,
  Slider,
  Table,
} from 'antd';
import moment from 'moment';
import { PauseCircleFilled, PushpinFilled, EnvironmentFilled } from '@ant-design/icons';
// components
import { DisplayMap } from '../../NewMap';
const { Sider, Content, Footer } = Layout;

const { Text } = Typography;
const { Option } = Select;
const ModalTrackAgent = props => {
  const {
    className,
    classNameSider,
    isModalVisible,
    handleOk,
    handleCancel,
    dataSource,
    columns,
  } = props;
  const [isTableHidden, setIsTableHidden] = useState(true);
  const [isTripHidden, setIsTripHidden] = useState(true);
  const toggleTable = () => {
    setIsTableHidden(!isTableHidden);
  };
  return (
    <div>
      <Modal
        zIndex={1010}
        closable={false}
        className={className}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Layout>
          <Sider className={classNameSider}>
            <Row style={{ marginBottom: '10px' }}>
              <Text type="success">B220-3952 (IMEI: 408368572673)</Text>
            </Row>
            <Row style={{ marginBottom: '10px' }}>
              <Text type="warning">
                Support users to view trip within 30 days(under last 6 months), playback tracks
                within 7 days
              </Text>
            </Row>
            <Row style={{ marginBottom: '10px' }}>
              <Col span={8} style={{ alignSelf: 'center' }}>
                <span>Locating Type:</span>
              </Col>
              <Col span={16} style={{ alignSelf: 'center' }}>
                <Select defaultValue="GPS" style={{ width: '100%' }}>
                  <Option>GPS</Option>
                  <Option>UPS</Option>
                </Select>
              </Col>
            </Row>
            <Row style={{ marginBottom: '10px' }}>
              <Col span={8} style={{ alignSelf: 'center' }}>
                <span>Start Time:</span>
              </Col>
              <Col span={16}>
                <DatePicker
                  showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                  style={{ width: '100%' }}
                  defaultValue={moment('2021-04-12', 'YYYY-MM-DD')}
                />
              </Col>
            </Row>
            <Row style={{ marginBottom: '10px' }}>
              <Col span={8} style={{ alignSelf: 'center' }}>
                <span>End Time:</span>
              </Col>
              <Col span={16}>
                <DatePicker
                  showTime={{ defaultValue: moment('10:30:56', 'HH:mm:ss') }}
                  style={{ width: '100%' }}
                  defaultValue={moment('2021-04-13', 'YYYY-MM-DD')}
                />
              </Col>
            </Row>
            <Row style={{ marginBottom: '10px' }}>
              <Col span={8} style={{ alignSelf: 'center' }}>
                <span>Tracking Time:</span>
              </Col>
              <Col span={16}>
                <Select defaultValue="Today" style={{ width: '100%' }}>
                  <Option>Today</Option>
                  <Option>Yesterday</Option>
                  <Option>2 days ago</Option>
                </Select>
              </Col>
            </Row>
            <Row style={{ marginBottom: '10px' }}>
              <Button type="primary" style={{ width: '100%' }}>
                Search
              </Button>
            </Row>
            {isTripHidden ? (
              <div>
                <Row
                  style={{
                    marginBottom: '10px',
                    border: '1px solid #DCDAD9',
                    borderRadius: '5px',
                    padding: '15px',
                  }}
                >
                  <ul style={{ listStyleType: 'none ', paddingLeft: 0, marginBottom: 0 }}>
                    <li style={{ display: 'flex' }}>
                      <EnvironmentFilled
                        style={{
                          color: '#ffd966',
                          fontSize: 24,
                          marginRight: '16px',
                          marginTop: '8px',
                        }}
                      />
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text>
                          Đào Tấn, Thanh Cong Village Gate, Ngọc Khánh, Ba Dinh District, Hanoi,
                          118443, Vietnam
                        </Text>
                        <Text type="secondary">2021-04-12 07:18:02</Text>
                      </div>
                    </li>
                    <li style={{ display: 'flex' }}>
                      <EnvironmentFilled
                        style={{
                          color: '#ff6666',
                          fontSize: 24,
                          marginRight: '16px',
                          marginTop: '8px',
                        }}
                      />
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text>
                          Dương Đình Nghệ, Cầu Giấy, Cau Giay District, Hanoi, 122000, Vietnam
                        </Text>
                        <Text type="secondary">2021-04-12 09:47:44</Text>
                      </div>
                    </li>
                  </ul>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                  <Col span={12}>
                    <Checkbox>Anti Drift</Checkbox>
                  </Col>
                  <Col span={12}>
                    <Checkbox>Driving Behavior</Checkbox>
                  </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                  <Col span={12}>
                    <Text>Speed: 17 km/h</Text>
                  </Col>
                  <Col span={12}>
                    <Text>Total Milleage: 116 km</Text>
                  </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                  <Col span={2} style={{ alignSelf: 'center' }}>
                    <PauseCircleFilled
                      style={{ color: '#1890ff', fontSize: 24, cursor: 'pointer' }}
                    />
                  </Col>
                  <Col span={22}>
                    <Slider defaultValue={100} style={{ margin: 0 }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Text>2021-04-09 07:42:53</Text>
                      <Text>Speed: </Text>
                      <Slider
                        defaultValue={40}
                        style={{ minWidth: '80px', margin: 0, alignSelf: 'center' }}
                      />
                    </div>
                  </Col>
                </Row>
                <Row
                  style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}
                >
                  <div>
                    <Button style={{ marginRight: '4px' }}>Track</Button>
                    <Button>Reset</Button>
                  </div>
                  <div>
                    <Text>Stop sign: </Text>
                    <Select defaultValue="3 minutes">
                      <Option>10 minutes</Option>
                      <Option>20 minutes</Option>
                    </Select>
                  </div>
                </Row>
                <Row style={{ justifyContent: 'space-between' }}>
                  <Button type="primary">Play by dots</Button>
                  <Button
                    style={{ backgroundColor: '#009900', color: 'white' }}
                    onClick={toggleTable}
                  >
                    Track Detail
                  </Button>
                  <Button>Export Km</Button>
                </Row>
                <Divider />
                <Row>
                  <Button style={{ marginRight: '4px' }}>Tracking</Button>
                  <Button
                    style={{ marginRight: '4px' }}
                    onClick={() => setIsTripHidden(!isTripHidden)}
                  >
                    Trips
                  </Button>
                  <Button style={{ marginRight: '4px' }}>Export Excel</Button>
                </Row>
              </div>
            ) : (
              <>
                <div style={{ overflow: 'auto', maxHeight: '400px' }}>
                  <Row
                    style={{
                      marginBottom: '10px',
                      border: '1px solid #DCDAD9',
                      borderRadius: '5px',
                      padding: '15px',
                    }}
                  >
                    <ul style={{ listStyleType: 'none ', paddingLeft: 0, marginBottom: 0 }}>
                      <li style={{ display: 'flex' }}>
                        <EnvironmentFilled
                          style={{
                            color: '#ffd966',
                            fontSize: 24,
                            marginRight: '16px',
                            marginTop: '8px',
                          }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <Text>
                            Đào Tấn, Thanh Cong Village Gate, Ngọc Khánh, Ba Dinh District, Hanoi,
                            118443, Vietnam
                          </Text>
                          <Text type="secondary">2021-04-12 07:18:02</Text>
                        </div>
                      </li>
                      <li style={{ display: 'flex' }}>
                        <EnvironmentFilled
                          style={{
                            color: '#ff6666',
                            fontSize: 24,
                            marginRight: '16px',
                            marginTop: '8px',
                          }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <Text>
                            Dương Đình Nghệ, Cầu Giấy, Cau Giay District, Hanoi, 122000, Vietnam
                          </Text>
                          <Text type="secondary">2021-04-12 09:47:44</Text>
                        </div>
                      </li>
                    </ul>
                  </Row>
                  <Row
                    style={{
                      marginBottom: '10px',
                      border: '1px solid #DCDAD9',
                      borderRadius: '5px',
                      padding: '15px',
                    }}
                  >
                    <ul style={{ listStyleType: 'none ', paddingLeft: 0, marginBottom: 0 }}>
                      <li style={{ display: 'flex' }}>
                        <EnvironmentFilled
                          style={{
                            color: '#ffd966',
                            fontSize: 24,
                            marginRight: '16px',
                            marginTop: '8px',
                          }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <Text>
                            Đào Tấn, Thanh Cong Village Gate, Ngọc Khánh, Ba Dinh District, Hanoi,
                            118443, Vietnam
                          </Text>
                          <Text type="secondary">2021-04-12 07:18:02</Text>
                        </div>
                      </li>
                      <li style={{ display: 'flex' }}>
                        <EnvironmentFilled
                          style={{
                            color: '#ff6666',
                            fontSize: 24,
                            marginRight: '16px',
                            marginTop: '8px',
                          }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <Text>
                            Dương Đình Nghệ, Cầu Giấy, Cau Giay District, Hanoi, 122000, Vietnam
                          </Text>
                          <Text type="secondary">2021-04-12 09:47:44</Text>
                        </div>
                      </li>
                    </ul>
                  </Row>
                  <Row
                    style={{
                      marginBottom: '10px',
                      border: '1px solid #DCDAD9',
                      borderRadius: '5px',
                      padding: '15px',
                    }}
                  >
                    <ul style={{ listStyleType: 'none ', paddingLeft: 0, marginBottom: 0 }}>
                      <li style={{ display: 'flex' }}>
                        <EnvironmentFilled
                          style={{
                            color: '#ffd966',
                            fontSize: 24,
                            marginRight: '16px',
                            marginTop: '8px',
                          }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <Text>
                            Đào Tấn, Thanh Cong Village Gate, Ngọc Khánh, Ba Dinh District, Hanoi,
                            118443, Vietnam
                          </Text>
                          <Text type="secondary">2021-04-12 07:18:02</Text>
                        </div>
                      </li>
                      <li style={{ display: 'flex' }}>
                        <EnvironmentFilled
                          style={{
                            color: '#ff6666',
                            fontSize: 24,
                            marginRight: '16px',
                            marginTop: '8px',
                          }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <Text>
                            Dương Đình Nghệ, Cầu Giấy, Cau Giay District, Hanoi, 122000, Vietnam
                          </Text>
                          <Text type="secondary">2021-04-12 09:47:44</Text>
                        </div>
                      </li>
                    </ul>
                  </Row>
                </div>
                <Row style={{ marginTop: '40px' }}>
                  <Button
                    style={{ marginRight: '4px' }}
                    onClick={() => setIsTripHidden(!isTripHidden)}
                  >
                    Back
                  </Button>
                  <Button style={{ marginRight: '4px' }} onClick={toggleTable}>
                    Track Detail
                  </Button>
                  <Button style={{ marginRight: '4px' }}>Export Excel</Button>
                </Row>
              </>
            )}
          </Sider>
          <Layout>
            <Content>
              <DisplayMap height="770px" />
              <Table
                style={{
                  position: 'absolute',
                  bottom: 0,
                  zIndex: 1000,
                  display: isTableHidden ? 'none' : 'block',
                }}
                dataSource={dataSource}
                columns={columns}
                scroll={{ y: 200 }}
                pagination={false}
              />
            </Content>
          </Layout>
        </Layout>
      </Modal>
    </div>
  );
};

export default ModalTrackAgent;
