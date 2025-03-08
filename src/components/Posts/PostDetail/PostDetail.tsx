import { Col, Row, Space } from 'antd';
import React from 'react';
import PostListVer from '../PostList/PostListVer';
import PostDetailContent from './PostDetailContent';
import { getPostById, getPostsCategories, getRecentPosts } from '@/service/posts';

export interface IPostDetailProps {
  postId: string;
}

const PostDetail = async ({ postId }: IPostDetailProps) => {
  const post = await getPostById(postId);
  const sameCategoryPosts = await getRecentPosts(`category=${post?.category}`);
  const postCategories = await getPostsCategories("");
  const categoryObj = postCategories.find((item) => item.id === post?.category) ?? { name: 'Khác' };

  return (
    <Row gutter={[16, 16]} className="w-full pt-2">
      <Col sm={24} md={24} lg={18} className='w-full'>
        <Row className='border-b-2 border-gray-200 mb-4'>
          <Col span={24} className='w-full pt-2'>
            <span className='text-2xl font-semibold uppercase'>{categoryObj.name}</span>
          </Col>
        </Row>
        {post ? (
          <PostDetailContent post={post} categoryName={categoryObj.name}/>
        ) : (
          <p>Không có dữ liệu</p>
        )}
      </Col>
      <Col sm={24} md={24} lg={6} className='w-full' style={{ height: '100%', overflow: 'auto' }}>
        <Space direction="vertical" className="w-full" style={{ height: 'vh', overflow: 'auto' }}>
          <Col xs={24} md={24}>
            <h3 className="text-xl font-semibold uppercase underline underline-offset-8 decoration-red-600 mb-2">Cùng chuyên mục</h3>
            {sameCategoryPosts.length > 0 ? (
              <Space direction="vertical" className="w-full">
                <PostListVer posts={sameCategoryPosts} isShowDescriptionAndTime={true} />
              </Space>
            ) : (
              <p>Không có dữ liệu</p>
            )}
          </Col>
        </Space>
      </Col>
    </Row>
  );
};

export default PostDetail;
