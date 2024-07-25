// app/dashboard/page.tsx
'use client';

import React from 'react';
import LineChartWidget from '../../components/ChartWidget';
import BarChartWidget from '../../components/BarChartWidget';
import TableWidget from '../../components/TableWidget';
import styles from '../../styles/Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Dashboard</h1>
      <div className={styles.widgets}>
        <div className="widget">
          <h2 className="text-xl font-bold mb-4">Line Chart</h2>
          <LineChartWidget />
        </div>
        <div className="widget">
          <h2 className="text-xl font-bold mb-4">Bar Chart</h2>
          <BarChartWidget />
        </div>
        <div className="widget">
          <TableWidget />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
