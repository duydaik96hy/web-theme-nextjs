export interface IHomePageSeoInfo {
    title: string;
    description: string;
    keyword: string;
}


export interface IListPageSeoInfo {
    title: string;
    description: string;
    keywords: string;
}


export interface IContact {
    phone: string;
    email: string;
    companyName: string;
}


export interface IProxy {
    url: string;
    username: string;
    password: string;
}


export interface IWebInfo {
    webName: string;
    hostName: string;
    ip: string;
    type: string;
    theme: string;
    logo: string;
    homePageSeoInfo: IHomePageSeoInfo;
    listPageSeoInfo: IListPageSeoInfo;
    contact: IContact;
    proxy: IProxy;
}