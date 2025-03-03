import React from 'react';
import { Card, Col } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { convertTitleToSlug } from '@/helpers/string';
import { useRouter } from 'next/navigation';

export interface IPostListHorProps {
    category?: string;
    post: IPost;
}

const PostListHor = ({ category, post }: IPostListHorProps) => {
    const router = useRouter();

    const onClick = (post: IPost) => {
        const slug = convertTitleToSlug(post.title);
        router.push(`${category}/${slug}-${post.id}`);
    };

    return (
        <Card
            onClick={() => {
                onClick?.(post);
            }}
            className={'cursor-pointer'}
        >
            <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-12 gap-4">
                <Col className="flex justify-center md:col-span-4">
                    <div className="flex items-center justify-center">
                        <img
                            src={post?.banner_images[0] ?? "/static/img/logo.png"}
                            alt="post logo"
                        // className="object-cover w-[300px] h-[180px] rounded-1xl"
                        />
                    </div>
                </Col>

                <Col className="sm:col-span-2 md:col-span-8">
                    <h3
                        className="font-semibold text-lg overflow-hidden text-ellipsis"
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            height: '2em',
                            lineHeight: '1.5em',
                        }}
                    >
                        {post?.title}
                    </h3>
                    <div>
                        <span className="text-l">{post?.description}</span>
                    </div>
                    <div className="text-l">
                        <ClockCircleOutlined />{' '}<span>{getLocaleDateTime(post?.created_at)}</span>
                    </div>
                </Col>
            </div>
        </Card>
    );
};

export default PostListHor;
