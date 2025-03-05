import React from 'react';
import { Card, Col } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { convertTitleToSlug } from '@/helpers/string';
import { useRouter } from 'next/navigation';

export interface IPostItemHorCenterProps {
    post: IPost;
    isShowDescriptionAndTime?: boolean;
}

const PostItemHorCenter = ({ post, isShowDescriptionAndTime = true }: IPostItemHorCenterProps) => {
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
            className={'cursor-pointer hover:text-red-500 p-2'}
        >
            <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-12 gap-4 border-b-2 border-gray-300 pb-2">
                <Col className="flex justify-center md:col-span-8">
                    <div className="flex items-center justify-center">
                        <img
                            src={post?.banner_images[0] ?? "/static/img/logo.png"}
                            alt="post logo"
                        // className="object-cover w-[300px] h-[180px] rounded-1xl"
                        />
                    </div>
                </Col>

                <Col className="sm:col-span-2 md:col-span-4">
                    <span
                        className="font-semibold text-base overflow-hidden"
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            fontSize: '2em',
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
        </div>
    );
};

export default PostItemHorCenter;
