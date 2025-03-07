import React from 'react';
import { Card, Col } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { convertTitleToSlug } from '@/helpers/string';
import Link from 'next/link';

export interface IPostItemHorCenterProps {
    post: IPost;
    isShowDescriptionAndTime?: boolean;
}

const PostItemHorCenter = ({ post, isShowDescriptionAndTime = true }: IPostItemHorCenterProps) => {
    const slug = convertTitleToSlug(post.title);
    const href = `/${post.category}/${slug}-${post.id}`;

    return (
        <Link
            href={href}
            className={'cursor-pointer text-black hover:text-black p-2'}
        >
            <div className="grid grid-cols-1 md:text-left md:grid-cols-12 gap-4 border-b-2 border-gray-300 pb-2">
                <Col className="flex justify-center md:col-span-7">
                    <div className="flex items-center justify-center">
                        <img
                            src={post?.banner_images[0] ?? "/static/img/default.jpeg"}
                            alt="post logo"
                            className="object-fill w-full h-full rounded-1xl"
                        />
                    </div>
                </Col>

                <Col className="md:col-span-5">
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
                        <>
                            <div>
                                <span className="text-l">{post?.description}</span>
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

export default PostItemHorCenter;
