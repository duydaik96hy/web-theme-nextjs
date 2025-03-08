import { Col, Row } from 'antd';
import React from 'react';
import { IPost } from '@/types/post';
import { getLocaleDateTime } from '@/helpers/time';

export interface IPostHeaderProps {
	post?: IPost
	categoryName?: string
}

const PostHeader = ({ post, categoryName }: IPostHeaderProps) => {
	return (
		<Col>
			<Row className='flex space-x-1'>
				<h1 className="text-3xl font-semibold">
					{post?.title}
				</h1>
			</Row>
			<Row>
				<div className="flex">
					<span className='font-semibold'><span className="ml-1 mt-1 mb-1 text-red-500">Danh mục:</span> {categoryName}</span>
					<p>{'  '}</p>
					<span className='font-semibold'><span className="ml-1 mt-1 mb-1 text-red-500">Đăng lúc:</span> {getLocaleDateTime(post?.created_at)}</span>
				</div>
			</Row>
		</Col>
	);
};

export default PostHeader;
