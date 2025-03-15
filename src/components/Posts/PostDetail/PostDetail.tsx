import { Breadcrumb, Col, Row, Space } from 'antd';
import React from 'react';
import PostListVer from '../PostList/PostListVer';
import PostDetailContent from './PostDetailContent';
import { getPostById, getPostsCategories, getRecentPosts, getTopViewsPosts } from '@/service/posts';
import { HomeOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { convertImageUrl, convertTitleToSlug } from '@/helpers/string';
import PostListHor from '../PostList/PostListHor';
import Head from 'next/head';
import PostListVerWithTitle from '../PostListWithTitle/PostListVerWithTitle';

export interface IPostDetailProps {
  postId: string;
}

const PostDetail = async ({ postId }: IPostDetailProps) => {
  const post = await getPostById(postId);
  const sameCategoryPosts = (await getRecentPosts(`category=${post?.category}&limit=5`)).data;
  const topViewsPosts = (await getTopViewsPosts("limit=4")).data;
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
        className='border-b-2 border-gray-200 mb-4' />
      <Row gutter={[10, 10]} className="w-full mt-4 mb-4 border-b-2 border-gray-200">
        <Col sm={24} lg={24} xl={18} className='w-full'>
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
        <Col xs={0} sm={0} md={0} lg={0} xl={6} className='w-full border-l-2 border-gray-200 hidden xl:block' style={{ height: '100%', overflow: 'auto' }}>
          <Space direction="vertical" className="w-full" style={{ overflow: 'auto' }}>
            <h3 className="text-xl text-center font-semibold uppercase underline underline-offset-8 decoration-red-600 mb-2">Cùng chuyên mục</h3>
            {sameCategoryPosts.length > 0 ? (
              <PostListVer posts={sameCategoryPosts} isShowDescriptionAndTime={true} />
            ) : (
              <p>Không có dữ liệu</p>
            )}
          </Space>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={0} className='w-full mt-2 pt-4 border-t-2 border-gray-200 xl:hidden' style={{ height: '100%' }}>
          <h3 className="text-xl text-center font-semibold uppercase underline underline-offset-8 decoration-red-600 mb-2">Cùng chuyên mục</h3>
          {sameCategoryPosts.length > 0 ? (
            <PostListHor posts={sameCategoryPosts} isShowDescriptionAndTime={true} />
          ) : (
            <p>Không có dữ liệu</p>
          )}
        </Col>
      </Row>
      <PostListVerWithTitle posts={topViewsPosts.slice(0, 4)} title="Tin xem nhiều trong chuyên mục" />
    </Col>
  );
};

export default PostDetail;
