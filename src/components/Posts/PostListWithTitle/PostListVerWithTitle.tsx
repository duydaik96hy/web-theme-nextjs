import { IPost } from "@/types/post";
import { Col, Row, Space } from "antd";
import PostItemVer from "../PostList/PostItemVer";


export interface IPostListVerProps {
    posts: IPost[];
    title: string;
    isShowDescriptionAndTime?: boolean;
}

const PostListVerWithTitle = ({ posts, title, isShowDescriptionAndTime = true }: IPostListVerProps) => {
    return (
            <Col span={24} className='w-full'>
                <Space direction="vertical" className="w-full">
                    <h3 className="text-xl font-semibold m-2 uppercase underline underline-offset-8 decoration-red-600">
                        {title}
                    </h3>
                    {posts.length > 1 ? (
                        <Row gutter={16} className="flex items-stretch w-ful divide-x divide-gray-300">
                            {posts.map((post) => (
                                <Col key={post.id} lg={6} md={12} sm={12} xs={24} className="flex flex-col divide-y divide-gray-300">
                                    <PostItemVer post={post} isShowDescriptionAndTime={isShowDescriptionAndTime} />
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <p style={{ textAlign: "center" }}>Không có bài nào</p>
                    )}
                </Space>
            </Col>
    );
}

export default PostListVerWithTitle;