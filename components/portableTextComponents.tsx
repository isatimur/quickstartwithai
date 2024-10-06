/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy as codeStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const portableTextComponents = {
    types: {
        image: ({ value }: any) => {
            const imageUrl = urlFor(value)
                .width(800)
                .height(600)
                .fit('max')
                .auto('format')
                .url();

            return (
                <div className="my-6">
                    <Image
                        src={imageUrl}
                        alt={value.alt || 'Article Image'}
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-lg"
                    />
                    {value.caption && (
                        <p className="text-sm text-center text-gray-500 mt-2">{value.caption}</p>
                    )}
                </div>
            );
        },
        code: ({ value }: any) => {
            return (
                <div className="my-6">
                    <SyntaxHighlighter
                        language={value.language || 'javascript'}
                        style={codeStyle}
                        customStyle={{ borderRadius: '0.5rem', padding: '1rem' }}
                    >
                        {value.code}
                    </SyntaxHighlighter>
                    {value.filename && (
                        <p className="text-sm text-gray-500 mt-2">Filename: {value.filename}</p>
                    )}
                </div>
            );
        },
    },
    block: {
        h1: ({ children, value }: any) => (
            <h1 id={value._key} className="text-4xl font-bold mt-10 mb-6">
                {children}
            </h1>
        ),
        h2: ({ children, value }: any) => (
            <h2 id={value._key} className="text-3xl font-bold mt-8 mb-4">
                {children}
            </h2>
        ),
        h3: ({ children, value }: any) => (
            <h3 id={value._key} className="text-2xl font-semibold mt-6 mb-3">
                {children}
            </h3>
        ),
        normal: ({ children }: any) => <p className="mb-4 leading-relaxed">{children}</p>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-blue-600 pl-4 italic my-6 text-gray-700">
                {children}
            </blockquote>
        ),
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
            return (
                <a href={value.href} rel={rel} className="text-blue-600 hover:underline">
                    {children}
                </a>
            );
        },
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc list-inside mb-4">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal list-inside mb-4">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }: any) => <li className="ml-4">{children}</li>,
        number: ({ children }: any) => <li className="ml-4">{children}</li>,
    },
};