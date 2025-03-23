import { Col } from 'antd';
import React from 'react';
import { IPost } from '@/types/post';
import { convertImageUrl } from '@/helpers/string';
import styles from './PostDescription.module.css';

export interface IPostDescriptionProps {
    post: IPost;
}

const PostDescription = ({ post }: IPostDescriptionProps) => {
    return (
        <Col xs={24} sm={24} md={24} lg={24} className={styles.container}>
            <div>
                {post?.description && (
                    <div className={styles.textJustify}>
                        <span>{post.description}</span>
                    </div>
                )}

                <img
                    src={convertImageUrl(post?.banner_images[0]?.filename ?? '') ?? "/static/img/logo.png"}
                    alt="post logo"
                    className={styles.image}
                />

                {post?.description && (
                    <div className={styles.content}>
                        <div className={styles.textJustify} dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                )}
            </div>
        </Col>
    );
};

export default PostDescription;
