'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col, Layout, Breadcrumb, Pagination, Space, Button, Grid, Skeleton } from "antd";
import PostList from '@/components/Posts/PostList/PostList';
import { Content } from "antd/es/layout/layout";
import { IPost, IPostFilter } from '@/types/post';
import { useParams } from 'next/navigation';

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
                                "type": "sale",
                                "images": [
                                    "https://media.tapchitaichinh.vn/w1480/images/upload/2024/02/21/bds-ha-noi-17080891791471270135244.jpg"
                                ],
                                "sale_type": "apartment",
                                "address": {
                                    "ward": "My dinh",
                                    "district": "Nam tu Liem",
                                    "city": "Ha noi",
                                    "region": "Mien Bac",
                                    "raw_address": "ngo 108 duong my dinh",
                                    "id": "66701077c6f65b29f334850b"
                                },
                                "title": "Nha can ban gap nhe",
                                "description": "nha rong, thoang mat, co nha ve sinh",
                                "base_information": {
                                    "price": 10000000,
                                    "area": 1000,
                                    "number_room": 4,
                                    "number_restroom": 3,
                                    "description": "this is a beatiful villa",
                                    "id": "66701077c6f65b29f334850a"
                                },
                                "seller_information": {
                                    "name": "Ha van truong",
                                    "phone": "01239232",
                                    "email": "adam@gmail.com",
                                    "id": "66701077c6f65b29f3348509"
                                },
                                "deleted_at": null,
                                "created_at": "2024-06-17 16:22:06",
                                "updated_at": "2024-06-17 17:31:19",
                                "id": "6670003e4dfde8ecf1fcf326"
                            },
                            {
                                "type": "sale",
                                "images": [
                                    "https://media.tapchitaichinh.vn/w1480/images/upload/2024/02/21/bds-ha-noi-17080891791471270135244.jpg"
                                ],
                                "sale_type": "apartment",
                                "address": {
                                    "ward": "Khuong Dinh",
                                    "district": "Thanh Xuan",
                                    "city": "Ha noi",
                                    "region": "Mien Bac",
                                    "raw_address": "ngo 108 duong my dinh",
                                    "id": "66701077c6f65b29f3788590"
                                },
                                "title": "Nha dep trung tam thanh pho",
                                "description": "nha rong, thoang mat, co nha ve sinh",
                                "base_information": {
                                    "price": 80000000,
                                    "area": 1000,
                                    "number_room": 4,
                                    "number_restroom": 3,
                                    "description": "this is a beatiful villa",
                                    "id": "66701077c6f65b29904878a"
                                },
                                "seller_information": {
                                    "name": "Ha van truong",
                                    "phone": "01239232",
                                    "email": "adam@gmail.com",
                                    "id": "66701077c6f65b29f3567509"
                                },
                                "deleted_at": null,
                                "created_at": "2024-06-17 16:22:06",
                                "updated_at": "2024-06-17 17:31:19",
                                "id": "6670003e4dfde8e7809fcf390"
                            },
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
        <Layout style={{ padding: "0 12px 24px", height: "100vh", overflow: "hidden" }}>
            <Breadcrumb
                items={[
                    { title: "Trang chủ", onClick: () => (window.location.href = "/") },
                    { title: "Dự án", onClick: () => (window.location.href = "/du-an") },
                    { title: "Căn hộ" },
                ]}
                style={{ margin: "16px 0" }}
                separator=">"
            />
            <Content style={{ height: "calc(100vh - 96px)", overflowY: "auto", overflowX: "hidden" }}>
                <Row gutter={10}>
                    <Col span={24}>
                        <Space direction="vertical" className="w-full">
                            <Col xs={24} md={12}>
                                {/* <h3 className="text-xl font-semibold text-center m-4">{category}</h3> */}
                                {isLoading ? (
                                    <Skeleton active avatar paragraph={{ rows: 4 }} />
                                ) : posts.length > 0 ? (
                                    <PostList allowRedirect category={category} posts={posts} />
                                ) : (
                                    <p style={{ textAlign: "center" }}>Không có bài nào</p>
                                )}
                                <div style={{ textAlign: "center", margin: "20px 0" }}>
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
                                    />
                                </div>
                            </Col>
                        </Space>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );

};

export default HomePage;
