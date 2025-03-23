import React from 'react';
import { Row, Col, Space, Breadcrumb } from "antd";
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
import Pagination from '@/components/Common/Pagination';
import styles from './category_page.module.css';
import PostItemVerCenter from '@/components/Posts/PostList/PostItemVerCenter';

interface CategoryPostProps {
    params: { category: string };
    searchParams: { page?: string };
}

// Lấy dữ liệu cho cả trang và metadata trong cùng 1 API call
async function getPageData(categorySlug: string, currentPage: number = 1) {
    const postCategories = await getPostsCategories(""); // Gọi API 1 lần duy nhất
    const categoryObj = postCategories.find((item) => convertTitleToSlug(item.name) === categorySlug)
        ?? { id: "", name: "Khác", description: "Khác", code: "tin tức, bài viết", created_at: new Date(), updated_at: new Date() };

    // Gọi nhiều API cùng lúc để giảm thời gian chờ
    const [recentPosts, topViewsPosts] = await Promise.all([
        getRecentPosts(`category=${categoryObj.id}&limit=10&page=${currentPage}`),
        getTopViewsPosts(`category=${categoryObj.id}&limit=6`)
    ]);

    return { categoryObj, posts: recentPosts.data, postsPagination: recentPosts.pagination, topViewsPosts: topViewsPosts.data };
}

// Chia sẻ dữ liệu với `generateMetadata`
export async function generateMetadata({ params }: CategoryPostProps) {
    const { category } = await params;
    const { categoryObj } = await getPageData(category);
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

const CategoryPage = async ({ params, searchParams }: CategoryPostProps) => {
    const { category } = await params;
    const { page } = await searchParams;
    const currentPage = Number(page) || 1;
    const { categoryObj, posts, postsPagination, topViewsPosts } = await getPageData(category, currentPage); // API chỉ gọi 1 lần

    const totalPages = postsPagination.last_page;

    return (
        <div className={styles.container}>
            <Breadcrumb
                items={[
                    { title: <Link href="/"><HomeOutlined /> Trang chủ</Link> },
                    { title: categoryObj.name },
                ]}
                separator=">"
                className={styles.breadcrumb}
            />
            <Content>
                <Row gutter={10} className={styles.mainContent}>
                    <Col xs={24} md={24} lg={18} className={styles.leftContent}>
                        <Space direction="vertical">
                            {/* {posts.length > 0 ? <PostItemHorCenter post={posts[0]} /> : <p>Không có bài viết nào</p>} */}
                            <div className={styles.desktopOnly}>
                                <Row gutter={16} className={styles.fullWidth}>
                                    <Col xs={24} sm={24} md={24} lg={18} xl={18} className={styles.fullWidth}>
                                        {posts.length > 0 ? (
                                            <PostItemVerCenter post={posts[0]} />
                                        ) : (
                                            <p style={{ textAlign: "center" }}>Không có bài nào</p>
                                        )}
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={6} xl={6} className={styles.fullWidth}>
                                        <Row gutter={[8, 8]} className={styles.flexStretch}>
                                            {posts.slice(1, 4).map((post) => (
                                                <Col key={post.id} span={24} className={styles.flexColumn}>
                                                    <PostItemVer post={post} isShowDescriptionAndTime={false} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.mobileOnly}>
                                {posts.length > 0 ? (
                                    <PostItemVerCenter post={posts[0]} />
                                ) : (
                                    <p style={{ textAlign: "center" }}>Không có bài nào</p>
                                )}
                            </div>

                            {/* Grid hiển thị bài viết */}
                            <div className={styles.postGrid}>
                                {/* <Col xs={0} sm={0} md={24}>
                                    <Row gutter={8} className={styles.flexContainer}>
                                        {posts.slice(1, 4).map((post) => (
                                            <Col key={post.id} span={8} className={styles.flexColumn}>
                                                <PostItemVer post={post} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Col> */}

                                <Col xs={24} sm={24} md={0}>
                                    <PostListHor posts={posts.slice(1, 4)} />
                                </Col>
                            </div>

                            <PostListHor posts={posts.slice(4)} />
                        </Space>

                        {/* PHÂN TRANG */}
                        <Pagination currentPage={currentPage} totalPages={totalPages} />
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
            </Content>
        </div>
    );
};

export default CategoryPage;
