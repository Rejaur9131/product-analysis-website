import React from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from './../MyLineChart/MyLineChart';

const Dashboard = () => {
  return (
    <div className="flex justify-around">
      <MyLineChart></MyLineChart>
      <MyBarChart></MyBarChart>
    </div>
  );
};

export default Dashboard;
