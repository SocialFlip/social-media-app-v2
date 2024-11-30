import React from 'react';

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-2">Track your content performance</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Analytics cards will go here */}
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="font-semibold mb-4">Performance Trends</h2>
        {/* Charts will go here */}
      </div>
    </div>
  );
};