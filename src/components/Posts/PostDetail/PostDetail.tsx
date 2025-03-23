import { Breadcrumb, Col, Row, Space } from 'antd';
import React from 'react';
import PostListVer from '../PostList/PostListVer';
import PostDetailContent from './PostDetailContent';
import { getPostById, getPostsCategories, getRecentPosts, getTopViewsPosts } from '@/service/posts';
import { HomeOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { convertTitleToSlug } from '@/helpers/string';
import PostListHor from '../PostList/PostListHor';
import PostListVerWithTitle from '../PostListWithTitle/PostListVerWithTitle';
import styles from './PostDetail.module.css';

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
    <Col span={24} className={styles.container}>
      <Breadcrumb
        items={[
          { title: <Link href="/"><HomeOutlined /> Trang chủ</Link> },
          { title: <Link href={`/${convertTitleToSlug(categoryObj.name)}`}>{categoryObj.name}</Link> },
          { title: post?.title },
        ]}
        separator=">"
        className={styles.breadcrumb}
      />

      <Row gutter={[10, 10]} className={styles.contentRow}>
        <Col sm={24} lg={24} xl={18} className={styles.mainContent}>
          {post ? (
            <PostDetailContent post={post} categoryName={categoryObj.name} />
          ) : (
            <p>Không có dữ liệu</p>
          )}
        </Col>

        {/* Sidebar Desktop */}
        <Col xs={0} sm={0} md={0} lg={0} xl={6} className={styles.sidebar}>
          <Space direction="vertical" className={styles.sidebarContent}>
            <h3 className={styles.sidebarTitle}>Cùng chuyên mục</h3>
            {sameCategoryPosts.length > 0 ? (
              <PostListVer posts={sameCategoryPosts} isShowDescriptionAndTime={true} />
            ) : (
              <p>Không có dữ liệu</p>
            )}
          </Space>
        </Col>

        {/* Sidebar Mobile */}
        <Col xs={24} sm={24} md={24} lg={24} xl={0} className={styles.mobileSidebar}>
          <h3 className={styles.sidebarTitle}>Cùng chuyên mục</h3>
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
