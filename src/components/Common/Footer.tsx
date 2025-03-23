import { convertTitleToSlug } from '@/helpers/string';
import { getPostsCategories } from '@/service/posts';
import { IPostCategory } from '@/types/post';
import Link from 'next/link';
import React from 'react';
import styles from './common.module.css';

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
    <footer className={styles.footer_1}>
      <section className={styles.section_1}>
        <div className={styles.div_1}>
          <img
            src="/static/img/logo.png"
            alt="Edusun logo"
            width="271"
            height="120"
            className={styles.img_1}
          />
        </div>
        <div className={styles.div_2}>
          <div>
            <h3 className={styles.h3_1}>Thông tin liên hệ</h3>
            <ul className={styles.ul_1}>
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
        <div className={styles.div_3}>
          <div>
            <h3 className={styles.h3_1}>Truy cập nhanh</h3>
            <ul className={styles.ul_1}>
              {items.map((item) => (
                <li key={item.key}>{item.label}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.div_4}>
          <div>
            <h3 className={styles.follow}>Theo dõi chúng tôi</h3>
            <div className={styles.social}>
              <a href="#" target="_blank" rel="noreferrer">
                <img
                  src="/static/img/logo.png" 
                  alt="fanpage"
                  width={271}
                  height={135}
                  className={styles.img_1}
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
