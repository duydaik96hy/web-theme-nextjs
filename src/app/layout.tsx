import type { Metadata } from "next";
import HeaderMenu from '@/components/MenuHeader/HeaderMenu';
import { headers } from 'next/headers';
import { Roboto_Condensed } from 'next/font/google';
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Footer from "@/components/Common/Footer";
import { Col } from "antd";
import { defaultWebDescription, defaultWebTitle } from "@/constants/common";
import HeaderTitle from "@/components/MenuHeader/Header";

const roboto = Roboto_Condensed({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: defaultWebTitle,
  description: defaultWebDescription,
};

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
          <HeaderTitle />
          <HeaderMenu showAuthMenu={!isAuthPage} />
          <Col xs={23} sm={23} md={22} lg={22} xl={20} className="mx-auto">
            {children}
          </Col>
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
