import React from 'react';

export const Templates: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Templates</h1>
        <p className="text-gray-600 mt-2">Manage your content templates</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Template cards will go here */}
      </div>
    </div>
  );
};