import React from 'react';
import { Card, Col } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { convertTitleToSlug } from '@/helpers/string';
import Link from 'next/link';
import { getPostsCategories } from '@/service/posts';

export interface IPostItemHorProps {
    post: IPost;
    isShowDescriptionAndTime?: boolean;
}

const PostItemHor = async ({ post, isShowDescriptionAndTime = true }: IPostItemHorProps) => {
    const slug = convertTitleToSlug(post.title);
    const postCategories = await getPostsCategories("");
    const categoryObj = postCategories.find((item) => item.id === post.category) ?? { code: 'other' };

    const href = `/${categoryObj.code.toLocaleLowerCase()}/${slug}-${post.id}`;

    return (
        <Link 
            href={href} 
            className={'cursor-pointer text-black hover:text-black p-2'}
        >
            <div className="grid grid-cols-1 md:text-left md:grid-cols-12 gap-4 border-b-2 border-gray-300 pb-2">
                <Col className="flex justify-center md:col-span-4">
                    <div className="flex items-center justify-center">
                        <img
                            src={post?.banner_images[0] ?? "/static/img/default.jpeg"}
                            alt="post logo"
                        />
                    </div>
                </Col>

                <Col className="sm:col-span-2 md:col-span-8">
                    <span
                        className="font-semibold text-base hover:text-red-500 overflow-hidden"
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
                            <div>
                                <span className="text-l line-clamp-3">{post?.description}</span>
                            </div><div className="text-l">
                                <ClockCircleOutlined />{' '}<span>{getLocaleDateTime(post?.created_at)}</span>
                            </div>
                        </>
                    )}
                </Col>
            </div>
        </Link>
    );
};

export default PostItemHor;
