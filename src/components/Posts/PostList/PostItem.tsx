import React from 'react';
import { Button, Card, Col, Space } from 'antd';
import MiniTag from '@/components/Shared/MiniTag';
import { IPost } from '@/types/post';
import { getFormatMoney } from '@/helpers/number';
import { PostTagsMap } from "@/constants/common";
import { isLogin } from "@/helpers/auth";

export interface IPostItemProps {
    onClick?: (id: string) => void;
    category?: string;
    post: IPost;
}

const PostItem = ({ onClick, category, post }: IPostItemProps) => {

    const getTagColor = (tag: string) => {
        switch (tag) {
            case 'featured':
                return { color: 'white', backgroundColor: '#EC1A2D' };
            case 'urgent':
                return { color: '#D84A4A' };
            case 'hot':
                return { color: '#FF7A1B' };
            case 'new':
                return { color: '#9C4BFF' };
            default:
                return {};
        }
    };

    return (
        <Card
            onClick={() => {
                onClick?.(post.id);
            }}
            className={`${onClick ? 'cursor-pointer' : ''}`}
        >
            <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-12 gap-4">
                <Col className="flex justify-center md:col-span-4">
                    <div className="flex items-center justify-center">
                        <img
                            src={post?.images[0] ?? "/static/img/logo.png"}
                            alt="post logo"
                            className="object-cover w-[219px] h-[219px] rounded-2xl"
                        />
                    </div>
                </Col>

                <Col className="sm:col-span-2 md:col-span-8">
                    <h3
                        className="font-semibold text-lg overflow-hidden text-ellipsis"
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            height: '3em',
                            lineHeight: '1.5em',
                        }}
                    >
                        {post?.title}
                    </h3>

                    <Space className="mt-3 flex-wrap" style={{ minHeight: '24px' }}>
                        {(post.tags?.split(',') || [])
                            .sort((a: string, b: string) => (a === 'featured' ? -1 : b === 'featured' ? 1 : 0))
                            .map((tag: string, index: number) => (
                                <MiniTag
                                    key={index}
                                    text={PostTagsMap[tag] || tag}
                                    color={getTagColor(tag).backgroundColor}
                                    colorText={getTagColor(tag).color}
                                />
                            ))}
                    </Space>
                    <div>
                        <span className="text-l font-bold">Loại: </span> {post?.sale_type}
                    </div>
                    <div className="font-bold text-l">
                        Giá:{' '}
                        {isLogin() ? (
                            <span className="font-semibold">{getFormatMoney(post?.base_information.price || 0) + 'đ'}</span>
                        ) : (
                            <span className="font-semibold">Đăng nhập để xem</span>
                        )}
                    </div>
                    {post?.address && (
                        <div>
                            <span className="text-l font-bold">Địa chỉ: </span>
                            <ul className="list-disc">
                                <li>
                                    Khu vực: <span className="font-bold">{post?.address.region}</span>
                                </li>
                                <li>
                                    Thành phố: <span className="font-bold">{post?.address.city}</span>
                                </li>
                                <li>
                                    Quận/huyện: <span className="font-bold">{post?.address.district}</span>
                                </li>
                                <li>
                                    Phường: <span className="font-bold">{post?.address.ward}</span>
                                </li>
                                <li>
                                    Địa chỉ: <span className="font-bold">{post?.address.raw_address}</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </Col>
            </div>

            <div className="flex justify-center md:justify-end mt-3">
                <Button href={isLogin() ? `/du-an/${category}/${post.id}` : `/login`} danger>
                    {isLogin() ? 'Xem chi tiết' : 'Đăng nhập'}
                </Button>
            </div>
        </Card>
    );
};

export default PostItem;
