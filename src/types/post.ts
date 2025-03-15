export interface IPost {
    id: string;
    title: string;
    description: string;
    content: string;
    banner_images: IBannerImage[];
    views: number;
    keyword: string;
    category: string;
    web: string;
    random_key: number;
    source: string;
    deleted_at?: string;
    created_at?: string;
    updated_at?: string;
}

export interface IPostFilter {
    page?: number;
    limit?: number;
    web_id?: string;
}

export interface IPagination {
    from: number;
    to: number;
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
}

export interface IPostResponse {
    data: IPost[];
    pagination: IPagination;
}

export interface IPostCategory {
    id: string;
    code: string;
    name: string;
    description: string;
    created_at?: string;
    updated_at?: string;
}

export interface IBannerImage {
    id: string;
    name: string;
    filename: string;
    mimetype: string;
    created_at?: string;
    updated_at?: string;
}

export interface IPostsCategoryData {
    category: IPostCategory;
    posts: IPost[];
}