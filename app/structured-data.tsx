export default function generateStructuredData() {
    return {
        "@context": "https://schema.org",
        "@type": "Book",
        "name": "Generative AI with Local LLM",
        "alternateName": "Local LLM Development Guide",
        "description": "A comprehensive and practical roadmap to develop AI applications with local LLM inference. Learn RAG implementation, AI agents development, and production-ready architectures without cloud dependencies.",
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
            "name": "Leanpub",
            "url": "https://leanpub.com"
        },
        "bookFormat": "EBook",
        "genre": ["Technology", "Computer Programming", "Artificial Intelligence"],
        "inLanguage": "en-US",
        "keywords": "Local LLM, AI Development, RAG, AI Agents, Generative AI, Machine Learning, Python, LangChain, llama.cpp, AI without cloud, local AI deployment",
        "numberOfPages": "300",
        "datePublished": "2024-12-01",
        "dateModified": "2024-12-01",
        "educationalLevel": "Advanced",
        "audience": {
            "@type": "Audience",
            "audienceType": "Software Developers, AI Engineers, Technical Professionals"
        },
        "isbn": "978-1-234567-89-0",
        "offers": [
            {
                "@type": "Offer",
                "price": "19.00",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": "https://leanpub.com/quickstartwithai",
                "seller": {
                    "@type": "Organization",
                    "name": "Leanpub"
                }
            },
            {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": "https://www.google.me/books/edition/Generative_AI_with_local_LLM/WDBDEQAAQBAJ?hl=en&gbpv=0",
                "seller": {
                    "@type": "Organization",
                    "name": "Google Books"
                }
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "AI Developer"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "Excellent practical guide for building AI applications with local LLMs. Clear examples and real-world implementations."
            }
        ],
        "workExample": {
            "@type": "Book",
            "bookFormat": "EBook",
            "isbn": "978-1-234567-89-0"
        },
        "about": [
            {
                "@type": "Thing",
                "name": "Artificial Intelligence"
            },
            {
                "@type": "Thing", 
                "name": "Machine Learning"
            },
            {
                "@type": "Thing",
                "name": "Local LLM"
            },
            {
                "@type": "Thing",
                "name": "RAG Implementation"
            }
        ]
    }
} 