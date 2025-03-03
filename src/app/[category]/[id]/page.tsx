'use client';

import React from 'react';

import { Col, Row, Layout, Breadcrumb} from 'antd';
import PostDetail from '@/components/Posts/PostDetail/PostDetail';
import {Content} from "antd/es/layout/layout";
import { useParams } from 'next/navigation';

const HomePage = () => {
    const params = useParams(); // This will return a Promise
    const postId = params.id as string;

    return (
        <Layout style={{padding: '0 14px 24px'}}>
            <Breadcrumb
                items={[{title: 'Trang chủ', onClick: () => window.location.href = '/'},
                    {title: 'Chi tiết'}]}
                style={{margin: '16px 0'}}
                separator=">"
            >
            </Breadcrumb>
            <Content>
                <Col span={24}>
                <PostDetail postId={postId} />
                </Col>
            </Content>
        </Layout>
    );
};

export default HomePage;
