/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Share2, BookOpen, Clock } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { portableTextComponents } from './portableTextComponents';
import { TableOfContents } from './TableOfContents';
import Link from 'next/link';
import { Brain } from 'lucide-react';

interface ArticleProps {
    title: string;
    authorName: string;
    authorImage: string;
    readingTime: string;
    mainImage: string;
    publishedDate: string;
    bio: string;
    body: any[];
}


export default function EnhancedCleanArticle({
    title,
    mainImage,
    authorName,
    authorImage,
    publishedDate,
    bio,
    readingTime,
    body,
}: ArticleProps) {
    const [progress, setProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('');


    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            setProgress((scrollPosition / totalHeight) * 100);

            const sections = document.querySelectorAll('h2[id]');
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i] as HTMLElement;
                if (section.getBoundingClientRect().top <= 100) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <Progress value={progress} className="fixed top-0 left-0 right-0 z-50" />
            <header className="bg-white py-4 top-0 z-10 shadow-sm">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                            <Brain className="h-8 w-8 text-blue-600" />
                            <Link href="/"><h1 className="text-2xl font-bold">Generative AI Guide</h1></Link>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Link href="/blog">Blog</Link>
                    </div>
                </div>

                <div className="relative h-[40vh] mb-8 rounded-xl overflow-hidden">
                    {mainImage && (
                        <Image
                            src={mainImage}
                            alt={title}
                            fill
                            className="w-full h-full object-cover"
                            priority
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
                    <h1 className="absolute bottom-6 left-6 right-6 text-4xl sm:text-5xl font-bold text-white leading-tight">
                        {title}
                    </h1>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center">
                        <Avatar className="h-12 w-12">
                            {authorImage ? (
                                <AvatarImage src={authorImage} alt={authorName} />
                            ) : (
                                <AvatarFallback>{authorName ? authorName.slice(0, 2).toUpperCase() : 'AU'}</AvatarFallback>
                            )}
                        </Avatar>
                        <div className="ml-4">
                            <p className="text-lg font-medium">{authorName}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                                <BookOpen className="w-4 h-4 mr-1" />
                                <span>{readingTime} min read</span>
                                <span className="mx-2">•</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span>{publishedDate}</span>
                            </div>
                        </div>
                    </div>
                    <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                    </Button>
                </div>
            </header>

            <div className="lg:flex lg:gap-12">
                <aside className="hidden lg:block lg:w-1/4">
                    <div className="sticky top-4">
                        <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                        <TableOfContents body={body} />
                    </div>
                </aside>

                <main className="lg:w-3/4">
                    <article className="prose prose-lg mb-12">
                        <PortableText value={body} components={portableTextComponents} />
                    </article>
                </main>
            </div>

            <footer className="mt-12 pt-8 border-t">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-semibold mb-4">About the Author</h3>
                        <div className="flex items-start">
                            <Avatar className="h-16 w-16">
                                {authorImage ? (
                                    <AvatarImage src={authorImage} alt={authorName} />
                                ) : (
                                    <AvatarFallback>
                                        {authorName ? authorName.slice(0, 2).toUpperCase() : 'AU'}
                                    </AvatarFallback>
                                )}
                            </Avatar>
                            <div className="ml-4">
                                <p key={authorName} className="text-lg font-medium">{authorName}</p>
                                <p key={bio} className="text-muted-foreground mt-2" suppressHydrationWarning>
                                    {isClient ?
                                        (bio ?
                                            <PortableText value={bio as any} components={portableTextComponents} /> : null
                                        ) : null}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    );
}