import React from 'react';
import PostHeader from './PostHeader';
import PostDescription from './PostDescription/PostDescription';
import { IPost } from '@/types/post';

export interface IPostDetailContentProps {
  post: IPost | null;
  categoryName: string;
}

const PostDetailContent = ({ post, categoryName }: IPostDetailContentProps) => {
  return (
    <>
      <PostHeader post={post!} categoryName={categoryName} />
      <PostDescription post={post!} />
    </>
  );
};

export default PostDetailContent;
