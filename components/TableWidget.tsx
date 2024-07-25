'use client';

import React, { useState } from 'react';
import { tableData } from '../app/data/data';

const TableWidget = () => {
  const [data, setData] = useState(tableData);

  const addItem = () => {
    const newItem = {
      id: data.length + 1,
      name: `Item ${data.length + 1}`,
      quantity: Math.floor(Math.random() * 500) + 100,
    };
    setData([...data, newItem]);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Table Data</h2>
      <button
        onClick={addItem}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Item
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWidget;
