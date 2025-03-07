import React from 'react';
import { Row, Col, Layout, Pagination, Space, Grid, Skeleton, Typography, Divider } from "antd";
import PostListVer from '@/components/Posts/PostList/PostListVer';
import { Content } from "antd/es/layout/layout";
import PostListHor from '@/components/Posts/PostList/PostListHor';
import PostItemHor from '@/components/Posts/PostList/PostItemHor';
import PostItemVer from '@/components/Posts/PostList/PostItemVer';
import PostItemHorCenter from '@/components/Posts/PostList/PostItemHorCenter';
import PostListIndexHor from '@/components/Posts/PostList/PostListIndexHor';
import { getPostsCategories, getRecentPosts, getTopViewsPosts } from '@/service/posts';

interface CategoryPostProps {
    params: { category: string };
}

const HomePage = async ({ params }: CategoryPostProps) => {
    const { category } = await params;
    const postCategories = await getPostsCategories("");
    const categoryObj = postCategories.find((item) => item.code.toLocaleLowerCase() === category);

    const posts = await getRecentPosts(`category=${categoryObj?.id}`);
    const topViewsPosts = await getTopViewsPosts(`category=${categoryObj?.id}&limit=5`);

    return (
        <div style={{ padding: "60px 12px 24px", overflow: "hidden" }}>
            <Content>
                <Row gutter={10}>
                    <Col xs={24} md={24} lg={18} className='w-full'>
                        <Space direction="vertical" className="w-full">
                            <span className="text-2xl font-semibold uppercase underline underline-offset-8 decoration-red-600">{categoryObj?.name}</span>
                            <Col xs={24}>
                                <Col>
                                    {posts.length > 0 ? (
                                        <PostItemHorCenter post={posts[0]} />
                                    ) : (
                                        <></>
                                    )}
                                    <Row gutter={10}>
                                        <Col xs={24} sm={12} md={8}>
                                            {posts.length > 1 ? (
                                                <PostItemVer post={posts[1]} />
                                            ) : (
                                                <></>
                                            )}
                                        </Col>
                                        <Col xs={24} sm={12} md={8}>
                                            {posts.length > 2 ? (
                                                <PostItemVer post={posts[2]} />
                                            ) : (
                                                <></>
                                            )}
                                        </Col>
                                        <Col xs={24} sm={12} md={8}>
                                            {posts.length > 1 ? (
                                                <PostItemVer post={posts[3]} />
                                            ) : (
                                                <></>
                                            )}
                                        </Col>
                                    </Row>
                                    <PostListHor posts={posts} />
                                </Col>
                            </Col>
                        </Space>
                    </Col>
                    <Col xs={24} md={24} lg={6}>
                        <Space direction="vertical" className="w-full bg-neutral-200 p-4 rounded-lg">
                            <Col xs={24}>
                                <h3 className="text-xl font-semibold uppercase underline underline-offset-8 decoration-red-600 mb-2">Tin nổi bật</h3>
                                <PostListIndexHor posts={topViewsPosts} />
                            </Col>
                        </Space>
                        <Divider />
                        <img
                            src="https://mediabhy.mediatech.vn/upload/image/202303/medium/50928_banner_moi_quang_cao_01_14564616.jpg"
                            alt="ads"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Col>
                </Row>
            </Content>
        </div>
    );

};

export default HomePage;
