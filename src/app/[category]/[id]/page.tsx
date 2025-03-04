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
        <div style={{padding: '40px 14px 24px'}}>
            <Content>
                <Col span={24}>
                    <PostDetail postId={postId} />
                </Col>
            </Content>
        </div>
    );
};

export default HomePage;
