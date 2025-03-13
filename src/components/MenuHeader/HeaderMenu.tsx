import MenuItemsHeader from './MenuItems';
import Link from 'next/link';
import { IPostCategory } from '@/types/post';
import { getPostsCategories } from '@/service/posts';
import { convertTitleToSlug } from '@/helpers/string';

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

    return (
        <header className="h-14 grid grid-cols-12 fixed top-0 z-50 header">
            <div className="col-span-2 col-start-2 flex items-center">
                <Link href="/">
                    <img src="/static/img/logo.png" alt="logo" className="w-full h-[50px]" />
                </Link>
            </div>
            <div className="menu col-span-8 flex-grow lg:flex lg:w-auto lg:px-3 px-8">
                <div className="text-md font-bold text-blue-700 lg:flex-grow lg:flex overflow-x-auto">
                    <MenuItemsHeader items={items} />
                </div>
            </div>
        </header>
    );
};

export default HeaderMenu;