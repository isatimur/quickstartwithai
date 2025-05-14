/* eslint-disable @typescript-eslint/no-explicit-any */
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import EnhancedCleanArticle from '@/components/EnhancedCleanArticle';
import createImageUrlBuilder from '@sanity/image-url';
import Head from 'next/head';
import { NavBar } from '@/components/NavBar';

export const revalidate = 60;

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

    const mainImageSanity = post.mainImage;
    const authorImageSanity = post.authorImage;

    const mainImageUrl = mainImageSanity ? createImageUrlBuilder(client).image(mainImageSanity).height(400).width(800).url() : '/placeholder-main.jpg';
    const authorImageUrl = authorImageSanity ? createImageUrlBuilder(client).image(authorImageSanity).rect(0,0,1280,1280).height(400).width(400).url() : '/placeholder-author.jpg';

    return (
        <>
        <Head>
          <title>{post.title}</title>
          <meta name="description" content={`${post.title} by ${post.authorName}`} />
          <meta property="og:title" content={post.title} />
          <meta property="og:type" content="article" />
          {mainImageUrl !== '/placeholder-main.jpg' && <meta property="og:image" content={mainImageUrl} />}
        </Head>
        <NavBar />
        <EnhancedCleanArticle
            title={post.title}
            authorName={post.authorName || 'Unknown Author'}
            authorImage={authorImageUrl}
            readingTime={readingTime.toString()}
            publishedAt={post.publishedAt}
            mainImage={mainImageUrl}
            body={post.body}
        />
        </>
    );
}
