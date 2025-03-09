import React from 'react';
import { Row, Col, Layout, Pagination, Space, Grid, Skeleton, Typography, Divider, Breadcrumb } from "antd";
import { Content } from "antd/es/layout/layout";
import PostListHor from '@/components/Posts/PostList/PostListHor';
import PostItemVer from '@/components/Posts/PostList/PostItemVer';
import PostItemHorCenter from '@/components/Posts/PostList/PostItemHorCenter';
import PostListIndexHor from '@/components/Posts/PostList/PostListIndexHor';
import { getPostsCategories, getRecentPosts, getTopViewsPosts } from '@/service/posts';
import { convertTitleToSlug } from '@/helpers/string';
import Link from 'next/link';
import { HomeOutlined } from '@ant-design/icons';
import PostListVer from '@/components/Posts/PostList/PostListVer';

interface CategoryPostProps {
    params: { category: string };
}

const HomePage = async ({ params }: CategoryPostProps) => {
    const { category } = await params;
    const postCategories = await getPostsCategories("");
    const categoryObj = postCategories.find((item) => convertTitleToSlug(item.name) === category);

    const posts = (await getRecentPosts(`category=${categoryObj?.id}&limit=10`)).data;
    const topViewsPosts = (await getTopViewsPosts(`category=${categoryObj?.id}&limit=5`)).data;

    return (
        <div style={{ padding: "45px 0px 24px", overflow: "hidden" }}>
            <Breadcrumb
                items={[
                    {
                        title: <Link href="/"><HomeOutlined /> Trang chủ</Link>,
                    },
                    { title: categoryObj?.name },
                ]}
                style={{ fontSize: "16px" }}
                separator=">"
                className='border-b-2 border-gray-200 mb-4'
            />
            <Content>
                <Row gutter={10} className='w-full mt-4'>
                    <Col xs={24} md={24} lg={18} className='w-full'>
                        <Space direction="vertical" className="w-full">
                            {/* <span className="text-2xl font-semibold uppercase underline underline-offset-8 decoration-red-600">{categoryObj?.name}</span> */}
                            {posts.length > 0 ? (
                                <PostItemHorCenter post={posts[0]} />
                            ) : (
                                <p>Không có bài viết nào</p>
                            )}

                            {/* Grid hiển thị các bài viết */}
                            {posts.length > 1 &&
                                <>
                                    <Col xs={0} sm={0} md={24}>
                                        <Row gutter={8} className="flex items-stretch">
                                            <PostListVer posts={posts.slice(1, 4)} />
                                        </Row>
                                    </Col>
                                    <Col xs={24} sm={24} md={0}>
                                        <PostListHor posts={posts.slice(1, 4)} />
                                    </Col>
                                </>
                            }

                            <PostListHor posts={posts.slice(4)} />
                        </Space>
                    </Col>
                    <Col xs={24} md={24} lg={6}>
                        <Space direction="vertical" className="w-full bg-neutral-200 p-4 rounded-lg">
                            <Col xs={24}>
                                <h3 className="text-xl font-semibold uppercase underline underline-offset-8 decoration-red-600 mb-2">Tin nổi bật</h3>
                                {topViewsPosts.length > 0 ? (
                                    <PostListIndexHor posts={topViewsPosts} />
                                ) : (
                                    <p>Không có bài viết nào</p>
                                )}
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
