import { Col, Row } from 'antd';
import React from 'react';
import PostDescriptionText from './PostDescriptionText';
import { IPost } from '@/types/post';

export interface IPostDescriptionProps {
    post: IPost;
}

const PostDescription = ({ post }: IPostDescriptionProps) => {
    return (
        <div
            style={{
                height: "calc(100vh - 250px)",
                overflowY: 'auto',
                boxSizing: 'border-box',
            }}
        >
            <Col>
                <Row>
                    <Col xs={24} sm={16} md={16} lg={16}>
                        <PostDescriptionText post={post} />
                    </Col>
                    <Col xs={24} sm={8} md={8} lg={8}>
                        <div className="flex items-center justify-center">
                            <img
                                src={post?.banner_images[0] ?? "/static/img/logo.png"}
                                alt="post logo"
                                className="object-cover w-[219px] h-[219px] rounded-2xl"
                            />
                        </div>
                    </Col>
                </Row>
                {/* <div className="sm:h-auto md:h-72"></div> */}
            </Col>
        </div>
    );
};

export default PostDescription;
