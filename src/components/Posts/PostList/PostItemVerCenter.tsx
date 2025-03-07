import React from 'react';
import { Card, Col, Space } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { convertTitleToSlug } from '@/helpers/string';
import Link from 'next/link';

export interface IPostListVerCenterProps {
    post: IPost;
    isShowDescriptionAndTime?: boolean;
}

const PostListVerCenter = ({ post, isShowDescriptionAndTime = true }: IPostListVerCenterProps) => {
    const slug = convertTitleToSlug(post.title);
    const href = `/${post.category}/${slug}-${post.id}`;

    return (
        <Link
            href={href}
            className={'cursor-pointer text-black hover:text-black'}
        >
            <Col className="justify-center">
                <Space direction="vertical" className="w-full">
                    <img
                        src={post?.banner_images[0] ?? "/static/img/default.jpeg"}
                        alt="post logo"
                        className="object-cover w-full"
                    />
                    <span
                        className="font-semibold text-lg hover:text-red-500 overflow-hidden"
                        style={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            fontSize: '1.75em',
                            lineHeight: '1.5em',
                        }}
                    >
                        {post?.title}
                    </span>
                    {isShowDescriptionAndTime && (
                        <>
                            <div className="text-l line-clamp-3">
                                {post?.description}
                            </div>
                            <div className="text-l">
                                <ClockCircleOutlined />{' '}<span>{getLocaleDateTime(post?.created_at)}</span>
                            </div>
                        </>
                    )}
                </Space>
            </Col>
        </Link>
    );
};

export default PostListVerCenter;
