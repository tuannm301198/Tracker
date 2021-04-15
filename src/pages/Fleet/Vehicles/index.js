import VehiclesTable from '@/components/Table/VehicleTable';
import { Col, Row, Typography, Avatar, Divider } from 'antd';
import { Badge } from 'antd';
import { useState } from 'react';
import styles from './index.less';
import { DisplayMap } from '@/components/NewMap';

const { Text } = Typography;
const Vehicles = () => {
  const [vehicleData, setVehicleData] = useState({});
  const { cargocapacity, event, fuel, label, model, regplate, tracker, type } = vehicleData;
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)' }}>
      <Col
        span={19}
        style={{ margin: '10px 5px 5px 10px', boxShadow: '0 3px 6px rgba(0,0,0,0.3)' }}
      >
        <div style={{ backgroundColor: '#002140', padding: 5, width: '100%' }}>
          <h2 style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>Vehicles Management</h2>
        </div>
        <div style={{ width: '100%' }}>
          <VehiclesTable setVehicleData={e => setVehicleData(e)} />
        </div>
      </Col>
      {vehicleData.key ? (
        <Col
          span={5}
          style={{
            margin: '10px 10px 5px 5px',
            padding: '30px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.3)',
          }}
        >
          <Row>
            <Col></Col>
          </Row>
          <Row style={{ marginBottom: '10px' }}>
            <Col span={4}>
              <Avatar
                size={64}
                src="data:image/jpeg;base64,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"
              />
            </Col>
            <Col span={16} style={{ marginLeft: '40px' }}>
              <Col className={styles.colInfo}>
                <Text type="secondary">Name</Text>
                <Text strong>{tracker}</Text>
              </Col>
              <Col className={styles.colInfo}>
                <Text type="secondary">Type</Text>
                <Text strong>{type}</Text>
              </Col>
              <Col className={styles.colInfo}>
                <Text type="secondary">Model</Text>
                <Text strong>{model}</Text>
              </Col>
              <Col className={styles.colInfo}>
                <Text type="secondary">Registration Plate</Text>
                <Text strong>{regplate}</Text>
              </Col>
              <Col className={styles.colInfo}>
                <Text type="secondary">Fuel</Text>
                <Text strong>{fuel}</Text>
              </Col>

              <Col style={{ display: 'flex', flexDirection: 'column' }}>
                <Text type="secondary">Cargo Capacity</Text>
                <Text strong>{cargocapacity}</Text>
              </Col>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={4}>
              <Avatar
                size={64}
                src="https://www.driveco.org/wp-content/uploads/2018/08/DriveCo_Blog.jpg"
              />
            </Col>
            <Col style={{ marginLeft: '40px' }}>
              <Col className={styles.colInfo}>
                <Text type="secondary">Driver</Text>
                <Text strong>Rahul Adenauer</Text>
              </Col>
              <Col className={styles.colInfo}>
                <Text type="secondary">Phone number</Text>
                <Text strong>+4 (157) 899 41 10</Text>
              </Col>
              <Col className={styles.colInfo}>
                <Text type="secondary">Department</Text>
                <Text strong>Delivery Department</Text>
              </Col>
              <Col className={styles.colInfo}>
                <Text type="secondary">Recent Event</Text>
                <Text strong>
                  Rahul Adenauer: task "Stall Shawarma - 49km MKAD" FAILED! 4 days ago
                </Text>
              </Col>
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

export default Vehicles;
