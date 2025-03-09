import React from 'react';
import { Card, Col, Space } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { convertImageUrl, convertTitleToSlug } from '@/helpers/string';
import Link from 'next/link';
import { getPostsCategories } from '@/service/posts';

export interface IPostItemVerProps {
    post: IPost;
    isShowDescriptionAndTime?: boolean;
    className?: string;
}

const PostItemVer = async ({ post, isShowDescriptionAndTime = true, className }: IPostItemVerProps) => {
    const slug = convertTitleToSlug(post.title);
    const postCategories = await getPostsCategories("");
    const categoryObj = postCategories.find((item) => item.id === post.category) ?? { name: 'other' };
    const category = convertTitleToSlug(categoryObj.name);

    const href = `/${category}/${slug}-${post.id}`;

    return (
        <div className={className}>
            <Link
                href={href}
                className={'cursor-pointer text-black hover:text-black'}
            >
                <Col className="justify-center border-b-2 border-gray-300 pt-2 pb-2">
                    <Space direction="vertical" className="w-full">
                        <img
                            src={convertImageUrl(post?.banner_images[0]?.filename ?? '') ?? "/static/img/logo.png"}
                            alt="post logo"
                            className="object-fit w-full rounded-lg h-[180px]"
                        />
                        <span
                            className="font-semibold text-lg text-justify hover:text-red-500 overflow-hidden"
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
                                <div className="text-l text-justify line-clamp-3 min-h-[4.5em] leading-[1.5em] before:content-['_'] before:opacity-0">
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
        </div>
    );
};

export default PostItemVer;
