import type { Metadata } from "next";
import { BookLanding } from "@/components/book/BookLanding";
import schema from "@/components/book/book-schema.json";

export const metadata: Metadata = {
  title: {
    absolute:
      "Generative AI with Local LLM \u2014 Practical AI Development Book",
  },
  description:
    "Build with local LLMs, RAG, and AI agents. Explore the practical book by Shamim Bhuiyan and Timur Isachenko, free sample, code, and learning guides.",
  alternates: {
    canonical: "https://quickstartgenai.com/",
  },
  openGraph: {
    type: "website",
    url: "https://quickstartgenai.com/",
    title: "Generative AI with Local LLM",
    description: "A practical path from understanding AI to building with it.",
    images: [
      {
        url: "/book-cover.webp",
        alt: "Generative AI with Local LLM book cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generative AI with Local LLM",
    description: "A practical book about local LLMs, RAG, and AI agents.",
    images: ["/book-cover.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <BookLanding />
    </>
  );
}
