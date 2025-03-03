export interface IPost {
    id: string;
    title: string;
    description: string;
    content: string;
    banner_images: string[];
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
