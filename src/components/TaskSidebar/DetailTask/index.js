import React from 'react';
import moment from 'moment';
import { Link } from 'umi';
import { Tabs, Row, Col } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

// styles
import styles from './index.less';

const { TabPane } = Tabs;

const DetailTask = ({ handleCloseDetail, taskDetail }) => {

  const { task, agent } = taskDetail;

  return (
    <div className={styles.container}>
      <div style={{ background: 'rgb(39, 169, 227)', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link style={{ color: '#fff', fontSize: 20, marginLeft: 5 }} to="">Task</Link>
        <CloseCircleOutlined 
          style={{ fontSize: 20, color: '#fff' }}
          onClick={handleCloseDetail}
        />
      </div>
      <Tabs tabBarGutter={20}>
        <TabPane tab={"Details"} key="1">
          <div style={{ margin: 10 }}>
            <Row className={styles.lineItem}>
              <Col span={10}><span>Status</span></Col>
              <Col span={14}><span>{task && task.status}</span></Col>
            </Row>
            <Row className={styles.lineItem}>
              <Col span={10}><span>Start Before</span></Col>
              <Col span={14}><span>{moment.unix(task && task.pickup.date.seconds).format("YYYY/MM/DD HH:mm")}</span></Col>
            </Row>
            <Row className={styles.lineItem}>
              <Col span={10}><span>OrderId</span></Col>
              <Col span={14}><span>{task && task.order_id}</span></Col>
            </Row>
            <Row className={styles.lineItem}>
              <Col span={10}><span>Agent</span></Col>
              <Col span={14}><span>{agent && agent.name}</span></Col>
            </Row>
          </div>
        </TabPane>
        <TabPane tab={"Customer"} key="2">
          <div style={{ margin: 10 }}>
            <Row className={styles.lineItem}>
              <Col span={10}><span>Name</span></Col>
              <Col span={14}><span>{task && task.pickup.customer.name}</span></Col>
            </Row>
            <Row className={styles.lineItem}>
              <Col span={10}><span>Contact</span></Col>
              <Col span={14}><span>{task && task.pickup.customer.phone}</span></Col>
            </Row>
            <Row className={styles.lineItem}>
              <Col span={10}><span>Address</span></Col>
              <Col span={14}><span>{task && task.pickup.address.name}</span></Col>
            </Row>
          </div>
        </TabPane>
        <TabPane tab={"History"} key="3">
          <p style={{ textAlign: "center" }}>Empty</p>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default DetailTask;
