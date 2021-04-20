import React from 'react';
import { Column } from '@ant-design/charts';
import { Typography, Row, Col, DatePicker } from 'antd';
import ReportConfigChart from '../../components/Chart/ReportConfigChart/ReportConfigChart';
import ReportMileChart from '../../components/Chart/ReportMileChart/ReportMileChart';
const { Text, Title } = Typography;
const { RangePicker } = DatePicker;
const Reports = props => {
  return (
    <div style={{ margin: '16px' }}>
      <Col>
        <Title level={3}>Mileague (km)</Title>
        <Row style={{ justifyContent: 'space-between' }}>
          <RangePicker />
          <Text>13/04/2021 - 20/04/2021</Text>
        </Row>
      </Col>
      <ReportMileChart />
      <Col style={{ marginTop: '16px' }}>
        <Title level={3}>Task Completed</Title>
        <Row style={{ justifyContent: 'space-between', marginBottom: '16px' }}>
          <RangePicker />
          <Text>13/04/2021 - 20/04/2021</Text>
        </Row>
      </Col>
      <ReportConfigChart />
    </div>
  );
};
export default Reports;
