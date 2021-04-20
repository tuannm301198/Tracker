import React, { useState } from 'react';
import {
  Layout,
  Tabs,
  Modal,
  Select,
  Row,
  Input,
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
const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
const ModalOperatorCreateTask = props => {
  const { className, classNameSider, isModalVisible, handleOk, handleCancel } = props;
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
            <Input placeholder="Task name" style={{ marginBottom: '16px' }} />

            <TextArea placeholder="Description" rows={4} style={{ marginBottom: '16px' }} />
            <DatePicker
              showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
              style={{ width: '100%', marginBottom: '16px' }}
              defaultValue={moment('2021-04-12', 'YYYY-MM-DD')}
            />
            <Row style={{ marginBottom: '16px', justifyContent: 'space-between' }}>
              <Col style={{ alignSelf: 'center' }}>
                <Text strong>Radius:</Text>
              </Col>
              <Col style={{ alignSelf: 'center' }}>
                <Button type="link">50m</Button>
                <Button type="link">100m</Button>
                <Button type="link">200m</Button>
                <Button type="link">500m</Button>
              </Col>
            </Row>
            <Row style={{ justifyContent: 'space-between', marginBottom: '32px' }}>
              <Text>or enter value:</Text>
              <Input style={{ width: '60%' }} type="number" suffix="m" />
            </Row>

            <Select defaultValue="Unassigned" style={{ width: '100%', marginBottom: '16px' }}>
              <Option>Paul</Option>
              <Option>Anonymous</Option>
              <Option>Raoul</Option>
            </Select>
            <Select defaultValue="No task" style={{ width: '100%', marginBottom: '16px' }}>
              <Option>Pizza delivery</Option>
              <Option>Water delivery</Option>
              <Option>Cargo delivery</Option>
            </Select>

            <Row style={{ justifyContent: 'space-between' }}>
              <Button type="primary">Save</Button>
              <Button>Cancel</Button>
            </Row>
          </Sider>
          <Layout>
            <Content>
              <DisplayMap height="770px" />
            </Content>
          </Layout>
        </Layout>
      </Modal>
    </div>
  );
};

export default ModalOperatorCreateTask;
