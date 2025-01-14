import React from 'react';
import { X } from 'lucide-react';
import { TextInput } from '../ui/TextInput';

interface IndustryLeaderInputProps {
  leaders: string[];
  onLeaderChange: (index: number, value: string) => void;
  onLeaderRemove: (index: number) => void;
}

export const IndustryLeaderInput: React.FC<IndustryLeaderInputProps> = ({
  leaders,
  onLeaderChange,
  onLeaderRemove,
}) => {
  return (
    <div className="space-y-4">
      {leaders.map((leader, index) => (
        <div key={index} className="flex items-center space-x-2">
          <TextInput
            value={leader}
            onChange={(e) => onLeaderChange(index, e.target.value)}
            placeholder={`Industry Leader ${index + 1}`}
            className="flex-1"
          />
          {leaders.length > 1 && (
            <button
              onClick={() => onLeaderRemove(index)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      ))}
      {leaders.length < 3 && (
        <button
          onClick={() => onLeaderChange(leaders.length, '')}
          className="text-sm text-[#2940D3] hover:opacity-80 transition-colors"
        >
          + Add another leader
        </button>
      )}
    </div>
  );
};