import React from 'react';

export const ContentGeneration: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Content Generation</h1>
        <p className="text-gray-600 mt-2">Generate AI-powered content variations</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-4">Content Settings</h2>
          {/* Content settings form will go here */}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
          <h2 className="font-semibold mb-4">Generated Variations</h2>
          {/* Generated content variations will go here */}
        </div>
      </div>
    </div>
  );
};