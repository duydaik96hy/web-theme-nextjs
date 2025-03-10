import React from 'react';
import { Card, Col, Row } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { convertImageUrl, convertTitleToSlug } from '@/helpers/string';
import Link from 'next/link';
import { getPostsCategories } from '@/service/posts';

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
            className={'cursor-pointer text-black hover:text-black'}
        >
            <Row gutter={8} className="border-b-2 border-gray-300 pb-2 pt-4 grid">
                <Col span={8} className="justify-center items-center md:col-span-3">
                    <img
                        src={convertImageUrl(post?.banner_images[0]?.filename ?? '') ?? "/static/img/logo.png"}
                        alt="post logo"
                        className="object-fill w-full h-full rounded-lg max-h-[200px]"
                    />
                </Col>
                <Col span={16} className="md:col-span-9 flex flex-col justify-between h-full">
                    {/* Tiêu đề và mô tả */}
                    <div>
                        <h2
                            className="font-semibold text-base hover:text-red-500 overflow-hidden"
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
                            <div className="text-justify">
                                <span className="text-l line-clamp-3">{post?.description}</span>
                            </div>
                        )}
                    </div>

                    {/* Ngày tháng */}
                    {isShowDescriptionAndTime && (
                        <div className="text-l mt-auto">
                            <ClockCircleOutlined />{' '}<span>{getLocaleDateTime(post?.created_at)}</span>
                        </div>
                    )}
                </Col>
            </Row>
        </Link>
    );
};

export default PostItemHor;
