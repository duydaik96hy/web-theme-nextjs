import { getWebInfo } from "@/service/web";
import Link from "next/link";

interface IHeaderTitleProps {
    hostName: string;
}

const HeaderTitle = async ({ hostName }: IHeaderTitleProps) => {
    const webInfo = await getWebInfo(hostName);
    const webName = webInfo[0]?.webName;
    const logo = webInfo[0]?.logo;

    return (
        <div className="flex justify-center items-center py-4 bg-white" >
            <Link href="/" className="flex items-center">
                <img src={logo} alt="logo" className="h-12 w-auto" />
            </Link><h1 className="text-2xl font-bold text-red-600 ml-4">{webName}</h1>
        </div >
    );
}

export default HeaderTitle;