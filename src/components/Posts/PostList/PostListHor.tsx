import React from 'react';
import PostItemHor from './PostItemHor';
import { Col, Row } from 'antd';
import { IPost } from '@/types/post';

export interface IPostListHorProps {
    posts: IPost[];
    isShowDescriptionAndTime?: boolean;
}

const PostListHor = ({ posts, isShowDescriptionAndTime = true }: IPostListHorProps) => {
    return (
        <Row className="w-full">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <Col span={24} key={post.id}>
                        <PostItemHor post={post} isShowDescriptionAndTime={isShowDescriptionAndTime} />
                    </Col>
                ))
            ) : (
                <div style={{ textAlign: 'center', width: '100%', padding: '20px' }}>Không có dữ liệu</div>
            )}
        </Row>
    );
};

export default PostListHor;
