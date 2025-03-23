import React from 'react';
import { Card, Col, Space } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { convertImageUrl, convertTitleToSlug } from '@/helpers/string';
import Link from 'next/link';
import { getPostsCategories } from '@/service/posts';
import styles from './PostItemVerCenter.module.css';

export interface IPostItemVerCenterProps {
    post: IPost;
    isShowDescriptionAndTime?: boolean;
}

const PostItemVerCenter = async ({ post, isShowDescriptionAndTime = true }: IPostItemVerCenterProps) => {
    const slug = convertTitleToSlug(post.title);
    const postCategories = await getPostsCategories("");
    const categoryObj = postCategories.find((item) => item.id === post.category) ?? { name: 'other' };
    const category = convertTitleToSlug(categoryObj.name);

    const href = `/${category}/${slug}-${post.id}`;

    return (
        <Link
            href={href}
            className={styles.link_1}
        >
            <Col className={styles.col_1}>
                <Space direction="vertical" className={styles.wFull}>
                    <img
                        src={convertImageUrl(post?.banner_images[0]?.filename ?? '') ?? "/static/img/logo.png"}
                        alt="post logo"
                        className={styles.image_1}
                    />
                    <h2
                        className={styles.h2_1}
                        style={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            fontSize: '1.75em',
                            lineHeight: '1.5em',
                        }}
                    >
                        {post?.title}
                    </h2>
                    {isShowDescriptionAndTime && (
                        <>
                            <div className={styles.description_1}>
                                {post?.description}
                            </div>
                            <div className={styles.time_1}>
                                <ClockCircleOutlined />{' '}<span>{getLocaleDateTime(post?.created_at)}</span>
                            </div>
                        </>
                    )}
                </Space>
            </Col>
        </Link>
    );
};

export default PostItemVerCenter;
