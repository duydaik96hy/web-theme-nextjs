export const apiEndpoint = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3060';

export const webId = process.env.NEXT_PUBLIC_WEB_ID || '1';

export const imageBasePath = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || 'http://localhost:3060';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const PostTagsMap: { [key: string]: string } = {
    featured: 'Tin Nổi Bật',
    hot: 'Tin Hot',
    new: 'Tin Mới',
    urgent: 'Tin Gấp',
}