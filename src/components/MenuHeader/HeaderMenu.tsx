import MenuItemsHeader from './MenuItems';
import Link from 'next/link';
import { IPostCategory } from '@/types/post';
import { getPostsCategories } from '@/service/posts';
import { convertTitleToSlug } from '@/helpers/string';
import { HomeOutlined } from '@ant-design/icons';
import styles from './menu_header.module.css';

interface IHeaderMenuProps {
    showAuthMenu: boolean;
}

const HeaderMenu = async ({ }: IHeaderMenuProps) => {
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
        <nav className={styles.nav_1}>
            <div className={styles.nav_div_1}>
                <MenuItemsHeader items={items} />
            </div>
        </nav>
    );
};

export default HeaderMenu;