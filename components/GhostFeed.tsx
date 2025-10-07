import { fetchGhostRss } from '@/lib/ghost/rss'

export default async function GhostFeed() {
  const items = await fetchGhostRss(5)
  if (!items.length) return null
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Latest from our Blog</h2>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.link} className="flex items-center justify-between border-b pb-3">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {item.title}
              </a>
              {item.isoDate && (
                <time className="text-sm text-gray-500">
                  {new Date(item.isoDate).toLocaleDateString()}
                </time>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}



