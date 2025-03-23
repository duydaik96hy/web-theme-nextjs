import React from 'react';
import { ConfigProvider } from "antd";
import styles from './category_page.module.css';

const RootLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <ConfigProvider>
            <div className={styles.pt_20}>
                {children}
            </div>
        </ConfigProvider>
    );
};

export default RootLayout;
