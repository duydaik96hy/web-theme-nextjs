import React from 'react';
import PostHeader from './PostHeader';
import PostDescription from './PostContent';
import { IPost } from '@/types/post';
import { Space } from 'antd';

export interface IPostDetailContentProps {
  post: IPost | null;
  categoryName: string;
}

const PostDetailContent = ({ post, categoryName }: IPostDetailContentProps) => {
  return (
    <Space direction='vertical' size='middle'>
      <PostHeader post={post!} categoryName={categoryName} />
      <PostDescription post={post!} />
    </Space>
  );
};

export default PostDetailContent;
