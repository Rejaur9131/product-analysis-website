import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const MyBarChart = () => {
  const data = [
    {
      month: 'Mar',
      investment: 100000,
      sell: 241,
      revenue: 10401
    },
    {
      month: 'Apr',
      investment: 200000,
      sell: 423,
      revenue: 24500
    },
    {
      month: 'May',
      investment: 500000,
      sell: 726,
      revenue: 67010
    },
    {
      month: 'Jun',
      investment: 500000,
      sell: 529,
      revenue: 40405
    },
    {
      month: 'Jul',
      investment: 600000,
      sell: 601,
      revenue: 50900
    },
    {
      month: 'Aug',
      investment: 700000,
      sell: 670,
      revenue: 61000
    }
  ];
  return (
    <BarChart width={400} height={400} data={data}>
      <h2>Bar Chart Showing Sell by Month</h2>
      <Bar dataKey="sell" fill="#8884d8" />
      <XAxis dataKey="month"></XAxis>
      <Tooltip />
      <YAxis></YAxis>
    </BarChart>
  );
};
export default MyBarChart;
