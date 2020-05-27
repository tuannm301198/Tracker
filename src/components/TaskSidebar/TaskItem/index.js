import React from 'react';
import moment from 'moment';
import { Avatar, Col, Row, Divider } from 'antd';

// styles
import styles from './index.less';

const TaskItem = ({ task, handleShowDetail }) => {

  return (
    <React.Fragment>
      <Row style={{ cursor: 'pointer', borderBottom: '1px solid #d9d9d9', padding: '5px 0 10px 0' }} onClick={handleShowDetail}>
        <Col span={4} offset={1} style={{ paddingTop: 3 }}>
          <Avatar shape="circle" style={{ backgroundColor: '#3f51b5' }}>
            U
          </Avatar>
          <span style={{ display: 'block' }}>{task.pickup.customer.name}</span>
        </Col>
        <Col span={2} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <span className={styles.pickupIcon}>P</span>
          <Divider type="vertical" style={{ height: 50 }} />
          <span className={styles.deliveryIcon}>D</span>
        </Col>
        <Col span={17}>
          <span style={{ display: 'block', color: '#333', fontWeight: 'bold' }}>{moment.unix(task.pickup.date.seconds).format("YYYY/MM/DD HH:mm")}</span>
          <span style={{ display: 'block', color: '#333', fontWeight: 'bold' }}>{task.pickup.customer.name}</span>
          <span>{task.pickup.address.name}</span>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default TaskItem;
