import { Row } from 'antd';
import React from 'react';
import { IPost } from '@/types/post';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { getLocaleDateTime } from '@/helpers/time';

export interface IPostHeaderProps {
	post?: IPost
}

const PostHeader = ({ post }: IPostHeaderProps) => {
	return (
		<Row>
			<div className='flex space-x-1'>
				<h1 className="text-3xl font-semibold">
					{post?.title}
				</h1>
			</div>
			<div className='flex'>
				<div className="flex">
					<DotLottieReact
						src="https://lottie.host/316847f3-5fa8-4fe3-933f-2f7a632700f6/Atbqu87pIs.lottie"
						loop
						autoplay
						style={{
							width: "30px",
							height: "30px",
						}}
					/>
					<span className="ml-1 mt-1 mb-1">Danh mục: {post?.category}</span>
					<DotLottieReact
						src="https://lottie.host/316847f3-5fa8-4fe3-933f-2f7a632700f6/Atbqu87pIs.lottie"
						loop
						autoplay
						style={{
							width: "30px",
							height: "30px",
						}}
					/>
					<span className="ml-1 mt-1 mb-1"> Đăng lúc: {getLocaleDateTime(post?.created_at)}</span>
				</div>
			</div>
		</Row>
	);
};

export default PostHeader;
