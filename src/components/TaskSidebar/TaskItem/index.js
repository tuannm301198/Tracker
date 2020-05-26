import React from 'react';
import moment from 'moment';
import { Avatar, Col, Row, Divider } from 'antd';

const TaskItem = ({ task }) => {

  return (
    <Row style={{ cursor: 'pointer', borderBottom: '1px solid #d9d9d9', padding: '5px 0 10px 0' }}>
      <Col span={3} offset={2} style={{ paddingTop: 3 }}>
        <Avatar shape="circle" style={{ backgroundColor: '#3f51b5' }}>
          U
        </Avatar>
        <span style={{ display: 'block' }}>binh</span>
      </Col>
      <Col span={1}>
        <Divider type="vertical" style={{ height: 50 }} />
      </Col>
      <Col span={18}>
        <span style={{ display: 'block', color: '#333', fontWeight: 'bold' }}>{moment(task.pickup.date.seconds).format("YYYY/MM/DD HH:mm")}</span>
        <span style={{ display: 'block', color: '#333', fontWeight: 'bold' }}>{task.pickup.customer.name}</span>
        <span>{task.pickup.address.name}</span>
      </Col>
    </Row>
  )
}

export default TaskItem;
