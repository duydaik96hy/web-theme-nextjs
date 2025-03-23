import { IPost } from "@/types/post";
import { Col, Row, Space } from "antd";
import PostItemVer from "../PostList/PostItemVer";
import styles from './PostListVerWithTitle.module.css';


export interface IPostListVerProps {
    posts: IPost[];
    title: string;
    isShowDescriptionAndTime?: boolean;
}

const PostListVerWithTitle = ({ posts, title, isShowDescriptionAndTime = true }: IPostListVerProps) => {
    return (
            <Col span={24} className={styles.wFull}>
                <Space direction="vertical" className={styles.wFull}>
                    <h3 className={styles.h3_1}>
                        {title}
                    </h3>
                    {posts.length > 1 ? (
                        <Row gutter={16} className={styles.row_1}>
                            {posts.map((post) => (
                                <Col key={post.id} lg={6} md={12} sm={12} xs={24} className={styles.col_1}>
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