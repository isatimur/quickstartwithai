/* eslint-disable @typescript-eslint/no-explicit-any */
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CalendarIcon, ClockIcon, TagIcon } from 'lucide-react';
import { format } from 'date-fns';
import createImageUrlBuilder from '@sanity/image-url';

export const revalidate = 60; // Revalidate every 60 seconds

interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    mainImage: { asset: { _ref: string } };
    excerpt: string;
    authorName: string;
    authorImage: { asset: { _ref: string } };
    publishedAt: string;
    estimatedReadingTime: number;
    categories: string[];
}

export default async function BlogPage() {
    const posts: Post[] = await client.fetch(groq`
        *[_type == "post"]{
          _id,
          title,
          slug,
          mainImage,
          excerpt,
          "authorName": author->name,
          "authorImage": author->image,
          publishedAt,
          "estimatedReadingTime": round(length(pt::text(body)) / 5 / 200),
          "categories": categories[]->title
        } | order(publishedAt desc)
      `);

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-3xl font-bold text-gray-900">The book: &quot;Getting started with Generative AI&quot;</h1>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <Input
                        className="max-w-md"
                        placeholder="Search articles..."
                        type="search"
                    />
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Card key={post._id} className="overflow-hidden">
                            <Image
                                alt={post.title}
                                className="object-cover w-full h-48"
                                height={200}
                                src={createImageUrlBuilder(client).image(post.mainImage).height(200).width(400).url()}
                                width={400}
                            />
                            <CardHeader>
                                <CardTitle>{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">{post.excerpt}</p>
                                <div className="flex items-center mt-4 space-x-4 text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <CalendarIcon className="w-4 h-4 mr-1" />
                                        <span>{format(new Date(post.publishedAt), 'MMM dd, yyyy')}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <ClockIcon className="w-4 h-4 mr-1" />
                                        <span>{post.estimatedReadingTime} min read</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mt-2">
                                    {post.categories.map((category) => (
                                        <span
                                            key={category}
                                            className="inline-flex items-center px-2 py-1 mr-2 mt-2 text-xs font-medium text-blue-800 bg-blue-100 rounded"
                                        >
                                            <TagIcon className="w-3 h-3 mr-1" />
                                            {category}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button asChild>
                                    <Link href={`/blog/${post.slug.current}`}>Read More</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Button variant="outline">Load More Articles</Button>
                </div>
            </main>
            <footer className="bg-white shadow mt-12">
                <div className="container mx-auto px-4 py-6 text-center text-gray-600">
                    <p>&copy; 2024 Our Blog. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}