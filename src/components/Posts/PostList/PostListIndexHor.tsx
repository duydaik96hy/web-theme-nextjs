import React from 'react';
import { Col, Row } from 'antd';
import { IPost } from '@/types/post';
import PostItemIndexHor from './PostItemIndexHor';
import styles from './PostListIndexHor.module.css';

export interface IPostListIndexHorProps {
    posts: IPost[];
    isShowDescriptionAndTime?: boolean;
}

const PostListIndexHor = ({ posts, isShowDescriptionAndTime = true }: IPostListIndexHorProps) => {
    return (
        <Row gutter={[8, 8]} className={styles.row_1}>
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <Col span={24} key={post.id}>
                        <PostItemIndexHor post={post} index={index} isShowDescriptionAndTime={isShowDescriptionAndTime} />
                    </Col>
                ))
            ) : (
                <div style={{ textAlign: 'center', width: '100%', padding: '20px' }}>Không có dữ liệu</div>
            )}
        </Row>
    );
};

export default PostListIndexHor;
