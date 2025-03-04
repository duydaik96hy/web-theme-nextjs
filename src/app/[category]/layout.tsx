'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Col, ConfigProvider, Layout } from "antd";
import { Content } from 'antd/es/layout/layout';

const RootLayout = ({ children }: React.PropsWithChildren) => {
    const pathname = usePathname();
    const [current, setCurrent] = useState<string>(pathname || '');

    useEffect(() => {
        setCurrent(pathname);
    }, [pathname]);

    return (
        <ConfigProvider>
            <Col span={18} offset={3}>
                {children}
            </Col>
        </ConfigProvider>
    );
};

export default RootLayout;
