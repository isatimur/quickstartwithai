import assert from 'node:assert/strict'

const base = process.env.BOOK_CHECK_URL || 'http://127.0.0.1:3007'
const pages = ['/', '/guides/local-llm', '/guides/rag', '/guides/learning-path']
for (const path of pages) {
  const response = await fetch(base + path)
  assert.equal(response.status, 200, path)
  const html = await response.text()
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: one server-rendered H1`)
  assert.ok(html.includes('book-site'), `${path}: editorial layout is rendered before JavaScript`)
  assert.ok(!html.includes('local-llm-field-guide.isatimur.chatgpt.site'), `${path}: production domain`)
  assert.match(html, /rel="canonical" href="https:\/\/quickstartgenai\.com(?:\/|")/, `${path}: canonical`)
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
  assert.equal(scripts.length, 1, `${path}: single structured-data graph`)
  for (const [, json] of scripts) assert.ok(JSON.parse(json)['@graph'])
  for (const asset of [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m => m[1])) {
    assert.equal((await fetch(new URL(asset, base))).status, 200, `${path}: ${asset}`)
  }
}
for (const path of ['/buy', '/faq', '/privacy-policy', '/terms', '/llms.txt', '/sitemap.xml']) {
  assert.equal((await fetch(base + path)).status, 200, `existing route: ${path}`)
}
const sitemap = await (await fetch(base + '/sitemap.xml')).text()
for (const path of pages.slice(1)) assert.ok(sitemap.includes(path), `sitemap: ${path}`)
const redirects = await fetch(base + '/blog', { redirect: 'manual' })
assert.equal(redirects.status, 301)
assert.equal(redirects.headers.get('location'), 'https://blog.quickstartgenai.com/')
console.log('PASS: server-rendered book and guides, production metadata, JSON-LD, images, legacy routes, sitemap, and blog redirect.')
