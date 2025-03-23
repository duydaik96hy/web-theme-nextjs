import type { Metadata } from "next";
import HeaderMenu from '@/components/MenuHeader/HeaderMenu';
import { headers } from 'next/headers';
import { Roboto_Condensed } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Footer from "@/components/Common/Footer";
import { Col } from "antd";
import HeaderTitle from "@/components/MenuHeader/Header";
import { getWebInfo } from "@/service/web";
import styles from "./HomePage.module.css";

const roboto = Roboto_Condensed({ subsets: ['latin'] });

async function getMetadataFromAPI() {
  try {
    const headersList = await headers();
    const res = await getWebInfo(headersList.get('host') || '');
    return {
      title: res[0]?.homePageSeoInfo?.title || "Webstie Tin Tức",
      description: res[0]?.homePageSeoInfo?.description || "Website Tin Tức",
      keywords: res[0]?.homePageSeoInfo?.keyword || "tin tức, bài viết, cập nhật mới nhất",
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return { title: "Default Title", description: "Default Description" }; // Dữ liệu fallback
  }
}

// Dùng `generateMetadata()` để cập nhật metadata từ API
export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadataFromAPI();
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  };
}

const RootLayout = async ({ children }: React.PropsWithChildren) => {
  const headersList = await headers();

  const url = headersList.get('x-url') || '';
  // get pathname form url
  const pathName = new URL(url).pathname;
  const isAuthPage = ['/login', '/register'].includes(pathName);
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AntdRegistry>
          <HeaderTitle hostName={headersList.get('host') || ''} />
          <HeaderMenu showAuthMenu={!isAuthPage} />
          <Col xs={23} sm={23} md={22} lg={22} xl={20} className={styles.mx_auto}>
            {children}
          </Col>
          <Footer hostName={headersList.get('host') || ''} />
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
