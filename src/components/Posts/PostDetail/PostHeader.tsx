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
	const router = useRouter();
	const getTagColor = (tag: string) => {
		switch (tag) {
			case 'featured':
				return { color: 'white', backgroundColor: '#EC1A2D' };
			case 'urgent':
				return { color: '#D84A4A' };
			case 'hot':
				return { color: '#FF7A1B' };
			case 'new':
				return { color: '#9C4BFF' };
			default:
				return {};
		}
	};

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
					{post?.tags && (
						<Space className="">
							{(post.tags?.split(',') || [])
								.sort((a, b) => (a === 'featured' ? -1 : b === 'featured' ? 1 : 0))
								.map((tag, index) => (
									<MiniTag
										key={index}
										text={PostTagsMap[tag] || tag}
										color={getTagColor(tag).backgroundColor}
										colorText={getTagColor(tag).color}
									/>
								))}
						</Space>
					)}
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
						<span className="ml-1 mt-1 mb-1"> Giá: {getFormatMoney(post?.base_information.price ?? 0)}đ</span>
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
