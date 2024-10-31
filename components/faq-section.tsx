'use client'

export function FAQSection() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do I need machine learning expertise to use this book?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, this book is specifically designed for software developers without ML expertise. We focus on practical implementation using existing tools and frameworks."
                }
            },
            {
                "@type": "Question",
                "name": "What will I learn about Local LLM development?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You'll learn how to set up and deploy LLMs locally, implement RAG (Retrieval-Augmented Generation), develop AI agents, and create production-ready AI applications without cloud dependencies."
                }
            },
            {
                "@type": "Question",
                "name": "What programming languages and tools are covered?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The book covers Python, LangChain, llama.cpp, and various AI frameworks with practical examples and step-by-step implementations."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {/* Render FAQ content here */}
        </>
    );
} 