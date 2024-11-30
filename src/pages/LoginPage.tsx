import React from 'react';
import { LoginForm } from '@/components/auth/LoginForm';

export const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="mb-12">
        <h1 className="text-4xl font-semibold bg-gradient-to-r from-[#00C2CB] to-[#2940D3] text-transparent bg-clip-text">
          SocialFlip.io
        </h1>
      </div>

      {/* Login Container */}
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-gray-600">
            AI-Powered Content Creation for Social Media Professionals
          </p>
        </div>

        <LoginForm />

        <p className="text-xs text-center text-gray-500 mt-8">
          By signing in, you agree to our{' '}
          <a href="#" className="text-[#2940D3] hover:opacity-80">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-[#2940D3] hover:opacity-80">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};