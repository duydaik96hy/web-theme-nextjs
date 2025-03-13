import { imageBasePath } from "@/constants/common";

export const convertTitleToSlug = (title: string): string => {
    return title
        .normalize("NFD") // Tách dấu khỏi chữ cái
        .replace(/[\u0300-\u036f]/g, "") // Xóa dấu
        .replace(/đ/g, "d") // Chuyển "đ" thành "d"
        .replace(/Đ/g, "d") // Chuyển "Đ" thành "d"
        .toLowerCase() // Chuyển thành chữ thường
        .replace(/[^a-z0-9]+/g, "-") // Thay khoảng trắng & ký tự đặc biệt bằng "-"
        .replace(/^-+|-+$/g, ""); // Xóa dấu "-" ở đầu & cuối chuỗi
}

export const convertImageUrl = (filename: string): string => {
    return imageBasePath + filename;
}