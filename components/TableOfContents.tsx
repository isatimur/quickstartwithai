/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

interface Heading {
    text: string;
    level: number;
    slug: string;
}

interface TableOfContentsProps {
    body: any[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ body }) => {
    const [headings, setHeadings] = useState<Heading[]>([]);

    useEffect(() => {
        const newHeadings: Heading[] = body
            .filter((block) => block._type === 'block' && block.style?.startsWith('h'))
            .map((block) => ({
                text: block.children.map((child: any) => child.text).join(''),
                level: parseInt(block.style.replace('h', '')),
                slug: block._key,
            }));
        setHeadings(newHeadings);
    }, [body]);

    return (
        <nav className="space-y-1 text-sm">
            {headings.map((heading) => (
                <a
                    key={heading.slug}
                    href={`#${heading.slug}`}
                    className={`block py-2 px-3 rounded-md transition-colors hover:bg-gray-100`}
                >
                    <span className={`pl-${(heading.level - 1) * 2}`}>{heading.text}</span>
                </a>
            ))}
        </nav>
    );
};