import React from 'react';
import PostItemVer from './PostItemVer';
import { Col, Row } from 'antd';
import { IPost } from '@/types/post';

export interface IPostListVerProps {
    posts: IPost[];
    isShowDescriptionAndTime?: boolean;
}

const PostListVer = ({ posts, isShowDescriptionAndTime = true }: IPostListVerProps) => {
    return (
        <Col span={24} className="w-full">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <Row gutter={[8, 8]} key={post.id}>
                        <PostItemVer post={post} isShowDescriptionAndTime={isShowDescriptionAndTime} />
                    </Row>
                ))
            ) : (
                <div style={{ textAlign: 'center', width: '100%', padding: '10px' }}>Không có dữ liệu</div>
            )}
        </Col>
    );
};

export default PostListVer;
