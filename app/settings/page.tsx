"use client";

import React from 'react';
import SettingsPage, { Settings } from '../../components/SettingsPage'; 

const Page: React.FC = () => {
  const handleSaveSettings = (settings: Settings) => {
    console.log("Settings saved:", settings);
  };

  return (
    <div>
      <SettingsPage onSaveSettings={handleSaveSettings} />
    </div>
  );
};

export default Page;
