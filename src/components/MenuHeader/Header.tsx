import Link from "next/link";

const HeaderTitle = () => {
    return (
        <div className="flex justify-center items-center py-4 bg-white" >
            <Link href="/" className="flex items-center">
                <img src="/static/img/logo.png" alt="logo" className="h-12 w-auto" />
            </Link><h1 className="text-2xl font-bold text-red-600 ml-4">Báo Điện tử</h1>
        </div >
    );
}

export default HeaderTitle;