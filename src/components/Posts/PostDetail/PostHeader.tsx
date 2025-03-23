import { Col, Row } from 'antd';
import React from 'react';
import { IPost } from '@/types/post';
import { getLocaleDateTime } from '@/helpers/time';
import styles from './PostHeader.module.css';

export interface IPostHeaderProps {
    post?: IPost;
    categoryName?: string;
}

const PostHeader = ({ post, categoryName }: IPostHeaderProps) => {
    return (
        <Col className={styles.container}>
            <Row>
                <h1 className={styles.title}>{post?.title}</h1>
            </Row>
            <Row className={styles.infoRow}>
                <span className={styles.infoText}>
                    <span className={styles.highlight}>Danh mục:</span> {categoryName}
                </span>
                <span className={styles.infoText}>
                    <span className={styles.highlight}>Đăng lúc:</span> {getLocaleDateTime(post?.created_at)}
                </span>
            </Row>
        </Col>
    );
};

export default PostHeader;
