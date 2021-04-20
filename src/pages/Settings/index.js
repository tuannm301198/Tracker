import React from 'react';
import { Table, Typography, Select, Input, Button, Row, Col } from 'antd';
import { driverColumns, driverData } from '../EcoDriving/index';
const { Option } = Select;
const { Text, Title } = Typography;
const Settings = () => {
  return (
    <div style={{ padding: '16px 32px', width: '100%', height: 'auto', background: '#F1F1F1' }}>
      <Row>
        <Col
          span={4}
          style={{
            backgroundColor: '#fff',
            marginRight: '32px',
            boxShadow: '0 3px 6px rgba(0, 0, 0, .3)',
          }}
        >
          <Row style={{ backgroundColor: '#002140', padding: 5, width: '100%' }}>
            <Title level={3} style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>
              Driver
            </Title>
          </Row>
          <Row>
            <Input bordered={false} placeholder="Quick search" style={{ marginBottom: '8px' }} />
          </Row>
          <Table pagination={false} dataSource={driverData} columns={driverColumns} rowSelection />
        </Col>

        <Col span={19}>
          <Row>
            <Col
              style={{
                backgroundColor: '#fff',
                maxWidth: '300px',
                marginRight: '16px',
                boxShadow: '0 3px 6px rgba(0, 0, 0, .3)',
              }}
            >
              <Row style={{ backgroundColor: '#002140', padding: 5, width: '100%' }}>
                <Title level={3} style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>
                  Object label
                </Title>
              </Row>
              <Col style={{ padding: '10px', height: '200px' }}>
                <Input defaultValue="Rahul (Kamaz)" style={{ marginBottom: '16px' }} />
                <Text type="secondary">
                  Object label is a name you label your object with in order to distinct it from
                  others, in case you have numerous objects. This object is a "clone", you can
                  remove it
                </Text>
              </Col>
              <Row style={{ justifyContent: 'flex-end', padding: '10px' }}>
                <Button type="primary"> Save</Button>
              </Row>
            </Col>
            <Col
              style={{
                backgroundColor: '#fff',
                maxWidth: '300px',
                marginRight: '16px',
                boxShadow: '0 3px 6px rgba(0, 0, 0, .3)',
              }}
            >
              <Row style={{ backgroundColor: '#002140', padding: 5, width: '100%' }}>
                <Title level={3} style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>
                  Group
                </Title>
              </Row>
              <Col style={{ padding: '10px', height: '200px' }}>
                <Select defaultValue="1" style={{ width: '100%', marginBottom: '16px' }}>
                  <Option value="1">Delivery Department</Option>
                  <Option value="2">Sales Department</Option>
                  <Option value="3">Service Department</Option>
                </Select>
                <Text type="secondary">
                  If you track numerous objects, you can divide them into different groups for your
                  convenience.
                </Text>
              </Col>
              <Row style={{ justifyContent: 'flex-end', padding: '10px' }}>
                <Button type="primary"> Save</Button>
              </Row>
            </Col>
            <Col
              style={{
                backgroundColor: '#fff',
                maxWidth: '300px',
                marginRight: '16px',
                boxShadow: '0 3px 6px rgba(0, 0, 0, .3)',
              }}
            >
              <Row style={{ backgroundColor: '#002140', padding: 5, width: '100%' }}>
                <Title level={3} style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>
                  Phone number
                </Title>
              </Row>
              <Col style={{ padding: '10px', height: '200px' }}>
                <Text>New SIM number:</Text>
                <Input style={{ margin: '8px 0 16px 0' }} />
                <Text type="secondary">
                  Use these settings only in case of changing the SIM card installed in the device.
                </Text>
              </Col>
              <Row style={{ justifyContent: 'flex-end', padding: '10px' }}>
                <Button type="primary"> Save</Button>
              </Row>
            </Col>
            <Col
              style={{
                backgroundColor: '#fff',
                maxWidth: '300px',
                boxShadow: '0 3px 6px rgba(0, 0, 0, .3)',
              }}
            >
              <Row style={{ backgroundColor: '#002140', padding: 5, width: '100%' }}>
                <Title level={3} style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>
                  Device timezone
                </Title>
              </Row>
              <Col style={{ padding: '10px', height: '200px' }}>
                <Select defaultValue="1" style={{ width: '100%', marginBottom: '16px' }}>
                  <Option>UTC-7</Option>
                  <Option>UTC-6</Option>
                  <Option>UTC-5</Option>
                  <Option>UTC-4</Option>
                  <Option>UTC-3</Option>
                  <Option>UTC-2</Option>
                  <Option>UTC-1</Option>
                  <Option value="1">UTC+0</Option>
                  <Option>UTC+1</Option>
                  <Option>UTC+2</Option>
                  <Option>UTC+3</Option>
                  <Option>UTC+4</Option>
                  <Option>UTC+5</Option>
                  <Option>UTC+6</Option>
                  <Option>UTC+7</Option>
                  <Option>UTC+8</Option>
                </Select>
                <Text type="secondary">
                  Important: in case you set the wrong Time Zone, you won't be able to monitor the
                  device on the platform.
                </Text>
              </Col>
              <Row style={{ justifyContent: 'flex-end', padding: '10px' }}>
                <Button type="primary"> Save</Button>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: '16px' }}>
            <Col
              style={{
                backgroundColor: '#fff',
                maxWidth: '300px',
                marginRight: '16px',
                boxShadow: '0 3px 6px rgba(0, 0, 0, .3)',
              }}
            >
              <Row style={{ backgroundColor: '#002140', padding: 5, width: '100%' }}>
                <Title level={3} style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>
                  Odometer
                </Title>
              </Row>
              <Col style={{ padding: '10px', height: '200px' }}>
                <Row>
                  <Text strong>Source:</Text>
                </Row>
                <Text>Choose a data source</Text>
                <Select style={{ margin: '8px 0 16px 0', width: '100%' }} defaultValue="GPS">
                  <Option>GPS</Option>
                  <Option>UPS</Option>
                </Select>
                <Row>
                  <Text strong>Value:</Text>
                </Row>
                <Text type="secondary">Set odometer value.</Text>
                <Input suffix="km" defaultValue={2072} style={{ marginTop: '8px' }} />
              </Col>
              <Row style={{ justifyContent: 'flex-end', padding: '10px' }}>
                <Button type="primary"> Save</Button>
              </Row>
            </Col>
            <Col
              style={{
                backgroundColor: '#fff',
                maxWidth: '300px',
                marginRight: '16px',
                boxShadow: '0 3px 6px rgba(0, 0, 0, .3)',
              }}
            >
              <Row style={{ backgroundColor: '#002140', padding: 5, width: '100%' }}>
                <Title level={3} style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>
                  Engine hours
                </Title>
              </Row>
              <Col style={{ padding: '10px', height: '200px' }}>
                <Row>
                  <Text strong>Source:</Text>
                </Row>
                <Text>Choose a data source</Text>
                <Select style={{ margin: '8px 0 16px 0', width: '100%' }} defaultValue="GPS">
                  <Option>GPS</Option>
                  <Option>UPS</Option>
                </Select>
                <Row>
                  <Text strong>Value:</Text>
                </Row>
                <Text type="secondary">Set the engine hour meter value.</Text>
                <Input suffix="hours" defaultValue={67} style={{ marginTop: '8px' }} />
              </Col>
              <Row style={{ justifyContent: 'flex-end', padding: '10px' }}>
                <Button type="primary"> Save</Button>
              </Row>
            </Col>
            <Col
              style={{
                backgroundColor: '#fff',
                maxWidth: '300px',
                marginRight: '16px',
                boxShadow: '0 3px 6px rgba(0, 0, 0, .3)',
              }}
            >
              <Row style={{ backgroundColor: '#002140', padding: 5, width: '100%' }}>
                <Title level={3} style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>
                  Tracking mode
                </Title>
              </Row>
              <Col style={{ padding: '10px', height: '200px' }}>
                <Row style={{ marginBottom: '4px' }}>
                  <Text strong>Update GPS location:</Text>
                </Row>
                <Row style={{ justifyContent: 'space-between' }}>
                  <Text style={{ alignSelf: 'center' }}>Every: </Text>
                  <Input suffix="km" defaultValue={100} style={{ width: '70%' }} />
                </Row>
                <Row style={{ justifyContent: 'space-between', marginTop: '8px' }}>
                  <Text style={{ alignSelf: 'center' }}>or every: </Text>
                  <Input suffix="seconds" defaultValue={300} style={{ width: '70%' }} />
                </Row>
              </Col>
              <Row style={{ justifyContent: 'flex-end', padding: '10px' }}>
                <Button type="primary"> Save</Button>
              </Row>
            </Col>
            <Col
              style={{
                backgroundColor: '#fff',
                maxWidth: '300px',
                marginRight: '16px',
                boxShadow: '0 3px 6px rgba(0, 0, 0, .3)',
              }}
            >
              <Row style={{ backgroundColor: '#002140', padding: 5, width: '100%' }}>
                <Title level={3} style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>
                  Parking detection
                </Title>
              </Row>
              <Col style={{ padding: '10px', height: '200px' }}>
                <Text>Min idle detection: </Text>
                <Input suffix="minutes" defaultValue={10} style={{ marginTop: '4px' }} />
                <Text>or every: </Text>
                <Input suffix="km / h" defaultValue={5} style={{ marginTop: '4px' }} />
              </Col>
              <Row style={{ justifyContent: 'flex-end', padding: '10px' }}>
                <Button type="primary"> Save</Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;
