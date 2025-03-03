'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col, Layout, Pagination, Space, Grid, Skeleton, Typography, Divider } from "antd";
import PostListVer from '@/components/Posts/PostList/PostListVer';
import { Content } from "antd/es/layout/layout";
import { IPost, IPostFilter } from '@/types/post';
import { useParams } from 'next/navigation';
import PostListHor from '@/components/Posts/PostList/PostListHor';
import PostItemHor from '@/components/Posts/PostList/PostItemHor';
import PostItemVer from '@/components/Posts/PostList/PostItemVer';

const { useBreakpoint } = Grid;

const HomePage = () => {
    const screens = useBreakpoint();
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<IPost[]>([]);

    const [paginationPost, setPaginationPost] = useState({
        page_size: 6,
        current_page: 1,
        total_items: 0,
    });

    const [query, setQuery] = useState<IPostFilter>({});
    const params = useParams(); // This will return a Promise
    const category = params.category as string;

    useEffect(() => {
        const fetchData = () => {
            setIsLoading(true);
            setTimeout(() => {
                const resp = {
                    "success": true,
                    "status": 200,
                    "message": null,
                    "data": {
                        "data": [
                            {
                                "banner_images": [
                                    "https://media.tapchitaichinh.vn/w1480/images/upload/2024/02/21/bds-ha-noi-17080891791471270135244.jpg"
                                ],
                                "title": "Nha can ban gap nhe",
                                "content": "nha rong, thoang mat, co nha ve sinh",
                                "description": "nha rong, thoang mat, co nha ve sinh thoang mat",
                                "views": 0,
                                "keyword": "nha ban",
                                "category": "nha",
                                "web": "https://www.google.com",
                                "random_key": 0,
                                "source": "https://www.google.com",
                                "deleted_at": "",
                                "created_at": "2024-06-17 16:22:06",
                                "updated_at": "2024-06-17 17:31:19",
                                "id": "6670003e4dfde8ecf1fcf3267"
                            },
                            {
                                "banner_images": [
                                    "https://media.tapchitaichinh.vn/w1480/images/upload/2024/02/21/bds-ha-noi-17080891791471270135244.jpg"
                                ],
                                "title": "Nha can ban gap nhe",
                                "content": "nha rong, thoang mat, co nha ve sinh",
                                "description": "nha rong, thoang mat, co nha ve sinh thoang mat",
                                "views": 0,
                                "keyword": "nha ban",
                                "category": "nha",
                                "web": "https://www.google.com",
                                "random_key": 0,
                                "source": "https://www.google.com",
                                "deleted_at": "",
                                "created_at": "2024-06-17 16:22:06",
                                "updated_at": "2024-06-17 17:31:19",
                                "id": "6670003e4dfde8ecf1fcf326"
                            },
                            {
                                "banner_images": [
                                    "https://media.tapchitaichinh.vn/w1480/images/upload/2024/02/21/bds-ha-noi-17080891791471270135244.jpg"
                                ],
                                "title": "Nha can ban gap nhe",
                                "content": "nha rong, thoang mat, co nha ve sinh",
                                "description": "nha rong, thoang mat, co nha ve sinh thoang mat",
                                "views": 0,
                                "keyword": "nha ban",
                                "category": "nha",
                                "web": "https://www.google.com",
                                "random_key": 0,
                                "source": "https://www.google.com",
                                "deleted_at": "",
                                "created_at": "2024-06-17 16:22:06",
                                "updated_at": "2024-06-17 17:31:19",
                                "id": "6670003e4dfde8ecf1fcf328"
                            },
                            {
                                "banner_images": [
                                    "https://media.tapchitaichinh.vn/w1480/images/upload/2024/02/21/bds-ha-noi-17080891791471270135244.jpg"
                                ],
                                "title": "Nha can ban gap nhe",
                                "content": "nha rong, thoang mat, co nha ve sinh",
                                "description": "nha rong, thoang mat, co nha ve sinh thoang mat",
                                "views": 0,
                                "keyword": "nha ban",
                                "category": "nha",
                                "web": "https://www.google.com",
                                "random_key": 0,
                                "source": "https://www.google.com",
                                "deleted_at": "",
                                "created_at": "2024-06-17 16:22:06",
                                "updated_at": "2024-06-17 17:31:19",
                                "id": "6670003e4dfde8ecf1fcf329"
                            }
                        ],
                        "pagination": {
                            "total": 12,
                            "per_page": 10,
                            "current_page": 1,
                            "last_page": 2,
                            "from": 1,
                            "to": 10
                        }
                    }
                };
                const resp_data = resp.data.data;
                setPosts(resp_data);
                setPaginationPost({
                    ...paginationPost,
                    total_items: 10,
                });
                setIsLoading(false);
            }, 2500);
        };
        fetchData();
    }, [query, paginationPost.current_page]);

    return (
        <div style={{ padding: "0 12px 24px", height: "100vh", overflow: "hidden" }}>
            <Content>
                <Row gutter={10}>
                    <Col span={13}>
                        <Typography>
                            <Typography.Title level={2}>{category}</Typography.Title>
                        </Typography>
                        <Space direction="vertical" className="w-full">
                            <Col xs={24} md={24}>
                                {/* <h3 className="text-xl font-semibold text-center m-4">{category}</h3> */}
                                {isLoading ? (
                                    <Skeleton active avatar paragraph={{ rows: 4 }} />
                                ) : posts.length > 0 ? (
                                    <Col>
                                        <PostItemHor post={posts[0]} />
                                        <Row gutter={10}>
                                            <Col span={8}>
                                                <PostItemVer post={posts[1]} />
                                            </Col>
                                            <Col span={8}>
                                                <PostItemVer post={posts[2]} />
                                            </Col>
                                            <Col span={8}>
                                                <PostItemVer post={posts[3]} />
                                            </Col>
                                        </Row>
                                        <PostListHor allowRedirect category={category} posts={posts} />
                                    </Col>
                                ) : (
                                    <p style={{ textAlign: "center" }}>Không có bài nào</p>
                                )}
                                {/* <div style={{ textAlign: "center", margin: "20px 0" }}>
                                    <Pagination
                                        total={paginationPost.total_items}
                                        current={paginationPost.current_page}
                                        pageSize={paginationPost.page_size}
                                        showTotal={(total) => `Tổng ${total} bài đăng`}
                                        onChange={(page, pageSize) => {
                                            setPaginationPost({
                                                ...paginationPost,
                                                current_page: page,
                                                page_size: pageSize,
                                            });
                                        }}
                                        className='flex justify-center'
                                    /> */}
                                {/* </div> */}
                            </Col>
                        </Space>
                    </Col>
                    <Col span={5}>
                        <Space direction="vertical" className="w-full">
                            <Col xs={24} md={24}>
                                <h3 className="text-xl font-semibold text-center m-4">Tin nổi bật</h3>
                                <PostListVer allowRedirect category={category} posts={posts.slice(0,3)} />
                                <Divider />
                                <img src="https://mediabhy.mediatech.vn/upload/image/202303/medium/50928_banner_moi_quang_cao_01_14564616.jpg" alt="ads" />
                            </Col>
                        </Space>
                    </Col>
                </Row>
            </Content>
        </div>
    );

};

export default HomePage;
