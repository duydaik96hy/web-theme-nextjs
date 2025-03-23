import React from 'react';
import { Row, Col, Space } from "antd";
import PostItemVerCenter from '@/components/Posts/PostList/PostItemVerCenter';
import { getPostsCategories, getRecentPosts, getTopViewsPosts } from '@/service/posts';
import PostItemVer from '@/components/Posts/PostList/PostItemVer';
import PostListVerWithTitle from '@/components/Posts/PostListWithTitle/PostListVerWithTitle';
import { IPostsCategoryData } from '@/types/post';
import styles from './home_page.module.css';
import PostListIndexHor from '@/components/Posts/PostList/PostListIndexHor';

export default async function HomePage() {
  const topViewsPosts = (await getTopViewsPosts("limit=5")).data;
  const recentPostsResp = await getRecentPosts("limit=4");
  const recentPosts = recentPostsResp.data;

  /// Get post categories
  let listDataCategory: IPostsCategoryData[] = [];
  const postCategories = await getPostsCategories("");
  const categoryPromises = postCategories.map(async (category) => {
    const data = await getRecentPosts(`category=${category.id}&limit=4`);
    return { category: category, posts: data.data };
  });
  listDataCategory = await Promise.all(categoryPromises);

  return (
    <div className={styles.container}>
      <div className={styles.desktopOnly}>
        <Row gutter={16} className={styles.fullWidth}>
          <Col xs={24} sm={24} md={12} lg={6} xl={6} className={styles.fullWidth}>
            <Row gutter={[8, 8]} className={styles.flexStretch}>
              {recentPosts.slice(1, 4).map((post) => (
                <Col key={post.id} span={24} className={styles.flexColumn}>
                  <PostItemVer post={post} isShowDescriptionAndTime={false} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} lg={18} xl={18} className={styles.fullWidth}>
            {recentPosts.length > 0 ? (
              <PostItemVerCenter post={recentPosts[0]} />
            ) : (
              <p style={{ textAlign: "center" }}>Không có bài nào</p>
            )}
          </Col>
        </Row>
      </div>
      <div className={styles.mobileOnly}>
        {recentPosts.length > 0 ? (
          <PostItemVerCenter post={recentPosts[0]} />
        ) : (
          <p style={{ textAlign: "center" }}>Không có bài nào</p>
        )}
      </div>
      <Row gutter={16} className={styles.fullWidth}>
        <Col xs={24} md={24} lg={18} className={styles.leftContent}>
          {listDataCategory.map((item, index) => (
            <PostListVerWithTitle key={index} posts={item.posts} title={item.category.name} />
          ))}
        </Col>
        <Col xs={24} md={24} lg={6} className={styles.rightSidebar}>
          <Space direction="vertical" className={styles.sidebarBox}>
            <Col xs={24}>
              <h3 className={styles.sidebarTitle}>Tin xem nhiều</h3>
              {topViewsPosts.length > 0 ? <PostListIndexHor posts={topViewsPosts} /> : <p>Không có bài viết nào</p>}
            </Col>
          </Space>
        </Col>
      </Row>
    </div>
  );
};
