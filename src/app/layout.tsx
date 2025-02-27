import type { Metadata } from "next";
import HeaderMenu from '@/components/menu/HeaderMenu';
import { headers } from 'next/headers';
import { Roboto_Condensed } from 'next/font/google';
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Providers from "./providers";
import Footer from "@/components/shared/Footer";

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
        <Providers>
          <AntdRegistry>
            <HeaderMenu showAuthMenu={!isAuthPage}/>
            {children}
            <Footer />
          </AntdRegistry>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
