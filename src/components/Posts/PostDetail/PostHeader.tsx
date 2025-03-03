import MiniTag from '@/components/Shared/MiniTag';
import { Row, Col, Space, Badge } from 'antd';
import React from 'react';
import { IPost } from '@/types/post';
import { getFormatMoney } from "@/helpers/number";
import { PostTagsMap } from "@/constants/common";
import { useRouter } from 'next/navigation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { getLocaleDateTime } from '@/helpers/time';

export interface IPostHeaderProps {
	post?: IPost
}

const PostHeader = ({ post }: IPostHeaderProps) => {
	return (
		<Row>
			<Col span={24}>
				<div className='flex space-x-1'>
					<h1 className="text-xl font-semibold">
						{post?.title}
					</h1>
				</div>
				<div className='flex'>
					<Badge status="success" style={{ margin: '4px' }} />
					<span className="ml-1 mt-1 mr-1">Đang mở</span>
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
			</Col>
		</Row>
	);
};

export default PostHeader;
