export default function generateStructuredData() {
    return {
        "@context": "https://schema.org",
        "@type": "Book",
        "name": "Generative AI with Local LLM",
        "alternateName": "Local LLM Development Guide",
        "author": [
            {
                "@type": "Person",
                "name": "Shamim Bhuiyan",
                "jobTitle": "AI Development Expert",
                "sameAs": ["https://linkedin.com/in/shamim-bhuiyan"]
            },
            {
                "@type": "Person",
                "name": "Timur Isachenko",
                "jobTitle": "Software Architecture Expert",
                "sameAs": ["https://linkedin.com/in/timur-isachenko"]
            }
        ],
        "publisher": {
            "@type": "Organization",
            "name": "Leanpub"
        },
        "bookFormat": "EBook",
        "description": "A comprehensive and practical roadmap to develop AI applications with local LLM inference. Learn RAG implementation, AI agents development, and production-ready architectures without cloud dependencies.",
        "genre": ["Technology", "Computer Programming", "Artificial Intelligence"],
        "inLanguage": "en-US",
        "keywords": "Local LLM, AI Development, RAG, AI Agents, Generative AI, Machine Learning, Python, LangChain",
        "numberOfPages": "300",
        "datePublished": "2024",
        "educationalLevel": "Advanced",
        "audience": "Software Developers",
        "offers": {
            "@type": "Offer",
            "price": "19.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://leanpub.com/quickstartwithai"
        }
    }
} 