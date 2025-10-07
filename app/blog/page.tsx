import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog - Practical Generative AI Development',
    description: 'Explore articles about local LLM development, AI applications, RAG implementation, and practical AI development guides.',
    alternates: {
        canonical: 'https://blog.quickstartgenai.com',
    },
    openGraph: {
        title: 'Blog - Practical Generative AI Development',
        description: 'Explore articles about local LLM development, AI applications, RAG implementation, and practical AI development guides.',
        type: 'website',
        url: 'https://blog.quickstartgenai.com',
        siteName: 'Generative AI with Local LLM',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog - Practical Generative AI Development',
        description: 'Explore articles about local LLM development, AI applications, RAG implementation, and practical AI development guides.',
    },
};

export default function BlogPage() {
    redirect('https://blog.quickstartgenai.com')
}
