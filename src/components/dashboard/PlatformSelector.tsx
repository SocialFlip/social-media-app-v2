import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

interface Platform {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const platforms: Platform[] = [
  { id: 'twitter', name: 'Twitter', icon: <Twitter className="h-5 w-5" /> },
  { id: 'linkedin', name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" /> },
  { id: 'instagram', name: 'Instagram', icon: <Instagram className="h-5 w-5" /> },
];

interface PlatformSelectorProps {
  selectedPlatforms: string[];
  onPlatformToggle: (platformId: string) => void;
}

export const PlatformSelector: React.FC<PlatformSelectorProps> = ({
  selectedPlatforms,
  onPlatformToggle,
}) => {
  return (
    <div className="space-y-4">
      {platforms.map((platform) => (
        <button
          key={platform.id}
          onClick={() => onPlatformToggle(platform.id)}
          className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            selectedPlatforms.includes(platform.id)
              ? 'bg-gradient-to-r from-[#00C2CB] to-[#2940D3] text-white'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          {platform.icon}
          <span>{platform.name}</span>
        </button>
      ))}
    </div>
  );
};