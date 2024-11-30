import React from 'react';

export const BrandVoice: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Brand Voice</h1>
        <p className="text-gray-600 mt-2">Define and manage your brand voice</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-4">Brand Personality</h2>
          {/* Brand personality form will go here */}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-4">Target Audience</h2>
          {/* Target audience form will go here */}
        </div>
      </div>
    </div>
  );
};