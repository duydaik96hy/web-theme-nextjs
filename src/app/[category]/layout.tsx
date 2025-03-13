import React from 'react';
import { ConfigProvider } from "antd";

const RootLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <ConfigProvider>
            <div className='pt-[20px]'>
                {children}
            </div>
        </ConfigProvider>
    );
};

export default RootLayout;
