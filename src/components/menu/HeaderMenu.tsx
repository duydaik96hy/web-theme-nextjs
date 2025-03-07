'use client';

import MenuItemsHeader from './MenuItems';
import AuthMenu from './AuthMenu';
import Link from 'next/link';
import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';

interface IHeaderMenuProps {
    showAuthMenu: boolean;
}

const HeaderMenu = ({ showAuthMenu }: IHeaderMenuProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="h-14 grid grid-cols-12 fixed top-0 left-2 right-2 z-50 header">
            <div className="col-span-3 col-start-2 flex items-center">
                <Link href="/">
                    <img src="/static/img/logo.png" alt="logo" className="w-full h-[50px]" />
                </Link>
            </div>
            <div className="menu col-span-7 flex-grow hidden lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                <div className="text-md font-bold text-blue-700 lg:flex-grow">
                    <MenuItemsHeader />
                </div>
            </div>
            <div className="col-span-8 flex items-center justify-end lg:hidden">
                <button onClick={toggleMenu} aria-label="Menu">
                    <MenuOutlined className="w-8 h-8" />
                </button>
            </div>
            {isMenuOpen && (
                <div className="col-span-12 flex items-center bg-white shadow-lg lg:hidden absolute top-14 left-0 right-0">
                    <MenuItemsHeader />
                </div>
            )}
        </header>
    );
};

export default HeaderMenu;