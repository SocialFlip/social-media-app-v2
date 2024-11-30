import React, { useState } from 'react';
import { SocialButton } from './SocialButton';
import { TextInput } from '../ui/TextInput';
import { Button } from '../ui/Button';
import { useAuth } from '@/contexts/AuthContext';

export const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(formData.email, formData.password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="space-y-4">
        <TextInput
          type="email"
          name="email"
          placeholder="Work Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextInput
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit" variant="primary" className="w-full">
        Sign In to Dashboard
      </Button>

      <div className="text-center">
        <a href="#" className="text-[#2940D3] hover:opacity-80 text-sm transition duration-200">
          Reset Password
        </a>
      </div>

      <div className="text-center text-sm text-gray-600">
        New to SocialFlip?{' '}
        <a href="#" className="text-[#2940D3] hover:opacity-80 font-medium transition duration-200">
          Create an account
        </a>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <SocialButton
        icon="/google-icon.svg"
        text="Sign in with Google"
      />
    </form>
  );
};