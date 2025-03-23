import React from 'react';
import { Card, Col, Row } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { convertImageUrl, convertTitleToSlug } from '@/helpers/string';
import Link from 'next/link';
import { getPostsCategories } from '@/service/posts';
import styles from './PostItemHor.module.css';

export interface IPostItemHorProps {
    post: IPost;
    isShowDescriptionAndTime?: boolean;
}

const PostItemHor = async ({ post, isShowDescriptionAndTime = true }: IPostItemHorProps) => {
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
            <div className={styles.div_1}>
                <Col className={styles.col_1}>
                    <img
                        src={convertImageUrl(post?.banner_images[0]?.filename ?? '') ?? "/static/img/logo.png"}
                        alt="post logo"
                        className={styles.img_1}
                    />
                </Col>
                <Col className={styles.col_2}>
                    {/* Tiêu đề và mô tả */}
                    <div>
                        <h2
                            className={styles.h2_1}
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                lineHeight: '1.25em',
                            }}
                        >
                            {post?.title}
                        </h2>
                        {isShowDescriptionAndTime && (
                            <div className={styles.text_justify}>
                                <span className={styles.desc_1}>
                                    {post?.description}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Ngày tháng */}
                    {isShowDescriptionAndTime && (
                        <div className={styles.time_1}>
                            <ClockCircleOutlined />{' '}<span>{getLocaleDateTime(post?.created_at)}</span>
                        </div>
                    )}
                </Col>
            </div>
        </Link>
    );
};

export default PostItemHor;
