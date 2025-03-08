import React from 'react';

import { Col } from 'antd';
import PostDetail from '@/components/Posts/PostDetail/PostDetail';
import { Content } from "antd/es/layout/layout";

interface BlogPostProps {
    params: { id: string };
}

const HomePage = async ({ params }: BlogPostProps) => {
    const { id } = await params;
    const postId = id.split('-').pop() || '';

    return (
        <div style={{ padding: '40px 14px 24px' }}>
            <Col span={24}>
                <PostDetail postId={postId} />
            </Col>
        </div>
    );
};

export default HomePage;
