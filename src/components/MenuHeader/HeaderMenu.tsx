import MenuItemsHeader from './MenuItems';
import Link from 'next/link';
import { IPostCategory } from '@/types/post';
import { getPostsCategories } from '@/service/posts';
import { convertTitleToSlug } from '@/helpers/string';
import { Row } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

interface IHeaderMenuProps {
    showAuthMenu: boolean;
}

const HeaderMenu = async ({ showAuthMenu }: IHeaderMenuProps) => {
    const postCategories = await getPostsCategories("");
    const items = postCategories.map((category: IPostCategory) => ({
        key: category.code.toLocaleLowerCase(),
        label: (
            <Link href={`/${convertTitleToSlug(category.name)}`}>
                {category.name}
            </Link>
        ),
    }));

    const homeItem = {
        key: 'home',
        label: (
            <Link href="/">
                <HomeOutlined style={{ fontSize: '20px' }} />
            </Link>
        ),
    };

    items.unshift(homeItem);

    return (
        <nav className="w-full sticky top-0 z-50 custom-navbar">
            <div className="flex px-4 py-2 space-x-4 overflow-x-auto scrollbar-hide">
                <MenuItemsHeader items={items} />
            </div>
        </nav>
    );
};

export default HeaderMenu;