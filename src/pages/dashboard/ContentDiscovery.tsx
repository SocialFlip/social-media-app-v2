import React, { useState } from 'react';
import { PlatformSelector } from '@/components/dashboard/PlatformSelector';
import { IndustryLeaderInput } from '@/components/dashboard/IndustryLeaderInput';
import { Button } from '@/components/ui/Button';

export const ContentDiscovery: React.FC = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [industryLeaders, setIndustryLeaders] = useState<string[]>(['']);

  const handlePlatformToggle = (platformId: string) => {
    setSelectedPlatforms((current) =>
      current.includes(platformId)
        ? current.filter((id) => id !== platformId)
        : [...current, platformId]
    );
  };

  const handleLeaderChange = (index: number, value: string) => {
    setIndustryLeaders((current) => {
      const updated = [...current];
      if (index === current.length) {
        updated.push(value);
      } else {
        updated[index] = value;
      }
      return updated;
    });
  };

  const handleLeaderRemove = (index: number) => {
    setIndustryLeaders((current) =>
      current.filter((_, i) => i !== index)
    );
  };

  const handleAnalyze = () => {
    // This will be implemented later with actual API integration
    console.log('Analyzing:', { selectedPlatforms, industryLeaders });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Content Discovery</h1>
        <p className="text-gray-600 mt-2">Analyze top-performing content from industry leaders</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Platform Selection */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-4">Select Platforms</h2>
          <PlatformSelector
            selectedPlatforms={selectedPlatforms}
            onPlatformToggle={handlePlatformToggle}
          />
        </div>

        {/* Industry Leaders */}
        <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
          <h2 className="font-semibold mb-4">Industry Leaders</h2>
          <IndustryLeaderInput
            leaders={industryLeaders}
            onLeaderChange={handleLeaderChange}
            onLeaderRemove={handleLeaderRemove}
          />
        </div>
      </div>

      {/* Analysis Button */}
      <div className="flex justify-end">
        <Button
          variant="primary"
          onClick={handleAnalyze}
          disabled={selectedPlatforms.length === 0 || !industryLeaders[0]}
        >
          Discover Content
        </Button>
      </div>

      {/* Results Section - Initially Hidden */}
      {false && (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-4">Top Performing Posts</h2>
          {/* Results grid will be implemented later */}
        </div>
      )}
    </div>
  );
};