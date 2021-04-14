import { Col, Row, Typography, Divider } from 'antd';
import { useState } from 'react';
import EmployeeTable from '@/components/Table/EmployeeTable/';
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
const Drivers = () => {
  const [userData, setUserData] = useState([]);
  const { name, tracker, phone, dl, email, hardwarekey, id } = userData;

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)' }}>
      <Col
        span={19}
        style={{ margin: '10px 5px 5px 10px', boxShadow: '0 3px 6px rgba(0,0,0,0.3)' }}
      >
        <div style={{ backgroundColor: '#002140', padding: 5, width: '100%' }}>
          <h2 style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>Employee Management</h2>
        </div>
        <div>
          <EmployeeTable setUserData={e => setUserData(e)} />
        </div>
      </Col>
      {userData.key ? (
        <Col
          span={5}
          style={{
            margin: '10px 10px 5px 5px',
            padding: '30px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.3)',
          }}
        >
          <Title level={3}>Summary</Title>
          <Row style={{ marginBottom: '10px' }}>
            <Col span={4} style={{ alignSelf: 'center' }}>
              <EditFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'column' }}>
              <Text type="secondary">Name</Text>
              <Text>{name}</Text>
            </Col>
          </Row>
          <Row style={{ marginBottom: '10px' }}>
            <Col span={4} style={{ alignSelf: 'center' }}>
              <CarFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'column' }}>
              <Text type="secondary">Vehicle</Text>
              <Text>{tracker}</Text>
            </Col>
          </Row>
          <Row style={{ marginBottom: '10px' }}>
            <Col span={4} style={{ alignSelf: 'center' }}>
              <HomeFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'column' }}>
              <Text type="secondary">Department</Text>
              <Text>Service Department</Text>
            </Col>
          </Row>
          <Row style={{ marginBottom: '10px' }}>
            <Col span={4} style={{ alignSelf: 'center' }}>
              <IdcardFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'column' }}>
              <Text type="secondary">Employer ID</Text>
              <Text>{id}</Text>
            </Col>
          </Row>
          <Row style={{ marginBottom: '10px' }}>
            <Col span={4} style={{ alignSelf: 'center' }}>
              <LockFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'column' }}>
              <Text type="secondary">Hardware key</Text>
              <Text>{hardwarekey}</Text>
            </Col>
          </Row>
          <Row style={{ marginBottom: '10px' }}>
            <Col span={4} style={{ alignSelf: 'center' }}>
              <ToolFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'column' }}>
              <Text type="secondary">Driver license number</Text>
              <Text>{dl}</Text>
            </Col>
          </Row>
          <Divider />
          <Title level={3}>Contact Info</Title>
          <Row style={{ marginBottom: '10px' }}>
            <Col span={4} style={{ alignSelf: 'center' }}>
              <PhoneFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'column' }}>
              <Text type="secondary">Phone number</Text>
              <Text>{phone}</Text>
            </Col>
          </Row>
          <Row style={{ marginBottom: '10px' }}>
            <Col span={4} style={{ alignSelf: 'center' }}>
              <MailFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'column' }}>
              <Text type="secondary">Email</Text>
              <Text>{email}</Text>
            </Col>
          </Row>
          <Divider />
          <Title level={3}>Location</Title>
          <Row style={{ marginBottom: '10px' }}>
            <Col span={4} style={{ alignSelf: 'center' }}>
              <EnvironmentFilled style={{ color: '#B8B8B8', fontSize: 24 }} />
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'column' }}>
              <Text type="secondary">Address</Text>
              <Text>50170 Kerpen, Germany</Text>
            </Col>
          </Row>
        </Col>
      ) : (
        <Col span={5} style={{ padding: '30px' }}>
          <Text>Select an entry from the list</Text>
        </Col>
      )}
    </div>
  );
};

export default Drivers;
