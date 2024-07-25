'use client';

import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const LineChartWidget = () => {
  const [lineChartData, setLineChartData] = useState([]);

  useEffect(() => {
    const fetchLineChartData = async () => {
      try {
        const response = await axios.get('https://66a1d2a1967c89168f1db1e4.mockapi.io/home/lineChartData');
        setLineChartData(response.data);
      } catch (error) {
        console.error('Error fetching line chart data:', error);
      }
    };

    fetchLineChartData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={lineChartData}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartWidget;
