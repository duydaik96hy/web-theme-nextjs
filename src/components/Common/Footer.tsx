import { convertTitleToSlug } from '@/helpers/string';
import { getPostsCategories } from '@/service/posts';
import { IPostCategory } from '@/types/post';
import Link from 'next/link';
import React from 'react';

export interface IFooterProps {}

const Footer = async (props: IFooterProps) => {
  const postCategories = await getPostsCategories("");
  const items = postCategories.map((category: IPostCategory) => ({
      key: category.code.toLocaleLowerCase(),
      label: (
          <Link href={`/${convertTitleToSlug(category.name)}`}>
              {category.name}
          </Link>
      ),
  }));
  
  return (
    <footer className="bg-[#DD162A] py-[18px] flex justify-center mt-auto">
      <section className="max-w-[1162px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mx-4 sm:mx-8 lg:mx-0">
        <div className="flex justify-center items-center">
          <img
            src="/static/img/logo.png"
            alt="Edusun logo"
            width="271"
            height="120"
            className="w-[200px] h-[90px] lg:w-[271px] lg:h-[120px]"
          />
        </div>
        <div className="flex justify-center sm:justify-start lg:justify-center">
          <div>
            <h3 className="text-white text-xl mb-2">Thông tin liên hệ</h3>
            <ul className="text-white text-[85%] space-y-1">
              <li>
                Thanh Xuân, Hà Nội
              </li>
              <li>Hotline: 09389252913</li>
              <li>
                Email: <a href="mailto:info@edusun.vn">demo@gmail.com</a>
              </li>
              <li>
                Website: <a href="https://edusun.vn">https://demo.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex sm:justify-start md:justify-center lg:justify-center">
          <div>
            <h3 className="text-white text-xl mb-2">Truy cập nhanh</h3>
            <ul className="text-white text-[85%] space-y-1">
              {items.map((item) => (
                <li key={item.key}>{item.label}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center sm:justify-start lg:justify-center">
          <div>
            <h3 className="text-white text-xl mb-2 flex justify-center align-center">Theo dõi chúng tôi</h3>
            <div className="flex justify-center lg:justify-start">
              <a href="#" target="_blank" rel="noreferrer">
                <img
                  src="/static/img/logo.png" 
                  alt="fanpage"
                  width={271}
                  height={135}
                  className="w-full max-w-[200px] lg:max-w-none"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
