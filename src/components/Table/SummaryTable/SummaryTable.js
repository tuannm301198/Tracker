import React from 'react';
import { Table, Rate } from 'antd';
const summaryColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Rating',
    render: record => <Rate disabled defaultValue={record.rating} />,
  },
  {
    title: 'Mileage, km',
    dataIndex: 'miles',
    key: 'miles',
  },
  {
    title: 'Penalty number',
    dataIndex: 'penaltyNum',
    key: 'penaltyNum',
  },
  {
    title: 'Average penalty',
    dataIndex: 'avgPenalty',
    key: 'avgPenalty',
  },
];
const summaryData = [
  {
    name: 'Paul Adrenal',
    miles: 42,
    rating: 3,
    avgPenalty: 0,
    penaltyNum: 0,
  },
];
const SummaryTable = () => {
  return <Table dataSource={summaryData} columns={summaryColumns} />;
};

export default SummaryTable;
