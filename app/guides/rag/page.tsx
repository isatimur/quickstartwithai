import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "What is retrieval-augmented generation? — Quickstart GenAI",
  },
  description:
    "Retrieval-augmented generation (RAG) supplies a language model with relevant information retrieved from an external knowledge source at query time. It can connect an application to documents or data beyond the model’s training.",
  alternates: {
    canonical: "https://quickstartgenai.com/guides/rag/",
  },
  openGraph: {
    type: "website",
    url: "https://quickstartgenai.com/guides/rag/",
    title: "What is retrieval-augmented generation? — Quickstart GenAI",
    description:
      "Retrieval-augmented generation (RAG) supplies a language model with relevant information retrieved from an external knowledge source at query time. It can connect an application to documents or data beyond the model’s training.",
    images: ["/book-cover.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is retrieval-augmented generation? — Quickstart GenAI",
    description:
      "Retrieval-augmented generation (RAG) supplies a language model with relevant information retrieved from an external knowledge source at query time. It can connect an application to documents or data beyond the model’s training.",
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
      "@id": "https://quickstartgenai.com/guides/rag/#page",
      url: "https://quickstartgenai.com/guides/rag/",
      name: "What is retrieval-augmented generation?",
      description:
        "Retrieval-augmented generation (RAG) supplies a language model with relevant information retrieved from an external knowledge source at query time. It can connect an application to documents or data beyond the model’s training.",
      dateModified: "2026-10-15",
      isPartOf: {
        "@id": "https://quickstartgenai.com/#website",
      },
      breadcrumb: {
        "@id": "https://quickstartgenai.com/guides/rag/#breadcrumbs",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://quickstartgenai.com/guides/rag/#breadcrumbs",
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
          name: "What is retrieval-augmented generation?",
          item: "https://quickstartgenai.com/guides/rag/",
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
          <h1>What is retrieval-augmented generation?</h1>
          <p className="guide-deck">
            Retrieval-augmented generation (RAG) supplies a language model with
            relevant information retrieved from an external knowledge source at
            query time. It can connect an application to documents or data
            beyond the model’s training.
          </p>
          <p className="reviewed">
            Site editorial guide · Reviewed{" "}
            <time dateTime="2026-10-15">15 October 2026</time>
          </p>
          <div className="guide-body">
            <section>
              <h2>Retrieve before generating</h2>
              <p>
                Find material relevant to the question, then provide that
                material as context for the model’s response.
              </p>
            </section>
            <section>
              <h2>Use the knowledge you have</h2>
              <p>
                A knowledge source can be documents, a vector store, or an
                existing database. Retrieval does not always require building a
                new vector database.
              </p>
            </section>
            <section>
              <h2>Evaluate the answer</h2>
              <p>
                Relevant context can improve grounding, but it does not
                guarantee accuracy. Check retrieved material and verify the
                claims in the response.
              </p>
            </section>
          </div>
          <p className="guide-source">
            Further reading:{" "}
            <a href="https://docs.langchain.com/oss/python/deepagents/retrieval">
              LangChain retrieval documentation ↗
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
            <a href="/guides/learning-path/">
              How should I start learning local AI? ↗
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
