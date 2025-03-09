import React from 'react';

import { Col } from 'antd';
import PostDetail from '@/components/Posts/PostDetail/PostDetail';

interface BlogPostProps {
    params: { id: string };
}

const HomePage = async ({ params }: BlogPostProps) => {
    const { id } = await params;
    const postId = id.split('-').pop() || '';

    return (
        <div style={{ padding: '60px 0px 24px' }}>
            <PostDetail postId={postId} />
        </div>
    );
};

export default HomePage;
