export const convertTitleToSlug = (title: string): string => {
    return title
        .toLowerCase()           // Chuyển thành chữ thường
        .normalize('NFD')       // Chuẩn hóa để loại bỏ dấu
        .replace(/[\u0300-\u036f]/g, '') // Loại bỏ dấu
        .trim()                 // Xóa khoảng trắng đầu và cuối
        .replace(/\s+/g, '-')   // Thay thế khoảng trắng bằng dấu gạch ngang
        .replace(/--+/g, '-')    // Thay thế nhiều dấu gạch ngang liên tiếp thành một
        .replace(/^-+|-+$/g, ''); // Xóa dấu gạch ngang ở đầu và cuối
}