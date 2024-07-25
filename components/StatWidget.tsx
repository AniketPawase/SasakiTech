// components/StatWidget.tsx
import React, { useEffect, useState } from 'react';

interface Stats {
  users: number;
  sales: number;
  visits: number;
}

const StatWidget = () => {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setStats(data.stats));
  }, []);

  if (!stats) return <div>Loading...</div>;

  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>Users: {stats.users}</li>
        <li>Sales: ${stats.sales}</li>
        <li>Visits: {stats.visits}</li>
      </ul>
    </div>
  );
};

export default StatWidget;
