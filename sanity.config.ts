"use client";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { projectId, dataset } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "quickstart-genai",
  title: "Quickstart GenAI — Blog",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
