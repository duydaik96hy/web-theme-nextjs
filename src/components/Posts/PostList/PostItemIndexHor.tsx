import React from 'react';
import { Avatar, Card, Col, Row } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { convertTitleToSlug } from '@/helpers/string';
import Link from 'next/link';
import { getPostsCategories } from '@/service/posts';

export interface IPostItemIndexHorProps {
    post: IPost;
    index: number;
    isShowDescriptionAndTime?: boolean;
}

const PostItemIndexHor = async ({ post, index, isShowDescriptionAndTime = true }: IPostItemIndexHorProps) => {
    const slug = convertTitleToSlug(post.title);
    const postCategories = await getPostsCategories("");
    const categoryObj = postCategories.find((item) => item.id === post.category) ?? { code: 'other' };

    const href = `/${categoryObj.code.toLocaleLowerCase()}/${slug}-${post.id}`;

    return (
        <Link
            href={ href }
            className={'cursor-pointer text-black hover:text-black p-2 flex items-center border-b-2 border-gray-300 pb-2'}
        >
            <div>
                <Avatar size={40} style={{
                    borderRadius: '50%',
                }} >
                    {index + 1}
                </Avatar>
            </div>

            <div
                className="font-semibold text-base hover:text-red-500 overflow-hidden pl-4"
                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    lineHeight: '1.25em',
                }}
            >
                {post?.title}
            </div>
        </Link>
    );
};

export default PostItemIndexHor;
