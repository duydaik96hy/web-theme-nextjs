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
      {post?.address && (
        <div>
          <h3 className="text-xl font-bold">Địa chỉ</h3>
          <ul className="list-disc">
            <li>
              Khu vực: <span className="font-bold">{post?.address.region}</span>
            </li>
            <li>
              Thành phố: <span className="font-bold">{post?.address.city}</span>
            </li>
            <li>
              Quận/huyện: <span className="font-bold">{post?.address.district}</span>
            </li>
            <li>
              Phường: <span className="font-bold">{post?.address.ward}</span>
            </li>
            <li>
              Địa chỉ: <span className="font-bold">{post?.address.raw_address}</span>
            </li>
          </ul>
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold">Loại</h3>
        <ul className="list-disc">
          <li>{post?.sale_type}</li>
        </ul>
      </div>
      {post?.base_information && (
        <div>
          <h3 className="text-xl font-bold">Thông tin cơ bản</h3>
          <ul className="list-disc">
            <li>
              Giá: <span className="font-bold">{getFormatMoney(post?.base_information.price)}đ</span>
            </li>
            <li>
              Số phòng: <span className="font-bold">{post?.base_information.number_room}</span>
            </li>
            <li>
              Diện tích: <span className="font-bold">{getFormatMoney(post?.base_information.area)}m²</span>
            </li>
            <li>
              Mô tả: <span className="font-bold">{post?.base_information.description}</span>
            </li>
          </ul>
        </div>
      )}
      {post?.seller_information && (
        <div>
          <h3 className="text-xl font-bold">Thông tin người bán</h3>
          <ul className="list-disc">
            <li>
              Tên: <span className="font-bold">{post?.seller_information.name}</span>
            </li>
            <li>
              Phone: <span className="font-bold">{post?.seller_information.phone}</span>
            </li>
            <li>
              Email: <span className="font-bold">{post?.seller_information.email}</span>
            </li>
          </ul>
        </div>
      )}
      {post?.description && (
        <div>
          <h3 className="text-xl font-bold">Mô tả</h3>
          <ul className="list-disc">
            <li>{post?.description}</li>
          </ul>
        </div>
      )}
    </Card>
  );
};

export default JobDescriptionText;
