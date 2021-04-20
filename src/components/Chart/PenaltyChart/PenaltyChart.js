import React from 'react';
import { Line, Column } from '@ant-design/charts';
const penaltyData = [
  {
    week: '11/03/2021 - 18/03/2021',
    penalty: 1,
    name: 'Speeding',
  },
  {
    week: '11/03/2021 - 18/03/2021',
    penalty: 4,
    name: 'Harsh Driving',
  },
  {
    week: '11/03/2021 - 18/03/2021',
    penalty: 6,
    name: 'Excessive Idling',
  },
  {
    week: '19/03/2021 - 25/03/2021',
    penalty: 2,
    name: 'Speeding',
  },
  {
    week: '19/03/2021 - 25/03/2021',
    penalty: 0,
    name: 'Harsh Driving',
  },
  {
    week: '19/03/2021 - 25/03/2021',
    penalty: 1,
    name: 'Excessive Idling',
  },
  {
    week: '26/03/2021 - 01/04/2021',
    penalty: 1,
    name: 'Speeding',
  },
  {
    week: '26/03/2021 - 01/04/2021',
    penalty: 3,
    name: 'Harsh Driving',
  },
  {
    week: '26/03/2021 - 01/04/2021',
    penalty: 4,
    name: 'Excessive Idling',
  },
  {
    week: '02/04/2021 - 09/04/2021',
    penalty: 2,
    name: 'Speeding',
  },
  {
    week: '02/04/2021 - 09/04/2021',
    penalty: 3,
    name: 'Harsh Driving',
  },
  {
    week: '02/04/2021 - 09/04/2021',
    penalty: 1,
    name: 'Excessive Idling',
  },
  {
    week: '10/04/2021 - 17/04/2021',
    penalty: 0,
    name: 'Speeding',
  },
  {
    week: '10/04/2021 - 17/04/2021',
    penalty: 0,
    name: 'Harsh Driving',
  },
  {
    week: '10/04/2021 - 17/04/2021',
    penalty: 0,
    name: 'Excessive Idling',
  },
];
const config = {
  data: penaltyData,
  xField: 'week',
  yField: 'penalty',
  seriesField: 'name',
  yAxis: {
    label: {
      formatter: function formatter(v) {
        return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function(s) {
          return ''.concat(s, ',');
        });
      },
    },
  },
  color: ['#1979C9', '#D62A0D', '#FAA219'],
};
const PenaltyChart = () => {
  return <Line {...config} />;
};

export default PenaltyChart;
