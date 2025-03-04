"use client";

import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';

type MenuItems = Required<MenuProps>['items'][number];

const items: MenuItems[] = [
  {
    key: 'kinhte',
    label: (
      <Link href="/kinh-te">
        Kinh tế
      </Link>
    )
  },
  {
    key: 'thethao',
    label: (
      <Link href="/the-thao">
        Thể thao
      </Link>
    )
  },
  {
    key: 'vanhoa',
    label: (
      <Link href="/van-hoa">
        Văn hóa
      </Link>
    ),
  },
];

const MenuItemsHeader: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default MenuItemsHeader;