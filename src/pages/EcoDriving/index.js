import React from 'react';
import {
  Col,
  Row,
  Table,
  Typography,
  DatePicker,
  Tabs,
  Button,
  Slider,
  Divider,
  Select,
  Badge,
  Rate,
} from 'antd';
import { Line, Column } from '@ant-design/charts';
import PenaltyChart from '../../components/Chart/PenaltyChart/PenaltyChart';
import SummaryTable from '../../components/Table/SummaryTable/SummaryTable';
const { TabPane } = Tabs;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Text, Title } = Typography;

export const columns = [
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: 'Rating',
    key: 'value',
    render: text => <Rate defaultValue={text.value} disabled />,
  },
  {
    title: 'Classification',
    key: 'class',
    render: record => (
      <>
        <Badge dot color={record.color} status={record.status}></Badge>
        <span>{record.class}</span>
      </>
    ),
  },
];
const data = [
  {
    score: '80-100%',
    value: 5,
    status: 'success',
    class: 'Excellent',
  },
  {
    score: '60-80%',
    value: 4,
    color: 'lime',
    class: 'Good',
  },
  {
    score: '40-60%',
    value: 3,
    color: 'yellow',
    class: 'Average',
  },
  {
    score: '20-40%',
    value: 2,
    status: 'warning',

    class: 'Risky',
  },
  {
    score: '0-20%',
    value: 1,
    status: 'error',

    class: 'Extremely risky',
  },
];
export const driverColumns = [
  {
    title: 'Driver',
    dataIndex: 'name',
    key: 'name',
  },
];
export const driverData = [
  {
    name: 'Paul Adrenal',
  },
  {
    name: 'Michael Wattson',
  },
  {
    name: 'Limba Raul',
  },
  {
    name: 'Andre Walker',
  },
];

const EcoDriving = () => {
  const [selectionType, setSelectionType] = React.useState('checkbox');
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div>
      <Row style={{ backgroundColor: '#002140', padding: 5, width: '100%' }}>
        <Title level={3} style={{ color: '#fff', margin: '0px 0px 0px 10px' }}>
          Account
        </Title>
      </Row>
      <Row gutter={32}>
        <Col span={6}>
          <Tabs style={{ marginLeft: '16px' }}>
            <TabPane tab="Report" key="3" style={{ padding: '0 16px' }}>
              <Row style={{ flexDirection: 'column', marginBottom: '16px' }}>
                <Text style={{ marginBottom: '8px' }}>Date range:</Text>
                <RangePicker />
              </Row>
              <Row style={{ justifyContent: 'space-between', marginBottom: '16px' }}>
                <Button>Mo</Button>
                <Button>Tu</Button>
                <Button>We</Button>
                <Button>Th</Button>
                <Button>Fr</Button>
                <Button>Sa</Button>
                <Button>Su</Button>
              </Row>
              <Row style={{ flexDirection: 'column', marginBottom: '16px' }}>
                <Text>Control time: from 00:00 to 23:59</Text>
                <Slider range={true} defaultValue={[0, 2359]} />
              </Row>
              <Button type="primary" style={{ width: '100%', marginBottom: '16px' }}>
                Penalty settings
              </Button>
              <Select defaultValue="By drivers" style={{ marginBottom: '16px' }}>
                <Option>By drivers</Option>
                <Option>By options</Option>
              </Select>
              <Table
                rowSelection={{
                  type: selectionType,
                  ...rowSelection,
                }}
                pagination={false}
                dataSource={driverData}
                columns={driverColumns}
                rowSelection
              />
            </TabPane>
          </Tabs>
        </Col>
        <Col span={18}>
          <Tabs>
            <TabPane tab="Summary" key="1" style={{ padding: '20px 40px' }}>
              <Title level={3}>How careful are your drivers?</Title>
              <Text>
                The system calculates the rating of driving behavior for each driver from 0 to 100%.
                Rating is based on penalty points received by drivers for each type of violation
                taking into account its frequency per every 100 kms.
              </Text>
              <Row gutter={32} style={{ justifyContent: 'space-between' }}>
                <Col
                  span={7}
                  style={{
                    backgroundColor: '#EFEFEF',
                    padding: '16px',
                    margin: '16px',
                  }}
                >
                  <Title level={4} style={{ color: '#049cdb' }}>
                    Speeding penalty points
                  </Title>
                  <Text>
                    The system registers speed violations according to the speed values you define
                    in Vehicles Management records. While calculating penalty points the system
                    registers overspeed value as well as its duration. The bigger overspeed value
                    and its duration is the more penalty points will be reported.
                  </Text>
                </Col>
                <Col
                  span={7}
                  style={{
                    backgroundColor: '#EFEFEF',
                    padding: '16px',
                    margin: '16px',
                  }}
                >
                  <Title level={4} style={{ color: '#049cdb' }}>
                    Harsh Driving
                  </Title>
                  <Text>
                    If you use GPS tacking devices equipped with acceleration sensors the system may
                    register harsh brakings, cornerings and accelerations. Threshold values of each
                    parameter should be set for each device in the Device Settings application of
                    the web interface. The list of your devices equipped with acceleration sensor
                    (eco driving sensor).{' '}
                  </Text>
                </Col>
                <Col
                  span={7}
                  style={{
                    backgroundColor: '#EFEFEF',
                    padding: '16px',
                    margin: '16px',
                  }}
                >
                  <Title level={4} style={{ color: '#049cdb' }}>
                    Excessive Idling
                  </Title>
                  <Text>
                    If you use GPS tacking devices equipped with acceleration sensors the system may
                    register harsh brakings, cornerings and accelerations. Threshold values of each
                    parameter should be set for each device in the Device Settings application of
                    the web interface. The list of your devices equipped with acceleration sensor
                    (eco driving sensor).
                  </Text>
                </Col>
              </Row>
              <Divider />
              <Title level={3}>Driving score</Title>
              <Text>
                The more penalty points a driver gets, the lower the ranking will be. The ranking
                depends on the severity, duration and frequency of violations (the number of
                violations for particular distance).
              </Text>
              <Table
                dataSource={data}
                pagination={false}
                columns={columns}
                style={{ marginTop: '16px' }}
              />
            </TabPane>
            <TabPane tab="Paul" key="2">
              <Title level={3}>Total penalty</Title>
              <PenaltyChart />
              <Title style={{ marginTop: '16px' }} level={3}>
                Summary
              </Title>
              <SummaryTable />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default EcoDriving;
