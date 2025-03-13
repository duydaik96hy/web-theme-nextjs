import React from 'react';
import { Row, Col, Space, Divider } from "antd";
import PostListHor from '@/components/Posts/PostList/PostListHor';
import PostItemVerCenter from '@/components/Posts/PostList/PostItemVerCenter';
import PostIndexListHor from '@/components/Posts/PostList/PostListIndexHor';
import { getRandomPosts, getRecentPosts, getTopViewsPosts } from '@/service/posts';
import PostListVer from '@/components/Posts/PostList/PostListVer';
import PostItemVer from '@/components/Posts/PostList/PostItemVer';

export default async function HomePage() {
  const randomPosts = (await getRandomPosts("limit=8")).data;
  const topViewsPosts = (await getTopViewsPosts("limit=4")).data;

  const recentPostsResp = await getRecentPosts("limit=9");
  const recentPosts = recentPostsResp.data;

  return (
    <div style={{
      // padding: "60px 0px 24px",
      overflow: "hidden"
    }}>
      <div className="hidden lg:hidden xl:block">
        <Row gutter={16} className='w-full border-b-2 border-gray-300 pb-4'>
          {/* <Col xs={0} md={0} xl={6} className='w-full' style={{ height: 'auto', overflow: 'auto' }}>
            <Space direction="vertical" className="w-full">
              <PostListHor posts={randomPosts} isShowDescriptionAndTime={false} />
            </Space>
          </Col> */}
          <Col xs={24} sm={24} md={24} lg={18} xl={18} className='w-full' style={{ height: 'auto', overflow: 'auto' }}>
            {recentPosts.length > 0 ? (
              <PostItemVerCenter post={recentPosts[0]} />
            ) : (
              <p style={{ textAlign: "center" }}>Không có bài nào</p>
            )}
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6} className='w-full' style={{ height: 'auto', overflow: 'auto' }}>
            <Row gutter={16} className="flex items-stretch">
              {recentPosts.slice(1, 4).map((post) => (
                <Col key={post.id} span={24} className="flex flex-col">
                  <PostItemVer post={post} isShowDescriptionAndTime={false} />
                </Col>
              ))}
            </Row>
          </Col>
          {/* <Col xs={24} sm={24} md={12} xl={6} className='w-full' style={{ height: 'auto', overflow: 'auto' }}>
            <Space direction="vertical" className="w-full">
              <PostListVer posts={recentPosts.slice(3, 5)} isShowDescriptionAndTime={false} />
            </Space>
          </Col> */}
        
          {/* <Col xs={0} sm={0} md={0} xl={6} className='w-full' style={{ height: 'auto', overflow: 'auto' }}>
            <Space direction="vertical" className="w-full bg-neutral-200 p-4 rounded-lg">
              <Col xs={24}>
                <h3 className="text-xl font-semibold uppercase underline underline-offset-8 decoration-red-600 mb-2">Tin xem nhiều</h3>
                <PostIndexListHor posts={topViewsPosts} isShowDescriptionAndTime={false} />
              </Col>
            </Space>
          </Col> */}
        </Row>
      </div>
      <div className="lg:block xl:hidden border-b-2 border-gray-300 pb-4">
        {recentPosts.length > 0 ? (
          <PostItemVerCenter post={recentPosts[0]} />
        ) : (
          <p style={{ textAlign: "center" }}>Không có bài nào</p>
        )}
      </div>
      <Row>
        <Col span={24} className='w-full'>
          <Space direction="vertical" className="w-full">
            <h3 className="text-xl font-semibold m-2 uppercase underline underline-offset-8 decoration-red-600">
              Tin xem nhiều</h3>
            {recentPosts.length > 1 ? (
              <Row gutter={16} className="flex items-stretch">
                {topViewsPosts.map((post) => (
                  <Col key={post.id} span={6} className="flex flex-col">
                    <PostItemVer post={post} />
                  </Col>
                ))}
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
