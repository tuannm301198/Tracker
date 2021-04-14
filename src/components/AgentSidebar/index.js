import React, { useState, useEffect } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {
  Layout,
  Icon,
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
  List,
  Avatar,
} from 'antd';
import moment from 'moment';
import { Link } from 'umi';
import { connect } from 'dva';
import { PauseCircleFilled, PushpinFilled, EnvironmentFilled } from '@ant-design/icons';
// components
import AgentItem from './AgentItem';
import Map from '@/components/Map';
import { DisplayMap } from '../NewMap';
import { HEREMap } from 'here-maps-react';

// styles
import styles from './index.less';

const { Text } = Typography;
const { Option } = Select;
const { Sider, Content, Footer } = Layout;
const { TabPane } = Tabs;

const columns = [
  {
    title: '.No',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Coordinate',
    dataIndex: 'coordinate',
    key: 'coordinate',
  },
  {
    title: 'Speed',
    dataIndex: 'speed',
    key: 'speed',
  },
  {
    title: 'Direction',
    dataIndex: 'direction',
    key: 'direction',
  },
  {
    title: 'Locating Type',
    dataIndex: 'locatingType',
    key: 'locatingType',
  },
  {
    title: 'Validity',
    dataIndex: 'validity',
    key: 'validity',
  },
  {
    title: 'Satellite',
    dataIndex: 'satellite',
    key: 'satellite',
  },
  {
    title: 'Position',
    key: 'position',
    render: () => <a>Position</a>,
  },
];
const dataSource = [
  {
    id: 1,
    time: '2021-04-09 07:34:52',
    coordinate: '105.687663523',
    speed: '8 km/h',
    direction: 'South West(Direction: 93)',
    locatingType: 'GPS',
    validity: 'Real time',
    satellite: '7',
  },
  {
    id: 1,
    time: '2021-04-09 07:34:52',
    coordinate: '105.687663523',
    speed: '8 km/h',
    direction: 'South West(Direction: 93)',
    locatingType: 'GPS',
    validity: 'Real time',
    satellite: '7',
  },
  {
    id: 1,
    time: '2021-04-09 07:34:52',
    coordinate: '105.687663523',
    speed: '8 km/h',
    direction: 'South West(Direction: 93)',
    locatingType: 'GPS',
    validity: 'Real time',
    satellite: '7',
  },
  {
    id: 1,
    time: '2021-04-09 07:34:52',
    coordinate: '105.687663523',
    speed: '8 km/h',
    direction: 'South West(Direction: 93)',
    locatingType: 'GPS',
    validity: 'Real time',
    satellite: '7',
  },
  {
    id: 1,
    time: '2021-04-09 07:34:52',
    coordinate: '105.687663523',
    speed: '8 km/h',
    direction: 'South West(Direction: 93)',
    locatingType: 'GPS',
    validity: 'Real time',
    satellite: '7',
  },
  {
    id: 1,
    time: '2021-04-09 07:34:52',
    coordinate: '105.687663523',
    speed: '8 km/h',
    direction: 'South West(Direction: 93)',
    locatingType: 'GPS',
    validity: 'Real time',
    satellite: '7',
  },
  {
    id: 1,
    time: '2021-04-09 07:34:52',
    coordinate: '105.687663523',
    speed: '8 km/h',
    direction: 'South West(Direction: 93)',
    locatingType: 'GPS',
    validity: 'Real time',
    satellite: '7',
  },
  {
    id: 1,
    time: '2021-04-09 07:34:52',
    coordinate: '105.687663523',
    speed: '8 km/h',
    direction: 'South West(Direction: 93)',
    locatingType: 'GPS',
    validity: 'Real time',
    satellite: '7',
  },
  {
    id: 1,
    time: '2021-04-09 07:34:52',
    coordinate: '105.687663523',
    speed: '8 km/h',
    direction: 'South West(Direction: 93)',
    locatingType: 'GPS',
    validity: 'Real time',
    satellite: '7',
  },
  {
    id: 1,
    time: '2021-04-09 07:34:52',
    coordinate: '105.687663523',
    speed: '8 km/h',
    direction: 'South West(Direction: 93)',
    locatingType: 'GPS',
    validity: 'Real time',
    satellite: '7',
  },
  {
    id: 1,
    time: '2021-04-09 07:34:52',
    coordinate: '105.687663523',
    speed: '8 km/h',
    direction: 'South West(Direction: 93)',
    locatingType: 'GPS',
    validity: 'Real time',
    satellite: '7',
  },
  {
    id: 1,
    time: '2021-04-09 07:34:52',
    coordinate: '105.687663523',
    speed: '8 km/h',
    direction: 'South West(Direction: 93)',
    locatingType: 'GPS',
    validity: 'Real time',
    satellite: '7',
  },
  {
    id: 1,
    time: '2021-04-09 07:34:52',
    coordinate: '105.687663523',
    speed: '8 km/h',
    direction: 'South West(Direction: 93)',
    locatingType: 'GPS',
    validity: 'Real time',
    satellite: '7',
  },
  {
    id: 1,
    time: '2021-04-09 07:34:52',
    coordinate: '105.687663523',
    speed: '8 km/h',
    direction: 'South West(Direction: 93)',
    locatingType: 'GPS',
    validity: 'Real time',
    satellite: '7',
  },
  {
    id: 1,
    time: '2021-04-09 07:34:52',
    coordinate: '105.687663523',
    speed: '8 km/h',
    direction: 'South West(Direction: 93)',
    locatingType: 'GPS',
    validity: 'Real time',
    satellite: '7',
  },
];

