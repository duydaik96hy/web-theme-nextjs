import React from 'react';
import PostItemHor from './PostItemHor';
import { Col, Row } from 'antd';
import { IPost } from '@/types/post';

export interface IPostListHorProps {
    allowRedirect?: boolean;
    category?: string;
    posts: IPost[];
}

const PostListHor = ({ allowRedirect = false, category, posts }: IPostListHorProps) => {
    return (
        <Row gutter={[16, 16]} className="w-full">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <Col span={24} key={post.id}>
                        <PostItemHor post={post} category={category}  />
                    </Col>
                ))
            ) : (
                <div style={{ textAlign: 'center', width: '100%', padding: '20px' }}>Không có dữ liệu</div>
            )}
        </Row>
    );
};

export default PostListHor;
