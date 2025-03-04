import MenuItemsHeader from './MenuItems';
import AuthMenu from './AuthMenu';
import Link from 'next/link';

interface IHeaderMenuProps {
    showAuthMenu: boolean;
}

const HeaderMenu = ({ showAuthMenu }: IHeaderMenuProps) => {
    return (
        <header
            className="h-14 grid grid-cols-12 fixed top-0 left-2 right-2 z-50 header"
        >
            <div className="col-span-2 col-start-2">
                <div className="sm:ml-4 md:ml-8 h-full flex items-center pb-2">
                    <Link href="/">
                        <img src="/static/img/logo.png" alt="logo" className="w-full h-[50px]" />
                    </Link>
                </div>
            </div>
            <div className="menu col-span-8 lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                <div className="text-md font-bold text-blue-700 lg:flex-grow">
                    <MenuItemsHeader />
                </div>
            </div>
            {/* <div className="col-span-3 col-start-10 grid">
                <div className="col-span-2 col-start-6 flex items-center justify-end">
                    {showAuthMenu ? <AuthMenu /> : null}
                </div>
            </div> */}
        </header>
    );
};

export default HeaderMenu;