import { getFormatMoney } from '@/helpers/number';
import { IPost } from '@/types/post';
import { Card, Divider } from 'antd';
import React from 'react';

export interface IJobDescriptionTextProps {
  post?: IPost;
}

const JobDescriptionText = ({ post }: IJobDescriptionTextProps) => {
  return (
    <Card>
      {post?.description && (
        <div>
          <span>{post.description}</span>
        </div>
      )}
      <Divider />
      <img
        src={post?.banner_images[0] ?? "/static/img/logo.png"}
        alt="post logo"
        className="object-cover rounded-2xl"
      />
      {post?.description && (
        <div style={{ paddingTop: '20px'}}>
          <span>{post.content}</span>
        </div>
      )}
    </Card>
  );
};

export default JobDescriptionText;
