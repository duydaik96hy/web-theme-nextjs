import React from 'react';

import PostDetail from '@/components/Posts/PostDetail/PostDetail';
import { getPostById } from '@/service/posts';
import { convertImageUrl } from '@/helpers/string';
import { siteUrl } from '@/constants/common';

interface BlogPostProps {
    params: { category: string, id: string };
}

export async function generateMetadata({ params }: BlogPostProps) {
    const { category, id } = await params;
    const postId = id.split('-').pop() || '';
    const post = await getPostById(postId);
    if (!post) return {};
    /// Get current page url
    const currentUrl = `${siteUrl}/${category}/${id}`;

    return {
        title: post.title,
        description: post.description,
        keywords: post.keyword || "tin tức, bài viết, cập nhật mới nhất", // Thêm keywords ở đây
        openGraph: {
          title: post.title,
          description: post.description,
          type: "article",
          url: currentUrl,
          images: [
            {
              url: convertImageUrl(post.banner_images[0].filename) ?? "/static/img/logo.png",
              width: 600,
              height: 315,
            },
          ],
          article: {
            publishedTime: post.created_at,
            modifiedTime: post.updated_at,
            // author: "Tên tác giả",
            section: "Danh mục bài viết",
            tags: post.keyword ? post.keyword.split(", ") : ["tin tức", "mới nhất"],
          },
        },
    }
}

const HomePage = async ({ params }: BlogPostProps) => {
    const { id } = await params;
    const postId = id.split('-').pop() || '';

    return (
        <div style={{ padding: '0px 0px 24px' }}>
            <PostDetail postId={postId} />
        </div>
    );
};

export default HomePage;
