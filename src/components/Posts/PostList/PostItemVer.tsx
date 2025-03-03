import React from 'react';
import { Card, Col, Space } from 'antd';
import { IPost } from '@/types/post';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getLocaleDateTime } from '@/helpers/time';
import { useRouter } from 'next/navigation';
import { convertTitleToSlug } from '@/helpers/string';

export interface IPostListVerProps {
    post: IPost;
}

const PostListVer = ({ post }: IPostListVerProps) => {
    const router = useRouter();

    const onClick = (post: IPost) => {
        const slug = convertTitleToSlug(post.title);
        router.push(`${post.category}/${slug}-${post.id}`);
    };

    return (
        <Card
            onClick={() => {
                onClick?.(post);
            }}
            className={'cursor-pointer'}
        >
            <Col className="justify-center">
                <Space direction="vertical" className="w-full">
                    <img
                        src={post?.banner_images[0] ?? "/static/img/logo.png"}
                        alt="post logo"
                    // className="object-cover w-[300px] h-[180px] rounded-1xl"
                    />
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
                    <div className="text-l">{post?.description}</div>
                    <div className="text-l">
                        <ClockCircleOutlined />{' '}<span>{getLocaleDateTime(post?.created_at)}</span>
                    </div>
                </Space>
            </Col>
        </Card>
    );
};

export default PostListVer;