const AgentSidebar = props => {
  const { agentList, dispatch } = props;
  const [collapsedAgent, setToggleAgent] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTableHidden, setIsTableHidden] = useState(true);
  useEffect(() => {
    dispatch({
      type: 'agent/getListAgents',
    });
  }, [dispatch]);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
    console.log('True');
  };
  const toggleAgent = () => {
    setToggleAgent(!collapsedAgent);
  };
  const toggleTable = () => {
    setIsTableHidden(!isTableHidden);
  };
  const renderTabPaneTitle = (quantity, title) => (
    <React.Fragment style={{ width: '150px' }}>
      <span style={{ marginRight: 2 }}>{quantity}</span>
      <span>{title}</span>
    </React.Fragment>
  );

  const renderAgentList = agentList.length && (
    <React.Fragment>
      {agentList.map(item => (
        <AgentItem item={item} showModal={showModal} />
      ))}
    </React.Fragment>
  );

  return (
    <Sider
      trigger={null}
      className={styles.container}
      collapsible
      collapsed={collapsedAgent}
      collapsedWidth="0"
      width="330"
      theme="light"
    >
      <Modal
        zIndex={1010}
        closable={false}
        className={styles.modal}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Layout>
          <Sider className={styles.modalSider}>
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
                      Đào Tấn, Thanh Cong Village Gate, Ngọc Khánh, Ba Dinh District, Hanoi, 118443,
                      Vietnam
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
                <PauseCircleFilled style={{ color: '#1890ff', fontSize: 24, cursor: 'pointer' }} />
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
            <Row style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
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
              <Button style={{ backgroundColor: '#009900', color: 'white' }} onClick={toggleTable}>
                Track Detail
              </Button>
              <Button>Export Km</Button>
            </Row>
            <Divider />
            <Row>
              <Button style={{ marginRight: '4px' }}>Tracking</Button>
              <Button style={{ marginRight: '4px' }}>Trips</Button>
              <Button style={{ marginRight: '4px' }}>Export Excel</Button>
            </Row>
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
      <span className={styles.collapseIcon} onClick={toggleAgent}>
        {collapsedAgent ? (
          <LeftOutlined style={{ color: '#fff' }} />
        ) : (
          <RightOutlined style={{ color: '#fff' }} />
        )}
      </span>
      <div style={{ background: 'rgb(39, 169, 227)', padding: 5 }}>
        <Link style={{ color: '#fff', fontSize: 20, marginLeft: 5 }} to="">
          Agent
        </Link>
      </div>
      <Tabs tabBarGutter={25}>
        {/* <TabPane tab={renderTabPaneTitle(0, 'AVAILABLE')} key="1">
          <p style={{ textAlign: 'center' }}>No Agent available</p>
        </TabPane> */}
        {/* <TabPane tab={renderTabPaneTitle(0, 'BUSY')} key="2">
          <p style={{ textAlign: 'center' }}>No Agent available</p>
        </TabPane> */}
        <TabPane tab={renderTabPaneTitle(agentList.length, 'AVAILABLE')} key="1">
          <div className={styles.scrollable}>{renderAgentList}</div>
        </TabPane>
        <TabPane tab={renderTabPaneTitle(agentList.length, 'ACTIVE')} key="2">
          <div className={styles.scrollable}>{renderAgentList}</div>
        </TabPane>
      </Tabs>
    </Sider>
  );
};

export default connect(state => ({
  agentList: state.agent.agentList,
}))(AgentSidebar);
