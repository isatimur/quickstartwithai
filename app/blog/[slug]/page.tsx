import { redirect } from 'next/navigation'

interface BlogPostPageProps {
    params: { slug: string }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    redirect(`https://blog.quickstartgenai.com/${params.slug}`)
}
