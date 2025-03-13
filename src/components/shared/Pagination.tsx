import { ArrowLeftOutlined, ArrowRightOutlined, DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { Row } from "antd";
import Link from "next/link";


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
        <Row className='w-full mt-4 justify-center items-center'>
            <div className="flex items-center gap-2">
                {/* Nút trang đầu */}
                <Link
                    href={`?page=1`}
                    className={`rounded-md border border-slate-300 p-2 text-sm transition-all shadow-sm ${currentPage === 1
                            ? "opacity-50 pointer-events-none"
                            : "hover:shadow-lg hover:bg-slate-800 hover:border-slate-800 hover:text-white"
                        }`}
                >
                    <DoubleLeftOutlined />
                </Link>

                {/* Nút trang trước */}
                <Link
                    href={`?page=${currentPage - 1}`}
                    className={`rounded-md border border-slate-300 p-2 text-sm transition-all shadow-sm ${currentPage === 1
                            ? "opacity-50 pointer-events-none"
                            : "hover:shadow-lg hover:bg-slate-800 hover:border-slate-800 hover:text-white"
                        }`}
                >
                    <ArrowLeftOutlined />
                </Link>

                {/* Danh sách số trang */}
                {getPaginationItems().map((page, index) => (
                    typeof page === 'number' ? (
                        <Link
                            key={index}
                            href={`?page=${page}`}
                            className={`px-3 py-2 rounded-md border border-slate-300 text-sm shadow-sm ${page === currentPage
                                    ? "bg-slate-800 text-white border-slate-800"
                                    : "hover:shadow-lg hover:bg-slate-800 hover:border-slate-800 hover:text-white"
                                }`}
                        >
                            {page}
                        </Link>
                    ) : (
                        <span key={index} className="px-3 py-2 text-sm text-gray-500">...</span>
                    )
                ))}

                {/* Nút trang sau */}
                <Link
                    href={`?page=${currentPage + 1}`}
                    className={`rounded-md border border-slate-300 p-2 text-sm transition-all shadow-sm ${currentPage >= totalPages
                            ? "opacity-50 pointer-events-none"
                            : "hover:shadow-lg hover:bg-slate-800 hover:border-slate-800 hover:text-white"
                        }`}
                >
                    <ArrowRightOutlined />
                </Link>

                {/* Nút trang cuối */}
                <Link
                    href={`?page=${totalPages}`}
                    className={`rounded-md border border-slate-300 p-2 text-sm transition-all shadow-sm ${currentPage >= totalPages
                            ? "opacity-50 pointer-events-none"
                            : "hover:shadow-lg hover:bg-slate-800 hover:border-slate-800 hover:text-white"
                        }`}
                >
                    <DoubleRightOutlined />
                </Link>
            </div>
        </Row>
    )
}

export default Pagination;