import React from 'react';
import { Avatar, Col, Row, Badge } from 'antd';

const AgentItem = ({ item }) => (
  <Row style={{ cursor: 'pointer', borderBottom: '1px solid #d9d9d9', padding: '5px 0 10px 0' }}>
    <Col span={5} offset={1}>
      <Badge dot offset={[-5, 30]} status="success">
        <Avatar shape="circle" style={{ backgroundColor: '#3f51b5' }}>
          <img src={item.avatar} alt={`img-${item.name}`} style={{ width: 33 }}/>
        </Avatar>
      </Badge>
    </Col>
    <Col span={12}>
      <span style={{ display: 'block', color: '#333', fontWeight: 'bold' }}>{item.name}</span>
      <span>{item.phone}</span>
    </Col>
    <Col span={6}>
      <Badge
        count={4}
        style={{ backgroundColor: '#fff', color: 'rgb(39, 169, 227)', boxShadow: '0 0 0 1px #d9d9d9 inset' }}
      />
      <span style={{ display: 'block' }}>Task</span>
    </Col>
  </Row>
)

export default AgentItem;
