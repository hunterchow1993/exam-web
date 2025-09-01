import React, { useState } from 'react';
import { Menu, Button, Avatar, Badge } from 'antd';
import type { MenuProps } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  FileTextOutlined,
  CalendarOutlined,
  MessageOutlined,
  BellOutlined,
  SettingOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import {
  containerStyle,
  menuStyle,
  activeIconStyle,
  activeLabelStyle,
  inactiveIconStyle,
  inactiveLabelStyle,
  badgeStyle,
} from './styles/AsideStyle';

interface AsideProps {
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
}

type MenuItem = Required<MenuProps>['items'][number];

const Aside: React.FC<AsideProps> = () => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState('dashboard');

  const menuItems: MenuItem[] = [
    {
      key: 'dashboard',
      icon: <AppstoreOutlined style={activeIconStyle} />,
      label: <span style={activeLabelStyle}>Dashboard</span>,
      onClick: () => navigate('/internal/dashboard'),
    },
    {
      key: 'analytics',
      icon: <BarChartOutlined style={inactiveIconStyle} />,
      label: <span style={inactiveLabelStyle}>Analytics</span>,
      onClick: () => navigate('/internal/analytics'),
    },
    {
      key: 'invoice',
      icon: <FileTextOutlined style={inactiveIconStyle} />,
      label: <span style={inactiveLabelStyle}>Invoice</span>,
      onClick: () => navigate('/internal/invoice'),
    },
    {
      key: 'schedule',
      icon: <FileTextOutlined style={inactiveIconStyle} />,
      label: <span style={inactiveLabelStyle}>Schedule</span>,
      onClick: () => navigate('/internal/schedule'),
    },
    {
      key: 'calendar',
      icon: <CalendarOutlined style={inactiveIconStyle} />,
      label: <span style={inactiveLabelStyle}>Calendar</span>,
      onClick: () => navigate('/internal/calendar'),
    },
    {
      key: 'messages',
      icon: <MessageOutlined style={inactiveIconStyle} />,
      label: (
        <div className="flex items-center justify-between w-full">
          <span style={inactiveLabelStyle}>Messages</span>
          <Badge count={49} size="small" style={badgeStyle} />
        </div>
      ),
      onClick: () => navigate('/internal/messages'),
    },
    {
      key: 'notification',
      icon: <BellOutlined style={inactiveIconStyle} />,
      label: <span style={inactiveLabelStyle}>Notification</span>,
      onClick: () => navigate('/internal/notification'),
    },
    {
      key: 'settings',
      icon: <SettingOutlined style={inactiveIconStyle} />,
      label: <span style={inactiveLabelStyle}>Settings</span>,
      onClick: () => navigate('/internal/settings'),
    },
  ];

  const handleMenuClick = (e: any) => {
    setSelectedKey(e.key);
  };

  return (
    <div className="h-full bg-white border-r border-gray-100 flex flex-col" style={containerStyle}>
      {/* 头部 - Base 品牌标识 */}
      <div className="pt-6 px-4 border-b border-gray-100">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <CheckCircleOutlined className="text-white text-sm" />
          </div>
          <span className="text-lg font-semibold text-gray-900">Base</span>
        </div>
      </div>

      {/* 主菜单 */}
      <div className="flex-1 px-4 py-6">
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          items={menuItems}
          onClick={handleMenuClick}
          className="border-none bg-transparent"
          style={menuStyle}
        />
      </div>

      {/* 升级区域 */}
      <div className="px-6 pb-6">
        
        {/* 用户信息 */}
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Avatar 
            size={40} 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
          />
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">Easin Arafat</div>
            <div className="text-xs text-gray-500">Free Account</div>
          </div>
          <Button type="text" size="small" className="text-gray-400">
            •••
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Aside;