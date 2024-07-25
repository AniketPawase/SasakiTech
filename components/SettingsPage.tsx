"use client";

import React, { useState } from 'react';
import styles from '../styles/SettingsPage.module.css';

// Define TypeScript interface for SETTINGS
export interface Settings {
  dateRange: { startDate: string; endDate: string };
  filters: { name: string; valueRange: [number, number] };
  chartType: 'line' | 'bar';
  showAvatars: boolean;
  colorScheme: 'light' | 'dark';
}

interface SettingsPageProps {
  onSaveSettings: (settings: Settings) => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ onSaveSettings }) => {
  const [dateRange, setDateRange] = useState<{ startDate: string; endDate: string }>({ startDate: '', endDate: '' });
  const [filters, setFilters] = useState<{ name: string; valueRange: [number, number] }>({ name: '', valueRange: [0, 1000] });
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');
  const [showAvatars, setShowAvatars] = useState<boolean>(true);
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

  const handleSave = () => {
    const settings: Settings = {
      dateRange,
      filters,
      chartType,
      showAvatars,
      colorScheme
    };
    onSaveSettings(settings);
  };

  return (
    <div className={styles['settings-page']}>
      <h2>Settings</h2>
      
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          id="startDate"
          type="date"
          value={dateRange.startDate}
          onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
          placeholder="Select start date"
        />
      </div>
      
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          id="endDate"
          type="date"
          value={dateRange.endDate}
          onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
          placeholder="Select end date"
        />
      </div>
      
      <div>
        <label htmlFor="filterName">Filter Name:</label>
        <input
          id="filterName"
          type="text"
          placeholder="Enter filter name"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
      </div>
      
      <div>
        <label htmlFor="minValue">Min Value:</label>
        <input
          id="minValue"
          type="number"
          placeholder="Enter minimum value"
          value={filters.valueRange[0]}
          onChange={(e) => setFilters({ ...filters, valueRange: [Number(e.target.value), filters.valueRange[1]] })}
        />
      </div>
      
      <div>
        <label htmlFor="maxValue">Max Value:</label>
        <input
          id="maxValue"
          type="number"
          placeholder="Enter maximum value"
          value={filters.valueRange[1]}
          onChange={(e) => setFilters({ ...filters, valueRange: [filters.valueRange[0], Number(e.target.value)] })}
        />
      </div>
      
      <div>
        <label htmlFor="chartType">Chart Type:</label>
        <select
          id="chartType"
          value={chartType}
          onChange={(e) => setChartType(e.target.value as 'line' | 'bar')}
          title="Select the chart type"
        >
          <option value="line">Line Chart</option>
          <option value="bar">Bar Chart</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="showAvatars">Show Avatars:</label>
        <input
          id="showAvatars"
          type="checkbox"
          checked={showAvatars}
          onChange={() => setShowAvatars(!showAvatars)}
          title="Toggle avatar visibility"
        />
      </div>
      
      <div>
        <label htmlFor="colorScheme">Color Scheme:</label>
        <select
          id="colorScheme"
          value={colorScheme}
          onChange={(e) => setColorScheme(e.target.value as 'light' | 'dark')}
          title="Select the color scheme"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default SettingsPage;
