import React from 'react';
import { Card, Col } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { convertImageUrl, convertTitleToSlug } from '@/helpers/string';
import Link from 'next/link';
import { getPostsCategories } from '@/service/posts';

export interface IPostItemHorCenterProps {
    post: IPost;
    isShowDescriptionAndTime?: boolean;
}

const PostItemHorCenter = async ({ post, isShowDescriptionAndTime = true }: IPostItemHorCenterProps) => {
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
            <div className="grid grid-cols-1 md:text-left md:grid-cols-12 gap-4 border-b-2 border-gray-300 pb-2 pt-2">
                <Col className="flex justify-center md:col-span-7">
                    <div className="flex items-center justify-center">
                        <img
                            src={convertImageUrl(post?.banner_images[0]?.filename ?? '') ?? "/static/img/logo.png"}
                            alt="post logo"
                            className="object-fill w-full rounded-lg"
                        />
                    </div>
                </Col>
                <Col className="md:col-span-5 flex flex-col justify-between h-full">
                    {/* Tiêu đề và mô tả */}
                    <div>
                        <span
                            className="font-semibold text-base hover:text-red-500 overflow-hidden"
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                fontSize: '1.75em',
                                lineHeight: '1.5em',
                            }}
                        >
                            {post?.title}
                        </span>
                        {isShowDescriptionAndTime && (
                            <div className="text-justify">
                                <span className="text-l line-clamp-8">
                                    {post?.description}
                                </span>
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

            </div>
        </Link>
    );
};

export default PostItemHorCenter;
