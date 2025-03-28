import React from 'react';
import { Card, Col, Space } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { convertImageUrl, convertTitleToSlug } from '@/helpers/string';
import Link from 'next/link';
import { getPostsCategories } from '@/service/posts';

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
            className={'cursor-pointer text-black hover:text-black'}
        >
            <Col className="justify-center">
                <Space direction="vertical" className="w-full">
                    <img
                        src={convertImageUrl(post?.banner_images[0]?.filename ?? '') ?? "/static/img/logo.png"}
                        alt="post logo"
                        className="object-fill w-full rounded-lg"
                    />
                    <h2
                        className="font-semibold text-lg text-justify hover:text-red-500 overflow-hidden"
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
                            <div className="text-l text-justify line-clamp-3">
                                {post?.description}
                            </div>
                            <div className="text-l pt-2">
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
