import { getWebInfo } from "@/service/web";
import Link from "next/link";
import styles from "./menu_header.module.css";

interface IHeaderTitleProps {
    hostName: string;
}

const HeaderTitle = async ({ hostName }: IHeaderTitleProps) => {
    const webInfo = await getWebInfo(hostName);
    const webName = webInfo[0]?.webName;
    const logo = webInfo[0]?.logo;

    return (
        <div className={styles.title_1}>
            <Link href="/" className={styles.title_link_1}>
                <img src={logo} alt="logo" className={styles.title_img_1} />
            </Link><h1 className={styles.title_h1_1}>{webName}</h1>
        </div >
    );
}

export default HeaderTitle;