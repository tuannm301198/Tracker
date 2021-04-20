import React from 'react';
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
  Typography,
  Modal,
  Collapse,
} from 'antd';
import DeviceTable from '../../components/Table/DeviceTable/DeviceTable';
import styles from './index.less';
import { RobotFilled } from '@ant-design/icons';

const { Panel } = Collapse;
const { Title, Text } = Typography;
const data = [
  {
    id: 1,
    name: 'Testing Trucker 1',
  },
  {
    id: 2,
    name: 'Testing Truck 1',
  },
  {
    id: 3,
    name: 'Testing1',
  },
];
const Device = props => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: 'calc(100vh - 80px)',
        marginRight: '30px',
      }}
    >
      <Col span={4} style={{ margin: '10px 5px 5px 10px', boxShadow: '0 3px 6px rgba(0,0,0,0.3)' }}>
        <Row style={{ backgroundColor: '#002140', padding: 5, width: '100%' }}>
          <Title level={3} style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>
            Account
          </Title>
        </Row>
        <Row style={{ padding: '10px' }}>
          <Input placeholder="Customer Name/Account" />
        </Row>
        <Row style={{ padding: '10px', flexDirection: 'column' }}>
          <Collapse bordered={false} ghost={true} defaultActiveKey={['1']}>
            <Panel header="This is panel header 1" key="1">
              <p>User</p>
              <p>Use2</p>
            </Panel>
          </Collapse>
          {data.map(item => (
            <Row style={{ marginBottom: '8px' }}>
              <RobotFilled style={{ alignSelf: 'center', marginRight: '8px' }} />
              <Text>{item.name}</Text>
            </Row>
          ))}
        </Row>
      </Col>
      <Col
        span={20}
        style={{ margin: '10px 5px 5px 10px', boxShadow: '0 3px 6px rgba(0,0,0,0.3)' }}
      >
        <Row style={{ backgroundColor: '#002140', padding: 5, width: '100%' }}>
          <Title level={3} style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>
            Device Management
          </Title>
        </Row>
        <Row style={{ margin: '10px', justifyContent: 'space-between' }}>
          <Col>
            <Button style={{ marginRight: '4px' }}>Edit</Button>
            <Button style={{ marginRight: '4px' }}>Export</Button>
            <Button style={{ marginRight: '4px' }}>Export All</Button>
            <Button style={{ marginRight: '4px' }}>Enable</Button>
            <Button style={{ marginRight: '4px' }}>Disable</Button>
            <Button style={{ marginRight: '4px' }}>Enable All</Button>
            <Button style={{ marginRight: '4px' }}>Disable All</Button>
          </Col>
          <Col>
            <Input placeholder="Search Device" />
          </Col>
        </Row>
        <div>
          <DeviceTable />
        </div>
      </Col>
    </div>
  );
};

export default Device;
