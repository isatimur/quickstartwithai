import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "What is a local LLM? — Quickstart GenAI",
  },
  description:
    "A local large language model runs inference on hardware you control, instead of sending every inference request to a hosted model API. The model still needs to be downloaded, and any connected services may use the network.",
  alternates: {
    canonical: "https://quickstartgenai.com/guides/local-llm/",
  },
  openGraph: {
    type: "website",
    url: "https://quickstartgenai.com/guides/local-llm/",
    title: "What is a local LLM? — Quickstart GenAI",
    description:
      "A local large language model runs inference on hardware you control, instead of sending every inference request to a hosted model API. The model still needs to be downloaded, and any connected services may use the network.",
    images: ["/book-cover.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is a local LLM? — Quickstart GenAI",
    description:
      "A local large language model runs inference on hardware you control, instead of sending every inference request to a hosted model API. The model still needs to be downloaded, and any connected services may use the network.",
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
      "@id": "https://quickstartgenai.com/guides/local-llm/#page",
      url: "https://quickstartgenai.com/guides/local-llm/",
      name: "What is a local LLM?",
      description:
        "A local large language model runs inference on hardware you control, instead of sending every inference request to a hosted model API. The model still needs to be downloaded, and any connected services may use the network.",
      dateModified: "2026-10-15",
      isPartOf: {
        "@id": "https://quickstartgenai.com/#website",
      },
      breadcrumb: {
        "@id": "https://quickstartgenai.com/guides/local-llm/#breadcrumbs",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://quickstartgenai.com/guides/local-llm/#breadcrumbs",
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
          name: "What is a local LLM?",
          item: "https://quickstartgenai.com/guides/local-llm/",
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
          <h1>What is a local LLM?</h1>
          <p className="guide-deck">
            A local large language model runs inference on hardware you control,
            instead of sending every inference request to a hosted model API.
            The model still needs to be downloaded, and any connected services
            may use the network.
          </p>
          <p className="reviewed">
            Site editorial guide · Reviewed{" "}
            <time dateTime="2026-10-15">15 October 2026</time>
          </p>
          <div className="guide-body">
            <section>
              <h2>Start with the model</h2>
              <p>
                Choose a model that fits the memory and compute available on
                your machine. A smaller model is often a more approachable first
                experiment.
              </p>
            </section>
            <section>
              <h2>Build around local inference</h2>
              <p>
                Ollama provides a way to run models locally and connect
                applications to them. Local models can be used without a cloud
                API key.
              </p>
            </section>
            <section>
              <h2>Know the boundary</h2>
              <p>
                Running a model locally does not make every application private
                automatically. Check your tools, logging, document stores, and
                external integrations.
              </p>
            </section>
          </div>
          <p className="guide-source">
            Further reading:{" "}
            <a href="https://docs.ollama.com/quickstart">
              Ollama quickstart ↗
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
            <a href="/guides/rag/">
              What is retrieval-augmented generation? ↗
            </a>
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
