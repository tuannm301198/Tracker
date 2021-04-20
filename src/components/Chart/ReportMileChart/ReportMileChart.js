import React from 'react';
import { Column } from '@ant-design/charts';
import { Typography, Row, Col, DatePicker } from 'antd';

const ReportMileChart = () => {
  const data = [
    {
      name: 'Paul',
      date: '13/04/2021',
      mile: 150,
    },
    {
      name: 'Raoul',
      date: '13/04/2021',
      mile: 250,
    },
    {
      name: 'Linken',
      date: '13/04/2021',
      mile: 1900,
    },
    {
      name: 'Paul',
      date: '14/04/2021',
      mile: 400,
    },
    {
      name: 'Raoul',
      date: '14/04/2021',
      mile: 304,
    },
    {
      name: 'Linken',
      date: '14/04/2021',
      mile: 170,
    },
    {
      name: 'Paul',
      date: '15/04/2021',
      mile: 1400,
    },
    {
      name: 'Raoul',
      date: '15/04/2021',
      mile: 3034,
    },
    {
      name: 'Linken',
      date: '15/04/2021',
      mile: 740,
    },
    {
      name: 'Paul',
      date: '16/04/2021',
      mile: 560,
    },
    {
      name: 'Raoul',
      date: '16/04/2021',
      mile: 340,
    },
    {
      name: 'Linken',
      date: '16/04/2021',
      mile: 1704,
    },
    {
      name: 'Paul',
      date: '17/04/2021',
      mile: 491,
    },
    {
      name: 'Raoul',
      date: '17/04/2021',
      mile: 623,
    },
    {
      name: 'Linken',
      date: '17/04/2021',
      mile: 902,
    },
    {
      name: 'Paul',
      date: '18/04/2021',
      mile: 921,
    },
    {
      name: 'Raoul',
      date: '18/04/2021',
      mile: 630,
    },
    {
      name: 'Linken',
      date: '18/04/2021',
      mile: 3021,
    },
    {
      name: 'Paul',
      date: '19/04/2021',
      mile: 510,
    },
    {
      name: 'Raoul',
      date: '19/04/2021',
      mile: 692,
    },
    {
      name: 'Linken',
      date: '19/04/2021',
      mile: 902,
    },
    {
      name: 'Paul',
      date: '20/04/2021',
      mile: 56,
    },
    {
      name: 'Raoul',
      date: '20/04/2021',
      mile: 251,
    },
    {
      name: 'Linken',
      date: '20/04/2021',
      mile: 677,
    },
  ];

  const config = {
    data,
    height: 350,
    isGroup: true,
    xField: 'date',
    yField: 'mile',
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
  return <Column {...config} />;
};

export default ReportMileChart;
