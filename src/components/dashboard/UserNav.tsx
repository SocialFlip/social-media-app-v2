import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export const UserNav: React.FC = () => {
  const { logout } = useAuth();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="rounded-full h-8 w-8 bg-gradient-to-r from-[#00C2CB] to-[#2940D3] text-white flex items-center justify-center">
          <User className="h-5 w-5" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[200px] bg-white rounded-lg shadow-lg p-2 mt-2">
          <DropdownMenu.Item className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenu.Item>
          <DropdownMenu.Item 
            className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
            onClick={logout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};