export interface IAddress {
    ward: string;
    district: string;
    city: string;
    region: string;
    raw_address: string;
    id: string;
}

export interface IBaseInfomaion {
    price: number;
    area: number;
    number_room: number;
    number_restroom: number;
    description: string;
    id: string;
}

export interface ISellerInformation {
    name: string;
    phone: string;
    email: string;
    id: string;
}

export interface IPost {
    id: string;
    title: string;
    description: string;
    type: string;
    images: string[];
    sale_type: string;
    address: IAddress;
    base_information: IBaseInfomaion;
    seller_information: ISellerInformation;
    tags?: string;
    created_at: string;
    updated_at: string;
}

export interface IPostFilter {
    search?: string;
    status?: string;
    title?: string;
    tag?: string;
    type?: string;
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
