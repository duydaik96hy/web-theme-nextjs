import React from 'react';
import { Row, Col, Space } from "antd";
import PostListHor from '@/components/Posts/PostList/PostListHor';
import PostListVerCenter from '@/components/Posts/PostList/PostItemVerCenter';
import PostIndexListHor from '@/components/Posts/PostList/PostListIndexHor';
import { getRandomPosts, getRecentPosts, getTopViewsPosts } from '@/service/posts';

export default async function HomePage() {
  const recentPosts = await getRecentPosts("");
  const topViewsPosts = await getTopViewsPosts("");
  const randomPosts = await getRandomPosts("");

  return (
    <div style={{
      padding: "64px 12px 24px",
      overflow: "hidden"
    }}>
      <Row gutter={0} className='w-full border-b-2 border-gray-300'>
        <Col xs={0} md={0} xl={6} className='w-full' style={{ height: '65vh', overflow: 'auto' }}>
          <Space direction="vertical" className="w-full">
            <PostListHor posts={randomPosts} isShowDescriptionAndTime={false} />
          </Space>
        </Col>
        <Col xs={24} sm={24} md={24} xl={13} className='w-full pb-6 pr-4 pl-4' style={{ height: 'auto', overflow: 'auto' }}>
          <Space direction="vertical" className="w-full">
            <Col xs={24}>
              {recentPosts.length > 0 ? (
                <Col>
                  <PostListVerCenter post={recentPosts[0]} />
                </Col>
              ) : (
                <p style={{ textAlign: "center" }}>Không có bài nào</p>
              )}
            </Col>
          </Space>
        </Col>
        <Col xs={0} sm={0} md={0} xl={5} className='w-full bg-neutral-200 p-4 rounded-lg' style={{ height: '65vh', overflow: 'auto' }}>
          <Space direction="vertical" className="w-full">
            <Col xs={24}>
              <h3 className="text-xl font-semibold uppercase underline underline-offset-8 decoration-red-600 mb-2">Tin xem nhiều</h3>
              <PostIndexListHor posts={topViewsPosts} isShowDescriptionAndTime={false} />
            </Col>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={24} className='w-full mt-4'>
          <Space direction="vertical" className="w-full">
            <Col xs={24}>
              <h3 className="text-xl font-semibold text-center m-4">Tin mới nhất</h3>
              <PostListHor posts={recentPosts.slice(1)} isShowDescriptionAndTime={true} />
            </Col>
          </Space>
        </Col>
      </Row>
      <div className="w-full lg:hidden xl:invisible">
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
