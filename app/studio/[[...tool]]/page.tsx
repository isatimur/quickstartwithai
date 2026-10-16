import type { Metadata } from "next";
import Studio from "./Studio";
export const metadata: Metadata = {
  title: "Sanity Studio",
  robots: { index: false, follow: false },
  alternates: { canonical: "/studio" },
};
export default function StudioPage() {
  return <Studio />;
}
