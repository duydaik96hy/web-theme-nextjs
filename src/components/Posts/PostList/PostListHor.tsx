import React from 'react';
import PostItemHor from './PostItemHor';
import { Col, Row } from 'antd';
import { IPost } from '@/types/post';
import styles from './PostListHor.module.css';

export interface IPostListHorProps {
    posts: IPost[];
    isShowDescriptionAndTime?: boolean;
}

const PostListHor = ({ posts, isShowDescriptionAndTime = true }: IPostListHorProps) => {
    return (
        <Row gutter={[8, 8]} className={styles.row_1}>
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
