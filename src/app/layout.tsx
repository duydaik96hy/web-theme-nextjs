import type { Metadata } from "next";
import HeaderMenu from '@/components/Menu/HeaderMenu';
import { headers } from 'next/headers';
import { Roboto_Condensed } from 'next/font/google';
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Footer from "@/components/Shared/Footer";
import { Col, Layout } from "antd";

const roboto = Roboto_Condensed({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Theme UI",
  description: "Demo for Theme UI",
};

const RootLayout = async ({ children }: React.PropsWithChildren) => {
  const headersList = await headers();

  const url = headersList.get('x-url') || '';
  // get pathname form url
  const pathName = new URL(url).pathname;
  console.log('pathName', pathName);

  const isAuthPage = ['/login', '/register'].includes(pathName);
  return (
    <html lang="en">
      <body className={roboto.className}>
          <AntdRegistry>
            <Col xs={23} sm={23} md={22} lg={22} xl={20} className="mx-auto">
              <HeaderMenu showAuthMenu={!isAuthPage} />
              {children}
            </Col>
            <Footer />
          </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
