'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ConfigProvider, Layout } from "antd";
import { Content } from 'antd/es/layout/layout';

const RootLayout = ({ children }: React.PropsWithChildren) => {
    const pathname = usePathname();
    const [current, setCurrent] = useState<string>(pathname || '');

    useEffect(() => {
        setCurrent(pathname);
    }, [pathname]);

    return (
        <ConfigProvider>
            <div className="h-screen w-screen flex">
                {children}
            </div>
        </ConfigProvider>
    );
};

export default RootLayout;
