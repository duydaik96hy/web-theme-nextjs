import React from 'react';
import PostHeader from './PostHeader';
import PostDescription from './PostDescription/PostDescription';
import { IPost } from '@/types/post';

export interface IPostDetailContentProps {
  post: IPost | null;
}

const PostDetailContent = ({ post }: IPostDetailContentProps) => {
  return (
    <>
      <PostHeader post={post!} />
      <PostDescription post={post!} />
    </>
  );
};

export default PostDetailContent;
