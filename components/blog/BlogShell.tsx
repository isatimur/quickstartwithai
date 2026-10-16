import type { ReactNode } from "react";
export function BlogShell({ children }: { children: ReactNode }) {
  return (
    <div className="book-site">
      <header className="masthead">
        <a className="wordmark" href="/">
          <span className="mark" aria-hidden="true">
            q.
          </span>
          Quickstart <b>GenAI</b>
        </a>
        <nav aria-label="Main navigation">
          <a href="/">The book</a>
          <a href="/blog">Engineering blog</a>
          <a className="nav-buy" href="https://leanpub.com/quickstartwithai">
            Get your copy ↗
          </a>
        </nav>
      </header>
      {children}
      <footer className="site-footer">
        <a href="/">← Back to the book</a>
        <nav aria-label="Blog footer">
          <a href="/blog/feed.xml">RSS feed</a>
          <a href="/studio">Edit in Sanity</a>
        </nav>
        <p>© {new Date().getFullYear()} Shamim Bhuiyan & Timur Isachenko</p>
      </footer>
    </div>
  );
}
