import React from 'react';
import { Menu } from 'antd';

interface IMenuItemsHeaderProps {
  items: Array<{ key: string; label: React.ReactNode }>;
}

const MenuItemsHeader = ({ items }: IMenuItemsHeaderProps) => {
  return <Menu mode="horizontal" items={items} />;
};

export default MenuItemsHeader;