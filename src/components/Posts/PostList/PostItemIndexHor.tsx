import React from 'react';
import { Avatar, Card, Col, Row } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { convertTitleToSlug } from '@/helpers/string';
import Link from 'next/link';
import { getPostsCategories } from '@/service/posts';
import styles from './PostItemIndexHor.module.css';

export interface IPostItemIndexHorProps {
    post: IPost;
    index: number;
    isShowDescriptionAndTime?: boolean;
}

const PostItemIndexHor = async ({ post, index, isShowDescriptionAndTime = true }: IPostItemIndexHorProps) => {
    const slug = convertTitleToSlug(post.title);
    const postCategories = await getPostsCategories("");
    const categoryObj = postCategories.find((item) => item.id === post.category) ?? { name: 'other' };
    const category = convertTitleToSlug(categoryObj.name);

    const href = `/${category}/${slug}-${post.id}`;

    return (
        <Link
            href={ href }
            className={styles.link_1}
        >
            <div>
                <Avatar size={40} style={{
                    borderRadius: '50%',
                }} >
                    {index + 1}
                </Avatar>
            </div>
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
        </Link>
    );
};

export default PostItemIndexHor;
