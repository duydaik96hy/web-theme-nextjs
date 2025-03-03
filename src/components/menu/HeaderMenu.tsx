import MenuItemsHeader from './MenuItems';
import AuthMenu from './AuthMenu';

interface IHeaderMenuProps {
    showAuthMenu: boolean;
}

const HeaderMenu = ({ showAuthMenu }: IHeaderMenuProps) => {
    return (
        <header
            className="h-14 grid grid-cols-8 fixed top-0 left-2 right-2 z-50"
        >
            <div className="col-span-2">
                <div className="sm:ml-4 md:ml-8 h-full flex items-center pb-2">
                    <a href="/">
                        <img src="/static/img/logo.png" alt="logo" className="w-full h-[50px]" />
                    </a>
                </div>
            </div>
            <div className="col-span-5 col-start-4 flex items-center gap-4">
                <MenuItemsHeader />
            </div>
            <div className="col-span-3 col-start-10 grid">
                <div className="col-span-2 col-start-6 flex items-center justify-end">
                    {showAuthMenu ? <AuthMenu /> : null}
                </div>
            </div>
        </header>
    );
};

export default HeaderMenu;