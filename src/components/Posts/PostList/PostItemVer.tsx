import React from 'react';
import { Card, Col, Space } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { convertTitleToSlug } from '@/helpers/string';
import Link from 'next/link';
import { getPostsCategories } from '@/service/posts';

export interface IPostItemVerProps {
    post: IPost;
    isShowDescriptionAndTime?: boolean;
}

const PostItemVer = async ({ post, isShowDescriptionAndTime = true }: IPostItemVerProps) => {
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
            <Col className="justify-center border-b-2 border-gray-300 pt-4">
                <Space direction="vertical" className="w-full">
                    <img
                        src={post?.banner_images[0] ?? "/static/img/default.jpeg"}
                        alt="post logo"
                    // className="object-cover w-[300px] h-[180px] rounded-1xl"
                    />
                    <span
                        className="font-semibold text-lg hover:text-red-500 overflow-hidden"
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            lineHeight: '1.25em',
                        }}
                    >
                        {post?.title}
                    </span>
                    {isShowDescriptionAndTime && (
                        <>
                            <div className="text-l line-clamp-3">{post?.description}</div>
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

export default PostItemVer;
