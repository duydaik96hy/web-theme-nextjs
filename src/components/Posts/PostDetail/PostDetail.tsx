import { FloatButton, Skeleton, Spin, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import PostHeader from './PostHeader';
import type { TabsProps } from 'antd';
import PostDescription from './PostDescription/PostDescription';
import { IPost } from '@/types/post';

export interface IJobDetailProps {
    postId: string;
    defaultTabKey: string
}

const getItems = (data: IPost): TabsProps['items'] => [
    {
        key: '1',
        label: 'Mô tả',
        children: <PostDescription post={data} />,
    },
];

const JobDetail = ({ postId }: IJobDetailProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState<IPost | null>(null);
    const [activeTabKey, setActiveTabKey] = useState('1');

    const fetchPost = async () => {
        setIsLoading(true);
        try {
            setTimeout(() => {
                const res = {
                    "success": true,
                    "status": 200,
                    "message": null,
                    "data": {
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
                    }
                };
                const resp_data = res.data;
                setPost(resp_data);
                setIsLoading(false);
            }, 2000);
        } catch (error) {
            console.error("Lỗi khi tải dữ liệu:", error);
        }
    };

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <div>
            {isLoading ? (
                <Skeleton active avatar paragraph={{ rows: 10 }} />
            ) : (
                <>
                    <PostHeader post={post!} />
                    <Tabs
                        activeKey={activeTabKey}
                        onChange={setActiveTabKey}
                        items={getItems(post!)}
                    />
                </>
            )}
        </div>
    );
};

export default JobDetail;
