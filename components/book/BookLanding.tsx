export function BookLanding() {
  return (
    <div className="book-site">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="edition-bar">
        A practical guide to local language models{" "}
        <span>By Shamim Bhuiyan &amp; Timur Isachenko</span>
      </div>
      <header className="masthead">
        <a className="wordmark" href="/" aria-label="Quickstart GenAI home">
          <span className="mark" aria-hidden="true">
            q.
          </span>
          Quickstart <b>GenAI</b>
        </a>
        <nav aria-label="Main navigation">
          <a href="#contents">The book</a>
          <a href="#notes">Field notes</a>
          <a href="#authors">Authors</a>
          <a href="/faq">FAQ</a>
          <a href="https://blog.quickstartgenai.com/">Blog</a>
          <a className="nav-buy" href="https://leanpub.com/quickstartwithai">
            Get your copy <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="opening">
          <div className="opening-intro">
            <p className="eyebrow">
              THE PRACTICAL AI BOOK / FOR CURIOUS BUILDERS
            </p>
            <h1>
              Generative AI
              <br />
              <em>with Local LLM.</em>
            </h1>
            <p className="deck">
              Big possibilities. Your own machine.
              <br />A practical path from understanding AI to building with it.
            </p>
          </div>
          <div className="book-showcase">
            <svg
              className="contours"
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g fill="none" stroke="currentColor" strokeWidth="1">
                <ellipse cx="600" cy="530" rx="180" ry="95"></ellipse>
                <ellipse cx="600" cy="530" rx="260" ry="140"></ellipse>
                <ellipse cx="600" cy="530" rx="340" ry="185"></ellipse>
                <ellipse cx="600" cy="530" rx="420" ry="230"></ellipse>
                <ellipse cx="600" cy="530" rx="500" ry="275"></ellipse>
                <ellipse cx="600" cy="530" rx="580" ry="320"></ellipse>
                <ellipse cx="600" cy="530" rx="660" ry="365"></ellipse>
              </g>
            </svg>
            <div className="showcase-note">
              <span className="small-label">START HERE</span>
              <p>
                You don’t need to be
                <br />a machine learning
                <br />
                <em>expert.</em>
              </p>
              <div className="note-rule"></div>
              <span className="small-label">
                JUST A LITTLE CURIOSITY.
                <br />
                AND SOMETHING TO BUILD.
              </span>
            </div>
            <div className="cover-object">
              <img
                src="/book-cover.webp"
                width="300"
                height="450"
                fetchPriority="high"
                alt="Generative AI with Local LLM by Shamim Bhuiyan and Timur Isachenko"
              />
              <span className="cover-pages" aria-hidden="true"></span>
            </div>
            <div className="purchase-note">
              <p className="small-label">YOUR NEXT CHAPTER</p>
              <h2>
                Read it.
                <br />
                Try it.
                <br />
                <em>Make it yours.</em>
              </h2>
              <a className="button" href="https://leanpub.com/quickstartwithai">
                Get the book <span aria-hidden="true">↗</span>
              </a>
              <a
                className="sample-link"
                href="https://leanpub.com/quickstartwithai"
              >
                Explore the free sample
              </a>
              <p className="format-note">PDF + EPUB · Companion code</p>
            </div>
            <span className="showcase-caption">
              A FIELD GUIDE TO MAKING AI YOUR OWN
            </span>
          </div>
        </section>
        <section className="book-summary">
          <p className="eyebrow">
            LESS DISTANCE BETWEEN
            <br />
            “WHAT IF” AND “IT WORKS.”
          </p>
          <div>
            <h2>
              From your first prompt
              <br />
              to your first <em>AI application.</em>
            </h2>
            <p>
              <cite>Generative AI with Local LLM</cite> is a practical book by
              Shamim Bhuiyan and Timur Isachenko. It introduces local inference,
              retrieval-augmented generation (RAG), SQL integration, and AI
              agents, connecting the concepts to tools and application
              development.
            </p>
            <a
              className="inline-link"
              href="https://github.com/srecon/Getting_started_with_AI"
            >
              Open the companion code <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
        <span id="features" aria-hidden="true"></span>
        <section className="contents" id="contents">
          <div className="section-title">
            <p className="eyebrow">01 / INSIDE THE BOOK</p>
            <h2>
              A path you can
              <br />
              <em>actually follow.</em>
            </h2>
            <p>
              Start with the foundations.
              <br />
              Build toward something of your own.
            </p>
          </div>
          <div className="contents-list">
            <details open={true}>
              <summary>
                <span className="chapter-number">01</span>
                <span>
                  Get a model running locally
                  <small>OLLAMA · PYTHON · LOCAL INFERENCE</small>
                </span>
                <span className="expand" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="chapter-body">
                <p>
                  Set up a Python environment and configure local inference
                  tools. Learn the building blocks of running language models on
                  hardware you control.
                </p>
                <a href="/guides/local-llm/">Read: What is a local LLM? ↗</a>
              </div>
            </details>
            <details>
              <summary>
                <span className="chapter-number">02</span>
                <span>
                  Give your model knowledge
                  <small>RAG · EMBEDDINGS · VECTOR DATABASES</small>
                </span>
                <span className="expand" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="chapter-body">
                <p>
                  Explore retrieval-augmented generation: bring relevant
                  information from documents and datasets into your model’s
                  context.
                </p>
                <a href="/guides/rag/">Read: What is RAG? ↗</a>
              </div>
            </details>
            <details>
              <summary>
                <span className="chapter-number">03</span>
                <span>
                  Connect ideas to actions
                  <small>AI AGENTS · TOOL USE · WORKFLOWS</small>
                </span>
                <span className="expand" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="chapter-body">
                <p>
                  Learn how agents connect language models to tools and
                  workflows, and explore how they can automate tasks in real
                  applications.
                </p>
                <a href="https://github.com/srecon/Getting_started_with_AI">
                  Explore the companion repository ↗
                </a>
              </div>
            </details>
            <details>
              <summary>
                <span className="chapter-number">04</span>
                <span>
                  Take the next step
                  <small>TEXT-TO-SQL · FINE-TUNING · MCP</small>
                </span>
                <span className="expand" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="chapter-body">
                <p>
                  Go further with SQL integration, fine-tuning, model
                  orchestration, and the Model Context Protocol.
                </p>
                <a href="/guides/learning-path/">
                  Read: Your local AI learning path ↗
                </a>
              </div>
            </details>
            <p className="contents-footnote">
              A thematic reading path. Find the full table of contents on{" "}
              <a href="https://leanpub.com/quickstartwithai">Leanpub ↗</a>.
            </p>
          </div>
        </section>
        <section className="possibilities">
          <p className="eyebrow">02 / PUT IT TO WORK</p>
          <h2>
            The best way to understand it?
            <br />
            <em>Build something with it.</em>
          </h2>
          <div className="possibility-grid">
            <article>
              <div className="project-visual documents" aria-hidden="true">
                <span>YOUR DOCUMENTS</span>
                <div className="paper paper-a">
                  Aa
                  <span>
                    ────────
                    <br />
                    ──────
                    <br />
                    ────────
                  </span>
                </div>
                <div className="paper paper-b">?</div>
              </div>
              <h3>Answers from your documents.</h3>
              <p>
                Explore RAG systems that retrieve relevant context from private
                datasets before generating a response.
              </p>
            </article>
            <article>
              <div className="project-visual database" aria-hidden="true">
                <span>YOUR DATA</span>
                <div className="query">“What changed?”</div>
                <div className="query-result">
                  SELECT <b>possibilities</b>
                  <br />
                  FROM your_data;
                </div>
              </div>
              <h3>A conversation with your data.</h3>
              <p>
                See how Text-to-SQL connects natural-language questions with
                queries against SQL databases.
              </p>
            </article>
            <article>
              <div className="project-visual workflow" aria-hidden="true">
                <span>YOUR WORKFLOW</span>
                <div className="workflow-nodes">
                  <b>Task</b>
                  <i>→</i>
                  <b>Agent</b>
                  <i>→</i>
                  <b>Tool</b>
                </div>
              </div>
              <h3>Tools that work together.</h3>
              <p>
                Understand the foundations of agents that use tools and
                coordinate steps in an application workflow.
              </p>
            </article>
          </div>
        </section>
        <section id="notes" className="field-notes">
          <div className="notes-heading">
            <p className="eyebrow">03 / NOTES FROM THE FIELD</p>
            <h2>
              Small reads.
              <br />
              <em>Useful beginnings.</em>
            </h2>
            <p>A few ideas to carry into your next project.</p>
          </div>
          <div className="note-links">
            <a href="/guides/local-llm/">
              <span className="note-meta">FOUNDATIONS / 01</span>
              <h3>
                What is a<br />
                local LLM?
              </h3>
              <span className="note-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="/guides/rag/">
              <span className="note-meta">KNOWLEDGE / 02</span>
              <h3>
                What is retrieval-
                <br />
                augmented generation?
              </h3>
              <span className="note-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="/guides/learning-path/">
              <span className="note-meta">GETTING STARTED / 03</span>
              <h3>
                Where should your
                <br />
                AI journey begin?
              </h3>
              <span className="note-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
          <p className="review-note">
            Site editorial guides, reviewed{" "}
            <time dateTime="2026-10-15">15 October 2026</time>. Book
            information:{" "}
            <a href="https://leanpub.com/quickstartwithai">Leanpub</a>.
          </p>
        </section>
        <section className="people" id="authors">
          <div className="people-intro">
            <p className="eyebrow">04 / MEET YOUR GUIDES</p>
            <h2>
              Two perspectives.
              <br />
              One practical <em>approach.</em>
            </h2>
            <p>
              Written by architects and developers who work with scalable
              systems, backend engineering, and real applications.
            </p>
          </div>
          <div className="people-grid">
            <article>
              <div className="portrait">
                <img
                  src="/shamim.webp"
                  alt="Shamim Bhuiyan"
                  loading="lazy"
                  width="300"
                  height="350"
                />
              </div>
              <div className="person-copy">
                <p className="small-label">ENTERPRISE ARCHITECT</p>
                <h3>Shamim Bhuiyan</h3>
                <p>Designing high-load, scalable IT systems.</p>
                <a
                  className="inline-link"
                  href="https://www.linkedin.com/in/shamimbhuiyan/"
                >
                  Meet Shamim ↗
                </a>
              </div>
            </article>
            <article>
              <div className="portrait">
                <img
                  src="/timur_isachenko.webp"
                  alt="Timur Isachenko"
                  loading="lazy"
                  width="300"
                  height="350"
                />
              </div>
              <div className="person-copy">
                <p className="small-label">
                  TECHNICAL LEAD &amp; SOLUTION ARCHITECT
                </p>
                <h3>Timur Isachenko</h3>
                <p>Backend development and microservices architecture.</p>
                <a
                  className="inline-link"
                  href="https://www.linkedin.com/in/timur-isachenko/"
                >
                  Meet Timur ↗
                </a>
              </div>
            </article>
          </div>
        </section>
        <section className="questions" id="faq">
          <div>
            <p className="eyebrow">05 / BEFORE YOU BEGIN</p>
            <h2>
              Good questions.
              <br />
              <em>Straight answers.</em>
            </h2>
          </div>
          <div className="questions-list">
            <details>
              <summary>
                Who is this book for?<span aria-hidden="true">+</span>
              </summary>
              <p>
                Software developers, AI engineers, and technical professionals
                who want a practical introduction to building with local LLMs.
                Some programming experience is helpful; you can be new to AI.
              </p>
            </details>
            <details>
              <summary>
                What tools does it cover?<span aria-hidden="true">+</span>
              </summary>
              <p>
                The book explores Python, Ollama, llama.cpp, LangChain, vector
                databases, Docker, and techniques including RAG, AI agents, and
                Text-to-SQL.
              </p>
            </details>
            <details>
              <summary>
                Can I try it before buying?<span aria-hidden="true">+</span>
              </summary>
              <p>
                Yes. Visit the book’s Leanpub page and select “Read Free Sample”
                to explore the sample before choosing an edition.
              </p>
              <a href="https://leanpub.com/quickstartwithai">
                Read a sample on Leanpub ↗
              </a>
            </details>
            <details>
              <summary>
                Where can I find the code?<span aria-hidden="true">+</span>
              </summary>
              <p>
                Explore the companion repository for examples alongside your
                reading.
              </p>
              <a href="https://github.com/srecon/Getting_started_with_AI">
                Open the GitHub repository ↗
              </a>
            </details>
          </div>
        </section>
        <section className="closing">
          <p className="eyebrow">THERE’S A FIRST PAGE FOR EVERYTHING.</p>
          <h2>
            Make this
            <br />
            <em>your starting point.</em>
          </h2>
          <a
            className="button white"
            href="https://leanpub.com/quickstartwithai"
          >
            Find your edition on Leanpub <span aria-hidden="true">↗</span>
          </a>
          <p>
            Generative AI with Local LLM
            <br />
            Shamim Bhuiyan &amp; Timur Isachenko
          </p>
          <span className="closing-decoration" aria-hidden="true">
            ↗
          </span>
        </section>
      </main>
      <footer className="site-footer">
        <a className="wordmark" href="/">
          <span className="mark" aria-hidden="true">
            q.
          </span>
          Quickstart <b>GenAI</b>
        </a>
        <nav aria-label="Footer navigation">
          <a href="https://blog.quickstartgenai.com/">Engineering blog ↗</a>
          <a href="https://github.com/srecon/Getting_started_with_AI">
            Companion code ↗
          </a>
          <a href="/llms.txt">AI reading guide</a>
          <a href="/privacy-policy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
        <p>© 2026 Shamim Bhuiyan &amp; Timur Isachenko</p>
        <a href="#main">Back to top ↑</a>
      </footer>
    </div>
  );
}
