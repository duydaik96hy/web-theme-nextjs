import React from 'react';
import PostItem from './PostItem';
import { Col, Row, Divider } from 'antd';
import { useRouter } from 'next/navigation';
import { IPost } from '@/types/post';
import { convertTitleToSlug } from '@/helpers/string';

export interface IJobListProps {
    allowRedirect?: boolean;
    category?: string;
    posts: IPost[];
}

const JobList = ({ allowRedirect = false, category, posts }: IJobListProps) => {
    const router = useRouter();

    const onClick = (post: IPost) => {
        const slug = convertTitleToSlug(post.title);
        router.push(`/du-an/${category}/${slug}-${post.id}`);
    };
    return (
        <Row gutter={[16, 16]} className="w-full">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <Col span={24} key={post.id}>
                        <PostItem post={post} category={category} onClick={() => onClick(post)}  />
                    </Col>
                ))
            ) : (
                <div style={{ textAlign: 'center', width: '100%', padding: '20px' }}>Không có dữ liệu</div>
            )}
        </Row>
    );
};

export default JobList;
