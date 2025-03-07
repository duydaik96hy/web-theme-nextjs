import { IPost, IPostCategory, IPostResponse } from '@/types/post';
import {commonClient} from './common';

export const getRecentPosts = async (query: string): Promise<IPost[]> => {
    try {
        return await commonClient(`/api/posts/recent?${query}`, 'GET', undefined, true);
    } catch (error: any) {
        throw error;
    }
};

export const getTopViewsPosts = async (query: string): Promise<IPost[]> => {
    try {
        return await commonClient(`/api/posts/top-views?${query}`, 'GET', undefined, true);
    } catch (error: any) {
        throw error;
    }
};

export const getRandomPosts = async (query: string): Promise<IPost[]> => {
    try {
        return await commonClient(`/api/posts/random?${query}`, 'GET', undefined, true);
    } catch (error: any) {
        throw error;
    }
};

export const getPostById = async (id: string): Promise<IPost> => {
    try {
        return await commonClient(`/api/posts/${id}`, 'GET', undefined, true);
    } catch (error: any) {
        throw error;
    }
}

export const getPostsByCategory = async (query: string): Promise<IPostCategory> => {
    try {
        return await commonClient(`/api/posts/categories?${query}`, 'GET', undefined, true);
    } catch (error: any) {
        throw error;
    }
}