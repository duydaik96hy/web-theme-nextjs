import React from 'react';
import { Row, Col, Space, Divider } from "antd";
import PostListHor from '@/components/Posts/PostList/PostListHor';
import PostListVerCenter from '@/components/Posts/PostList/PostItemVerCenter';
import PostIndexListHor from '@/components/Posts/PostList/PostListIndexHor';
import { getRandomPosts, getRecentPosts, getTopViewsPosts } from '@/service/posts';

export default async function HomePage() {
  const randomPosts = (await getRandomPosts("limit=8")).data;
  const topViewsPosts = (await getTopViewsPosts("limit=5")).data;

  const recentPostsResp = await getRecentPosts("limit=9");
  const recentPosts = recentPostsResp.data;

  return (
    <div style={{
      padding: "60px 0px 24px",
      overflow: "hidden"
    }}>
      <div className="hidden lg:hidden xl:block">
        <Row gutter={10} className='w-full border-b-2 border-gray-300 pb-4'>
          <Col xs={0} md={0} xl={6} className='w-full' style={{ height: 'auto', overflow: 'auto' }}>
            <Space direction="vertical" className="w-full">
              <PostListHor posts={randomPosts} isShowDescriptionAndTime={false} />
            </Space>
          </Col>
          <Col xs={24} sm={24} md={24} xl={12} className='w-full border-l-2 border-gray-300' style={{ height: 'auto', overflow: 'auto' }}>
            {recentPosts.length > 0 ? (
              <PostListVerCenter post={recentPosts[0]} />
            ) : (
              <p style={{ textAlign: "center" }}>Không có bài nào</p>
            )}
          </Col>
          <Col xs={0} sm={0} md={0} xl={6} className='w-full' style={{ height: 'auto', overflow: 'auto' }}>
            <Space direction="vertical" className="w-full bg-neutral-200 p-4 rounded-lg">
              <Col xs={24}>
                <h3 className="text-xl font-semibold uppercase underline underline-offset-8 decoration-red-600 mb-2">Tin xem nhiều</h3>
                <PostIndexListHor posts={topViewsPosts} isShowDescriptionAndTime={false} />
              </Col>
            </Space>
          </Col>
        </Row>
      </div>
      <div className="lg:block xl:hidden border-b-2 border-gray-300 pb-4">
        {recentPosts.length > 0 ? (
          <PostListVerCenter post={recentPosts[0]} />
        ) : (
          <p style={{ textAlign: "center" }}>Không có bài nào</p>
        )}
      </div>
      <Row>
        <Col span={24} className='w-full'>
          <Space direction="vertical" className="w-full">
            <h3 className="text-xl font-semibold text-center m-4 uppercase underline underline-offset-8 decoration-red-600 justify-center">
              Tin mới nhất</h3>
            {recentPosts.length > 1 ? (
              <Row gutter={8} className="w-full">
                <Col span={12}>
                  <PostListHor posts={recentPosts.slice(1, 5)} isShowDescriptionAndTime={true} />
                </Col>
                <Col span={12}>
                  <PostListHor posts={recentPosts.slice(5, 9)} isShowDescriptionAndTime={true} />
                </Col>
              </Row>
            ) : (
              <p style={{ textAlign: "center" }}>Không có bài nào</p>
            )}
          </Space>
        </Col>
      </Row>
      <div className="w-full xl:hidden mt-4">
        <Space direction="vertical" className="w-full">
          <Col xs={24}>
            <h3 className="text-xl font-semibold uppercase underline underline-offset-8 decoration-red-600 mb-2">Tin xem nhiều</h3>
            <PostIndexListHor posts={topViewsPosts} isShowDescriptionAndTime={false} />
          </Col>
        </Space>
      </div>
    </div>
  );

};
