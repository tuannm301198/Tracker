import React, { useState, useEffect } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
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
import { Link } from 'umi';
import { connect } from 'dva';
import { PauseCircleFilled, PushpinFilled, EnvironmentFilled } from '@ant-design/icons';
// components
import AgentItem from './AgentItem';
import ModalTrackAgent from '../Modal/ModalTrackAgent/ModalTrackAgent';
// styles
import styles from './index.less';

const { Text } = Typography;
const { Option } = Select;
const { Sider, Content, Footer } = Layout;
const { TabPane } = Tabs;

const columns = [
  {
    title: '.No',
    width: 100,
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
      <ModalTrackAgent
        className={styles.modal}
        classNameSider={styles.modalSider}
        handleCancel={handleCancel}
        handleOk={handleOk}
        dataSource={dataSource}
        columns={columns}
        isModalVisible={isModalVisible}
      />
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
