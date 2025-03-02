"use client";

import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';

type MenuItems = Required<MenuProps>['items'][number];

const items: MenuItems[] = [
  {
    key: 'chungcu',
    label: (
      <Link href="/du-an/chung-cu">
        Chung cư
      </Link>
    )
  },
  {
    key: 'canho',
    label: (
      <Link href="/du-an/can-ho">
        Căn hộ
      </Link>
    )
  },
  {
    key: 'Phòng trọ',
    label: (
      <Link href="/du-an/phong-tro">
        Phòng trọ
      </Link>
    ),
  },
];

const MenuItemsHeader: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default MenuItemsHeader;