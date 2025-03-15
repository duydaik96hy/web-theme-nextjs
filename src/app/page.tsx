import React from 'react';
import { Row, Col } from "antd";
import PostItemVerCenter from '@/components/Posts/PostList/PostItemVerCenter';
import { getPostsCategories, getRecentPosts, getTopViewsPosts } from '@/service/posts';
import PostItemVer from '@/components/Posts/PostList/PostItemVer';
import PostListVerWithTitle from '@/components/Posts/PostListWithTitle/PostListVerWithTitle';
import { IPostsCategoryData } from '@/types/post';

export default async function HomePage() {
  const topViewsPosts = (await getTopViewsPosts("limit=4")).data;
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
    <div style={{
      padding: "8px 0px 24px",
      overflow: "hidden"
    }}>
      <div className="hidden lg:hidden xl:block">
        <Row gutter={16} className='w-full border-b-2 border-gray-300 pb-4'>
          <Col xs={24} sm={24} md={24} lg={18} xl={18} className='w-full' style={{ height: 'auto', overflow: 'auto' }}>
            {recentPosts.length > 0 ? (
              <PostItemVerCenter post={recentPosts[0]} />
            ) : (
              <p style={{ textAlign: "center" }}>Không có bài nào</p>
            )}
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6} className='w-full' style={{ height: 'auto', overflow: 'auto' }}>
            <Row gutter={[8, 8]} className="flex items-stretch w-full divide-y divide-gray-300">
              {recentPosts.slice(1, 4).map((post) => (
                <Col key={post.id} span={24} className="flex flex-col">
                  <PostItemVer post={post} isShowDescriptionAndTime={false} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
      <div className="lg:block xl:hidden border-b-2 border-gray-300 pb-4">
        {recentPosts.length > 0 ? (
          <PostItemVerCenter post={recentPosts[0]} />
        ) : (
          <p style={{ textAlign: "center" }}>Không có bài nào</p>
        )}
      </div>
      <PostListVerWithTitle posts={topViewsPosts.slice(0, 4)} title="Tin nổi bật" />
      {listDataCategory.map((item, index) => (
        <PostListVerWithTitle key={index} posts={item.posts} title={item.category.name} />
      ))}
      {/* <div className="w-full xl:hidden mt-4">
        <Space direction="vertical" className="w-full">
          <Col xs={24}>
            <h3 className="text-xl font-semibold uppercase underline underline-offset-8 decoration-red-600 mb-2">Tin xem nhiều</h3>
            <PostIndexListHor posts={topViewsPosts} isShowDescriptionAndTime={false} />
          </Col>
        </Space>
      </div> */}
    </div>
  );

};
