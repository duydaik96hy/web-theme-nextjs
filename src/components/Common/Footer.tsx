import { convertTitleToSlug } from '@/helpers/string';
import { getPostsCategories } from '@/service/posts';
import { IPostCategory } from '@/types/post';
import Link from 'next/link';
import React from 'react';
import styles from './common.module.css';
import { getWebInfo } from '@/service/web';

export interface IFooterProps {
    hostName: string;
}

const Footer = async ({ hostName }: IFooterProps) => {
  const webInfo = await getWebInfo(hostName);
  const contact = webInfo[0]?.contact;
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
            src={webInfo[0]?.logo ?? "/static/img/logo.png"}
            alt="Logo"
            width="271"
            height="120"
            className={styles.img_1}
          />
        </div>
        <div className={styles.div_2}>
          <div>
            <h3 className={styles.h3_1}>Thông tin liên hệ</h3>
            <ul className={styles.ul_1}>
              <li>Hotline: {contact.phone}</li>
              <li>
                Email: <a href="mailto:info@edusun.vn">{contact.email}</a>
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
            <h3 className={styles.follow}>{webInfo[0]?.contact.companyName}</h3>
            <div className={styles.social}>
              <a href="#" target="_blank" rel="noreferrer">
                <img
                  src={webInfo[0]?.logo ?? "/static/img/logo.png"}
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
