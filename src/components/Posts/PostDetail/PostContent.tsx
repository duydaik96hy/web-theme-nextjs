import { Col, Divider, Row } from 'antd';
import React from 'react';
import { IPost } from '@/types/post';

export interface IPostDescriptionProps {
    post: IPost;
}

const PostDescription = ({ post }: IPostDescriptionProps) => {
    return (
        <Col xs={24} sm={24} md={24} lg={24}>
            <div>
                {post?.description && (
                    <div className='text-justify'>
                        <span>{post.description}</span>
                    </div>
                )}
                {/* <Divider /> */}
                <img
                    src={post?.banner_images[0] ?? "/static/img/logo.png"}
                    alt="post logo"
                    className="object-fit rounded-2xl w-full h-full"
                />
                {post?.description && (
                    <div style={{ paddingTop: '20px' }}>
                        <div className='text-justify' dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                )}
            </div>
        </Col>
    );
};

export default PostDescription;
