'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ConfigProvider } from "antd";

const RootLayout = ({ children }: React.PropsWithChildren) => {
    const pathname = usePathname();
    const [current, setCurrent] = useState<string>(pathname || '');

    useEffect(() => {
        setCurrent(pathname);
    }, [pathname]);

    return (
        <ConfigProvider>
            <div className='pt-[20px]'>
                {children}
            </div>
        </ConfigProvider>
    );
};

export default RootLayout;
