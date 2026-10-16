import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "How should I start learning local AI? — Quickstart GenAI",
  },
  description:
    "Start by running a local model, then connect it to a small application. Once that works, explore retrieval and tool use. The book introduces local inference, AI concepts, RAG, SQL integration, and agents through a practical roadmap.",
  alternates: {
    canonical: "https://quickstartgenai.com/guides/learning-path/",
  },
  openGraph: {
    type: "website",
    url: "https://quickstartgenai.com/guides/learning-path/",
    title: "How should I start learning local AI? — Quickstart GenAI",
    description:
      "Start by running a local model, then connect it to a small application. Once that works, explore retrieval and tool use. The book introduces local inference, AI concepts, RAG, SQL integration, and agents through a practical roadmap.",
    images: ["/book-cover.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How should I start learning local AI? — Quickstart GenAI",
    description:
      "Start by running a local model, then connect it to a small application. Once that works, explore retrieval and tool use. The book introduces local inference, AI concepts, RAG, SQL integration, and agents through a practical roadmap.",
    images: ["/book-cover.webp"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://quickstartgenai.com/#website",
      url: "https://quickstartgenai.com/",
      name: "Quickstart GenAI",
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": "https://quickstartgenai.com/guides/learning-path/#page",
      url: "https://quickstartgenai.com/guides/learning-path/",
      name: "How should I start learning local AI?",
      description:
        "Start by running a local model, then connect it to a small application. Once that works, explore retrieval and tool use. The book introduces local inference, AI concepts, RAG, SQL integration, and agents through a practical roadmap.",
      dateModified: "2026-10-15",
      isPartOf: {
        "@id": "https://quickstartgenai.com/#website",
      },
      breadcrumb: {
        "@id": "https://quickstartgenai.com/guides/learning-path/#breadcrumbs",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://quickstartgenai.com/guides/learning-path/#breadcrumbs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Quickstart GenAI",
          item: "https://quickstartgenai.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "How should I start learning local AI?",
          item: "https://quickstartgenai.com/guides/learning-path/",
        },
      ],
    },
  ],
};

export default function GuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="book-site">
        <a className="skip" href="#main">
          Skip to content
        </a>
        <header className="masthead">
          <a className="wordmark" href="/">
            <span className="mark">q.</span>Quickstart <b>GenAI</b>
          </a>
          <nav aria-label="Main navigation">
            <a href="/#notes">Field notes</a>
            <a className="nav-buy" href="https://leanpub.com/quickstartwithai">
              Get your copy ↗
            </a>
          </nav>
        </header>
        <main id="main" className="guide-page">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span>Learning guides</span>
          </nav>
          <p className="eyebrow">QUICKSTART GENAI / FIELD NOTES</p>
          <h1>How should I start learning local AI?</h1>
          <p className="guide-deck">
            Start by running a local model, then connect it to a small
            application. Once that works, explore retrieval and tool use. The
            book introduces local inference, AI concepts, RAG, SQL integration,
            and agents through a practical roadmap.
          </p>
          <p className="reviewed">
            Site editorial guide · Reviewed{" "}
            <time dateTime="2026-10-15">15 October 2026</time>
          </p>
          <div className="guide-body">
            <section>
              <h2>01 · Run a model</h2>
              <p>
                Set up a local inference tool and check that you can send a
                prompt and receive an answer.
              </p>
            </section>
            <section>
              <h2>02 · Connect an application</h2>
              <p>
                Build a small interface around inference. Keep your first
                project narrow so you can understand each part.
              </p>
            </section>
            <section>
              <h2>03 · Add knowledge and tools</h2>
              <p>
                Move to retrieval over your own documents, SQL integration, or
                an agent workflow when you can evaluate the simpler application.
              </p>
            </section>
          </div>
          <p className="guide-source">
            Further reading:{" "}
            <a href="https://leanpub.com/quickstartwithai">
              Book details and complete contents ↗
            </a>
            .<br />
            This short learning guide introduces concepts; it is not an excerpt
            from the book.
          </p>
          <aside className="guide-book-cta">
            <h2>Put it into practice.</h2>
            <p>
              Explore <cite>Generative AI with Local LLM</cite> by Shamim
              Bhuiyan and Timur Isachenko.
            </p>
            <a className="button" href="https://leanpub.com/quickstartwithai">
              Explore the book and free sample ↗
            </a>
          </aside>
          <nav className="related-guides" aria-label="Related guides">
            <a href="/guides/local-llm/">What is a local LLM? ↗</a>
            <a href="/guides/rag/">
              What is retrieval-augmented generation? ↗
            </a>
          </nav>
        </main>
        <footer className="site-footer">
          <a href="/">← Back to the book</a>
          <p>Quickstart GenAI · Learning guides</p>
        </footer>
      </div>
    </>
  );
}
