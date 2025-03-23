import { ArrowLeftOutlined, ArrowRightOutlined, DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { Row } from "antd";
import Link from "next/link";
import styles from './common.module.css';

export interface IPaginationProps {
    currentPage: number;
    totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: IPaginationProps) => {
    // Hàm tạo danh sách số trang
    const getPaginationItems = () => {
        const pages = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage > 4) pages.push(1, '...');
            for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) pages.push(i);
            if (currentPage < totalPages - 3) pages.push('...', totalPages);
        }
        return pages;
    };

    return (
        <Row className={styles.pagi_row}>
            <div className={styles.pagi_container}>
                {/* Nút trang đầu */}
                <Link
                    href={`?page=1`}
                    className={`${styles.pagi_button} ${currentPage === 1 ? styles.pagi_button_disabled : ''}`}
                >
                    <DoubleLeftOutlined />
                </Link>

                {/* Nút trang trước */}
                <Link
                    href={`?page=${currentPage - 1}`}
                    className={`${styles.pagi_button} ${currentPage === 1 ? styles.pagi_button_disabled : ''}`}
                >
                    <ArrowLeftOutlined />
                </Link>

                {/* Danh sách số trang */}
                {getPaginationItems().map((page, index) => (
                    typeof page === 'number' ? (
                        <Link
                            key={index}
                            href={`?page=${page}`}
                            className={`${styles.pagi_number} ${page === currentPage ? styles.pagi_number_active : ''}`}
                        >
                            {page}
                        </Link>
                    ) : (
                        <span key={index} className={styles.pagi_ellipsis}>...</span>
                    )
                ))}

                {/* Nút trang sau */}
                <Link
                    href={`?page=${currentPage + 1}`}
                    className={`${styles.pagi_button} ${currentPage >= totalPages ? styles.pagi_button_disabled : ''}`}
                >
                    <ArrowRightOutlined />
                </Link>

                {/* Nút trang cuối */}
                <Link
                    href={`?page=${totalPages}`}
                    className={`${styles.pagi_button} ${currentPage >= totalPages ? styles.pagi_button_disabled : ''}`}
                >
                    <DoubleRightOutlined />
                </Link>
            </div>
        </Row>
    );
};

export default Pagination;
