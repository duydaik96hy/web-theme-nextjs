import React from 'react';
import { Card, Col, Space } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { useRouter } from 'next/navigation';
import { convertTitleToSlug } from '@/helpers/string';

export interface IPostItemVerProps {
    post: IPost;
    isShowDescriptionAndTime?: boolean;
}

const PostItemVer = ({ post, isShowDescriptionAndTime = true }: IPostItemVerProps) => {
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
            className={'cursor-pointer hover:text-red-500'}
        >
            <Col className="justify-center border-b-2 border-gray-300 pt-4">
                <Space direction="vertical" className="w-full">
                    <img
                        src={post?.banner_images[0] ?? "/static/img/logo.png"}
                        alt="post logo"
                    // className="object-cover w-[300px] h-[180px] rounded-1xl"
                    />
                    <span
                        className="font-semibold text-lg overflow-hidden"
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
        </div>
    );
};

export default PostItemVer;
