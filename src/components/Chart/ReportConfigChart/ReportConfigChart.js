import React from 'react';
import { Column } from '@ant-design/charts';
import { Typography, Row, Col, DatePicker } from 'antd';
const { Text, Title } = Typography;
const { RangePicker } = DatePicker;
const dataTask = [
  {
    date: '13/04/2021',
    name: 'Task Failed',
    value: 10,
  },
  {
    date: '13/04/2021',
    name: 'Task In Progress',
    value: 20,
  },
  {
    date: '13/04/2021',
    name: 'Task Completed',
    value: 50,
  },
  {
    date: '14/04/2021',
    name: 'Task Failed',
    value: 1,
  },
  {
    date: '14/04/2021',
    name: 'Task In Progress',
    value: 35,
  },
  {
    date: '14/04/2021',
    name: 'Task Completed',
    value: 90,
  },
  {
    date: '15/04/2021',
    name: 'Task Failed',
    value: 0,
  },
  {
    date: '15/04/2021',
    name: 'Task In Progress',
    value: 3,
  },
  {
    date: '15/04/2021',
    name: 'Task Completed',
    value: 82,
  },
  {
    date: '16/04/2021',
    name: 'Task Failed',
    value: 5,
  },
  {
    date: '16/04/2021',
    name: 'Task In Progress',
    value: 9,
  },
  {
    date: '16/04/2021',
    name: 'Task Completed',
    value: 83,
  },
  {
    date: '17/04/2021',
    name: 'Task Failed',
    value: 0,
  },
  {
    date: '17/04/2021',
    name: 'Task In Progress',
    value: 9,
  },
  {
    date: '17/04/2021',
    name: 'Task Completed',
    value: 73,
  },
  {
    date: '18/04/2021',
    name: 'Task Failed',
    value: 6,
  },
  {
    date: '18/04/2021',
    name: 'Task In Progress',
    value: 31,
  },
  {
    date: '18/04/2021',
    name: 'Task Completed',
    value: 53,
  },
  {
    date: '19/04/2021',
    name: 'Task Failed',
    value: 14,
  },
  {
    date: '19/04/2021',
    name: 'Task In Progress',
    value: 3,
  },
  {
    date: '19/04/2021',
    name: 'Task Completed',
    value: 81,
  },
  {
    date: '20/04/2021',
    name: 'Task Failed',
    value: 9,
  },
  {
    date: '20/04/2021',
    name: 'Task In Progress',
    value: 4,
  },
  {
    date: '20/04/2021',
    name: 'Task Completed',
    value: 82,
  },
];
const configTask = {
  data: dataTask,
  height: 350,
  isStack: true,
  xField: 'date',
  yField: 'value',
  seriesField: 'name',
  label: {
    position: 'middle',
    layout: [
      { type: 'interval-adjust-position' },
      { type: 'interval-hide-overlap' },
      { type: 'adjust-color' },
    ],
  },
};
const ReportConfigChart = () => {
  return <Column {...configTask} />;
};

export default ReportConfigChart;
