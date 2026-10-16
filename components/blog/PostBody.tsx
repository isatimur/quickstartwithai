import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "@/sanity/env";

const builder = imageUrlBuilder({ projectId, dataset });
function safeHref(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  if (/^(https?:\/\/|mailto:|\/(?!\/)|#)/i.test(value)) return value;
}
function youtubeId(value: unknown): string | null {
  if (typeof value !== "string") return null;
  try {
    const url = new URL(value);
    if (!["https:", "http:"].includes(url.protocol)) return null;
    const host = url.hostname.replace(/^www\./, "");
    const id =
      host === "youtu.be"
        ? url.pathname.slice(1)
        : ["youtube.com", "m.youtube.com", "youtube-nocookie.com"].includes(
              host,
            )
          ? url.searchParams.get("v") ||
            url.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1]
          : null;
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}
const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h2>{children}</h2>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
  },
  marks: {
    link: ({ value, children }) => (
      <a href={safeHref(value?.href)} rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  types: {
    code: ({ value }) => (
      <figure className="blog-code">
        {value.filename && <figcaption>{value.filename}</figcaption>}
        <pre>
          <code
            className={`language-${String(value.language || "text").replace(/[^a-z0-9-]/gi, "")}`}
          >
            {value.code}
          </code>
        </pre>
      </figure>
    ),
    image: ({ value }) =>
      value.asset ? (
        <figure>
          <img
            src={builder
              .image(value)
              .width(1200)
              .fit("max")
              .auto("format")
              .url()}
            alt={value.alt || ""}
            loading="lazy"
          />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      ) : null,
    youTube: ({ value }) => {
      const id = youtubeId(value.url);
      return id ? (
        <iframe
          className="blog-video"
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title="YouTube video embedded in article"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <p>Video link unavailable.</p>
      );
    },
  },
};
export function PostBody({ body }: { body: PortableTextBlock[] }) {
  return (
    <div className="blog-prose">
      <PortableText value={body} components={components} />
    </div>
  );
}
