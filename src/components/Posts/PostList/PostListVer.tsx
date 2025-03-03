import React from 'react';
import PostItemVer from './PostItemVer';
import { Col, Row, Divider } from 'antd';
import { useRouter } from 'next/navigation';
import { IPost } from '@/types/post';
import { convertTitleToSlug } from '@/helpers/string';

export interface IPostListVerProps {
    allowRedirect?: boolean;
    category?: string;
    posts: IPost[];
}

const PostListVer = ({ allowRedirect = false, category, posts }: IPostListVerProps) => {
    const router = useRouter();

    const onClick = (post: IPost) => {
        const slug = convertTitleToSlug(post.title);
        router.push(`${category}/${slug}-${post.id}`);
    };
    return (
        <Col span={24} className="w-full">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <Row gutter={[8, 8]} key={post.id}>
                        <PostItemVer post={post} category={category} onClick={() => onClick(post)}  />
                    </Row>
                ))
            ) : (
                <div style={{ textAlign: 'center', width: '100%', padding: '10px' }}>Không có dữ liệu</div>
            )}
        </Col>
    );
};

export default PostListVer;
