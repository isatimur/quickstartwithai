import fs from 'fs';
import path from 'path';

export interface PostMeta {
    _id: string;
    title: string;
    slug: { current: string };
    mainImage: { asset: { _ref: string } } | null;
    excerpt: string;
    authorName: string;
    authorImage: { asset: { _ref: string } } | null;
    publishedAt: string;
    estimatedReadingTime: number;
    categories: string[];
}

export interface PostFull extends PostMeta {
    body: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'posts');

function parseFrontMatter(content: string): { data: Record<string, unknown>, body: string } {
    if (content.startsWith('---')) {
        const end = content.indexOf('\n---', 3);
        if (end !== -1) {
            const fm = content.slice(3, end).trim();
            const body = content.slice(end + 4).replace(/^\n+/, '');
            const data: Record<string, unknown> = {};
            fm.split(/\r?\n/).forEach(line => {
                const idx = line.indexOf(':');
                if (idx !== -1) {
                    const key = line.slice(0, idx).trim();
                    const raw = line.slice(idx + 1).trim();
                    let value: unknown = raw;
                    if (raw.startsWith('[') && raw.endsWith(']')) {
                        try { value = JSON.parse(raw); } catch { value = []; }
                    } else if (/^".*"$/.test(raw) || /^'.*'$/.test(raw)) {
                        value = raw.slice(1, -1);
                    }
                    data[key] = value;
                }
            });
            return { data, body };
        }
    }
    return { data: {}, body: content };
}

function computeReadingTime(text: string): number {
    const words = text.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
}

export function getAllPostsMeta(): PostMeta[] {
    if (!fs.existsSync(CONTENT_DIR)) return [];
    const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
    const posts: PostMeta[] = files.map((file) => {
        const filePath = path.join(CONTENT_DIR, file);
        const raw = fs.readFileSync(filePath, 'utf8');
        const { data, body } = parseFrontMatter(raw);
        const slug = (data.slug as string) || file.replace(/\.(md|mdx)$/i, '');
        const publishedAt = (data.publishedAt as string) || new Date().toISOString();
        const title = (data.title as string) || slug;
        const excerpt = (data.excerpt as string) || body.slice(0, 160);
        const categories = Array.isArray(data.categories) ? data.categories as string[] : [];
        const authorName = (data.authorName as string) || '';
        const estimatedReadingTime = computeReadingTime(body);
        return {
            _id: slug,
            title,
            slug: { current: slug },
            mainImage: null,
            excerpt,
            authorName,
            authorImage: null,
            publishedAt,
            estimatedReadingTime,
            categories,
        };
    });
    // Newest first
    posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    return posts;
}

export function getPaginatedPosts(search: string, page: number, pageSize: number): { posts: PostMeta[], total: number } {
    const all = getAllPostsMeta();
    const term = (search || '').toLowerCase();
    const filtered = term ? all.filter(p => p.title.toLowerCase().includes(term)) : all;
    const total = filtered.length;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return { posts: filtered.slice(start, end), total };
}

export function getPostBySlug(slug: string): PostFull | null {
    const candidates = [path.join(CONTENT_DIR, `${slug}.md`), path.join(CONTENT_DIR, `${slug}.mdx`)];
    const filePath = candidates.find(p => fs.existsSync(p));
    if (!filePath) return null;
    const raw = fs.readFileSync(filePath, 'utf8');
    const { body } = parseFrontMatter(raw);
    const metaList = getAllPostsMeta();
    const meta = metaList.find(p => p.slug.current === slug);
    if (!meta) return null;
    return { ...meta, body };
}


