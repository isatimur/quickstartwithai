/* eslint-disable @typescript-eslint/no-explicit-any */
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import EnhancedCleanArticle from '@/components/EnhancedCleanArticle';
import createImageUrlBuilder from '@sanity/image-url';

export const revalidate = 60; // Revalidate every 60 seconds

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = params;

    const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage,
    body,
    "authorBio": author->bio, 
    "authorName": author->name,
    "authorImage": author->image,
    publishedAt}`;

    const post = await client.fetch(query, { slug });

    if (!post) {
        return <div className="container mx-auto px-4 py-12">Post not found</div>;
    }

    // Calculate reading time
    const wordsPerMinute = 200;
    const wordCount = post.body.reduce((count: number, block: any) => {
        if (block._type === 'block' && block.children) {
            return count + block.children.reduce((childCount: number, child: any) => {
                return childCount + child.text.split(' ').length;
            }, 0);
        }
        return count;
    }, 0);
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    const mainImageUrl = post.mainImage || null;
    const authorImageUrl = post.authorImage || null;
    const bio = post.authorBio || null;
    const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <EnhancedCleanArticle
            title={post.title}
            authorName={post.authorName || 'Unknown Author'}
            authorImage={createImageUrlBuilder(client).image(authorImageUrl).rect(0,0,1280,1280).height(400).width(400).url()}
            readingTime={readingTime.toString()}
            publishedDate={publishedDate}
            bio={bio}
            mainImage={createImageUrlBuilder(client).image(mainImageUrl).height(400).width(800).url()}
            body={post.body}
        />
    );
}