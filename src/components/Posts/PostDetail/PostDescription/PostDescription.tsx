import { Col, Row } from 'antd';
import React from 'react';
import PostDescriptionText from './PostDescriptionText';
import { IPost } from '@/types/post';

export interface IPostDescriptionProps {
    post: IPost;
}

const PostDescription = ({ post }: IPostDescriptionProps) => {
    return (
        <Col xs={24} sm={24} md={24} lg={24}>
            <PostDescriptionText post={post} />
        </Col>
    );
};

export default PostDescription;
