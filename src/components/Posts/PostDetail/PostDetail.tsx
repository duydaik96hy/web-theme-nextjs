import { Col, FloatButton, Skeleton, Spin, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import PostHeader from './PostHeader';
import type { TabsProps } from 'antd';
import PostDescription from './PostDescription/PostDescription';
import { IPost } from '@/types/post';

export interface IJobDetailProps {
    postId: string;
}

const JobDetail = ({ postId }: IJobDetailProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState<IPost | null>(null);

    const fetchPost = async () => {
        setIsLoading(true);
        try {
            setTimeout(() => {
                const res = {
                    "success": true,
                    "status": 200,
                    "message": null,
                    "data": {
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
        <Col className="p-4 w-full">
            {isLoading ? (
                <Skeleton active avatar paragraph={{ rows: 8, width: 600 }} />
            ) : (
                <>
                    <PostHeader post={post!} />
                    <PostDescription post={post!} />
                </>
            )}
        </Col>
    );
};

export default JobDetail;
