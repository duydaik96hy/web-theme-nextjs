import { Breadcrumb, Col, Row, Space } from 'antd';
import React from 'react';
import PostListVer from '../PostList/PostListVer';
import PostDetailContent from './PostDetailContent';
import { getPostById, getPostsCategories, getRecentPosts } from '@/service/posts';
import { HomeOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { convertTitleToSlug } from '@/helpers/string';
import PostListHor from '../PostList/PostListHor';

export interface IPostDetailProps {
  postId: string;
}

const PostDetail = async ({ postId }: IPostDetailProps) => {
  const post = await getPostById(postId);
  const sameCategoryPosts = (await getRecentPosts(`category=${post?.category}`)).data;
  const postCategories = await getPostsCategories("");
  const categoryObj = postCategories.find((item) => item.id === post?.category) ?? { name: 'Khác' };

  return (
    <Col span={24} className="w-full">
      <Breadcrumb
        items={[
          {
            title: <Link href="/"><HomeOutlined /> Trang chủ</Link>,
          },
          { title: <Link href={`/${convertTitleToSlug(categoryObj.name)}`}>{categoryObj.name}</Link> },
          { title: post?.title },
        ]}
        style={{ fontSize: "16px" }}
        separator=">"
        className='border-b-2 border-gray-200 mb-4'
      />
      <Row gutter={[10, 10]} className="w-full mt-4">
        <Col sm={24} md={24} xl={18} className='w-full'>
          {/* <Row className='border-b-2 border-gray-200 mb-4'>
            <Col span={24} className='w-full pt-2'>
              <span className='text-2xl font-semibold uppercase'>{categoryObj.name}</span>
            </Col>
          </Row> */}
          {post ? (
            <PostDetailContent post={post} categoryName={categoryObj.name} />
          ) : (
            <p>Không có dữ liệu</p>
          )}
        </Col>
        <Col sm={24} md={24} xl={6} className='w-full' style={{ height: '100%', overflow: 'auto' }}>
          <Space direction="vertical" className="w-full" style={{ overflow: 'auto' }}>
            <h3 className="text-xl font-semibold uppercase underline underline-offset-8 decoration-red-600 mb-2">Cùng chuyên mục</h3>
            {sameCategoryPosts.length > 0 ? (
              <Space direction="vertical" className="w-full">
                <div className="hidden lg:block xl:hidden">
                  <PostListHor posts={sameCategoryPosts} isShowDescriptionAndTime={true} />
                </div>
                <div className="hidden xl:block">
                  <PostListVer posts={sameCategoryPosts} isShowDescriptionAndTime={true} />
                </div>
              </Space>
            ) : (
              <p>Không có dữ liệu</p>
            )}
          </Space>
        </Col>
      </Row>
    </Col>
  );
};

export default PostDetail;
