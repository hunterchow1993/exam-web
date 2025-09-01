import React from 'react';
import { Button } from 'antd';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

interface SocialLoginButtonProps {
  provider: 'google' | 'facebook';
  onClick: () => void;
  isMobile?: boolean;
  className?: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  provider,
  onClick,
  isMobile = false,
  className = ''
}) => {
  const providerConfig = {
    google: {
      icon: <GoogleOutlined className="text-red-500" />,
      label: 'Google',
      color: 'text-red-500'
    },
    facebook: {
      icon: <FacebookOutlined className="text-blue-600" />,
      label: 'Facebook',
      color: 'text-blue-600'
    }
  };

  const config = providerConfig[provider];

  return (
    <Button
      onClick={onClick}
      className={`flex-1 h-10 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 ${className}`}
    >
      {config.icon}
      <span className={`text-gray-700 font-medium ${isMobile ? 'text-sm' : ''}`}>
        {config.label}
      </span>
    </Button>
  );
};

export default SocialLoginButton;