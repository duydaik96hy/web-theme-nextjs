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
            <div className="h-screen w-screen flex overflow-hidden">
                <Layout>
                    <Layout className="h-screen mt-[56px]">
                        <Layout style={{ flex: 1, overflow: "hidden" }}>
                            <Content style={{ width: "100%", height: "100%" }}>
                                {children}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        </ConfigProvider>
    );
};

export default RootLayout;
