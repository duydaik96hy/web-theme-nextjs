import React from 'react';
import { Avatar, Card, Col, Row } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { convertTitleToSlug } from '@/helpers/string';
import { useRouter } from 'next/navigation';

export interface IPostItemIndexHorProps {
    post: IPost;
    index: number;
    isShowDescriptionAndTime?: boolean;
}

const PostItemIndexHor = ({ post, index, isShowDescriptionAndTime = true }: IPostItemIndexHorProps) => {
    const router = useRouter();

    const onClick = (post: IPost) => {
        const slug = convertTitleToSlug(post.title);
        router.push(`/${post.category}/${slug}-${post.id}`);
    };

    return (
        <div
            onClick={() => {
                onClick?.(post);
            }}
            className={'cursor-pointer hover:text-red-500 p-2 flex items-center border-b-2 border-gray-300 pb-2'}
        >
            <div>
                <Avatar size={40} style={{
                    borderRadius: '50%',
                }} >
                    {index + 1}
                </Avatar>
            </div>

            <div
                className="font-semibold text-base overflow-hidden pl-4"
                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    lineHeight: '1.25em',
                }}
            >
                {post?.title}
            </div>
        </div>
    );
};

export default PostItemIndexHor;
