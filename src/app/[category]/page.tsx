import React from 'react';
import { Row, Col, Layout, Space, Divider, Breadcrumb } from "antd";
import { Content } from "antd/es/layout/layout";
import PostListHor from '@/components/Posts/PostList/PostListHor';
import PostItemVer from '@/components/Posts/PostList/PostItemVer';
import PostItemHorCenter from '@/components/Posts/PostList/PostItemHorCenter';
import PostListIndexHor from '@/components/Posts/PostList/PostListIndexHor';
import { getPostsCategories, getRecentPosts, getTopViewsPosts } from '@/service/posts';
import { convertTitleToSlug } from '@/helpers/string';
import Link from 'next/link';
import { HomeOutlined } from '@ant-design/icons';
import { siteUrl } from '@/constants/common';

interface CategoryPostProps {
    params: { category: string };
}

// Lấy dữ liệu cho cả trang và metadata trong cùng 1 API call
async function getCategoryData(categorySlug: string) {
    const postCategories = await getPostsCategories(""); // Gọi API 1 lần duy nhất
    const categoryObj = postCategories.find((item) => convertTitleToSlug(item.name) === categorySlug)
        ?? { id: "", name: "Khác", description: "Khác", code: "tin tức, bài viết", created_at: new Date(), updated_at: new Date() };

    // Gọi nhiều API cùng lúc để giảm thời gian chờ
    const [recentPosts, topViewsPosts] = await Promise.all([
        getRecentPosts(`category=${categoryObj.id}&limit=10`),
        getTopViewsPosts(`category=${categoryObj.id}&limit=6`)
    ]);

    return { categoryObj, posts: recentPosts.data, topViewsPosts: topViewsPosts.data };
}

// Chia sẻ dữ liệu với `generateMetadata`
export async function generateMetadata({ params }: CategoryPostProps) {
    const { category } = await params;
    const { categoryObj } = await getCategoryData(category);
    const currentUrl = `${siteUrl}/${category}`;

    return {
        title: categoryObj.name,
        description: categoryObj.description,
        keywords: categoryObj.code,
        openGraph: {
            title: categoryObj.name,
            description: categoryObj.description,
            type: "website",
            url: currentUrl,
            images: [],
            article: {
                publishedTime: categoryObj.created_at,
                modifiedTime: categoryObj.updated_at,
                section: "Danh mục bài viết",
                tags: categoryObj.name,
            },
        },
    };
}

const HomePage = async ({ params }: CategoryPostProps) => {
    const { category } = await params;
    const { categoryObj, posts, topViewsPosts } = await getCategoryData(category); // API chỉ gọi 1 lần

    return (
        <div style={{ padding: "45px 0px 24px", overflow: "hidden" }}>
            <Breadcrumb
                items={[
                    { title: <Link href="/"><HomeOutlined /> Trang chủ</Link> },
                    { title: categoryObj.name },
                ]}
                separator=">"
                style={{ fontSize: "16px" }}
                className='border-b-2 border-gray-200 mb-4'
            />
            <Content>
                <Row gutter={10} className='w-full mt-4'>
                    <Col xs={24} md={24} lg={18} className='w-full border-r-2 border-gray-200'>
                        <Space direction="vertical" className="w-full">
                            {posts.length > 0 ? <PostItemHorCenter post={posts[0]} /> : <p>Không có bài viết nào</p>}

                            {/* Grid hiển thị bài viết */}
                            <div className='border-b-2 border-gray-200 mb-4'>
                                <Col xs={0} sm={0} md={24}>
                                    <Row gutter={8} className="flex items-stretch">
                                        {posts.slice(1, 4).map((post) => (
                                            <Col key={post.id} span={8} className="flex flex-col">
                                                <PostItemVer post={post} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>

                                <Col xs={24} sm={24} md={0}>
                                    <PostListHor posts={posts.slice(1, 4)} />
                                </Col>
                            </div>

                            <PostListHor posts={posts.slice(4)} />
                        </Space>
                    </Col>

                    <Col xs={24} md={24} lg={6}>
                        <Space direction="vertical" className="w-full bg-neutral-200 p-4 rounded-lg">
                            <Col xs={24}>
                                <h3 className="text-xl font-semibold uppercase underline underline-offset-8 decoration-red-600 mb-2">Tin xem nhiều</h3>
                                {topViewsPosts.length > 0 ? <PostListIndexHor posts={topViewsPosts} /> : <p>Không có bài viết nào</p>}
                            </Col>
                        </Space>
                    </Col>
                </Row>
            </Content>
        </div>
    );
};

export default HomePage;
