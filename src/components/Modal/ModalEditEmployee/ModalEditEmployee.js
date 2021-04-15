import React from 'react';
import { Input, Col, Row, Typography, Modal } from 'antd';

import {
  IdcardFilled,
  CarFilled,
  EnvironmentFilled,
  HomeFilled,
  PhoneFilled,
  MailFilled,
  LockFilled,
  ToolFilled,
  EditFilled,
} from '@ant-design/icons';
const { Title, Text } = Typography;
const ModalEditEmployee = props => {
  const { isModalVisible, handleOk, handleCancel } = props;
  return (
    <div>
      <Modal
        width="40%"
        title="Driver"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Title level={3}>Summary</Title>
            <Row style={{ marginBottom: '10px' }}>
              <Col span={3} style={{ alignSelf: 'center' }}>
                <EditFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
              </Col>
              <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                <Text type="secondary" style={{ marginBottom: '4px' }}>
                  Name
                </Text>
                <Input defaultValue="Raul" />
              </Col>
            </Row>
            <Row style={{ marginBottom: '10px' }}>
              <Col span={3} style={{ alignSelf: 'center' }}>
                <CarFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
              </Col>
              <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                <Text type="secondary" style={{ marginBottom: '4px' }}>
                  Vehicle
                </Text>
                <Input defaultValue="Truck" />
              </Col>
            </Row>
            <Row style={{ marginBottom: '10px' }}>
              <Col span={3} style={{ alignSelf: 'center' }}>
                <HomeFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
              </Col>
              <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                <Text type="secondary" style={{ marginBottom: '4px' }}>
                  Department
                </Text>
                <Input defaultValue="Service Department" />
              </Col>
            </Row>
            <Row style={{ marginBottom: '10px' }}>
              <Col span={3} style={{ alignSelf: 'center' }}>
                <IdcardFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
              </Col>
              <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                <Text type="secondary" style={{ marginBottom: '4px' }}>
                  Employer ID
                </Text>
                <Input defaultValue="43345" />
              </Col>
            </Row>
            <Row style={{ marginBottom: '10px' }}>
              <Col span={3} style={{ alignSelf: 'center' }}>
                <LockFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
              </Col>
              <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                <Text type="secondary" style={{ marginBottom: '4px' }}>
                  Hardware key
                </Text>
                <Input defaultValue="KFLDLKFDSF" />
              </Col>
            </Row>
            <Row style={{ marginBottom: '10px' }}>
              <Col span={3} style={{ alignSelf: 'center' }}>
                <ToolFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
              </Col>
              <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                <Text type="secondary" style={{ marginBottom: '4px' }}>
                  Driver license number
                </Text>
                <Input defaultValue="EU5903490TR" />
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Title level={3}>Contact Info</Title>
            <Row style={{ marginBottom: '10px' }}>
              <Col span={3} style={{ alignSelf: 'center' }}>
                <PhoneFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
              </Col>
              <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                <Text type="secondary" style={{ marginBottom: '4px' }}>
                  Phone number
                </Text>
                <Input defaultValue="099896556" />
              </Col>
            </Row>
            <Row style={{ marginBottom: '10px' }}>
              <Col span={3} style={{ alignSelf: 'center' }}>
                <MailFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
              </Col>
              <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                <Text type="secondary" style={{ marginBottom: '4px' }}>
                  Email
                </Text>
                <Input defaultValue="johnbrown@gmail.com" />
              </Col>
            </Row>
            <Row style={{ marginBottom: '10px' }}>
              <Col span={3} style={{ alignSelf: 'center' }}>
                <EnvironmentFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
              </Col>
              <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                <Text type="secondary" style={{ marginBottom: '4px' }}>
                  Address
                </Text>
                <Input defaultValue="50170 Kerpen, Germany" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default ModalEditEmployee;
