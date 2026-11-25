// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://garahean.bacolod.fyi",
  // Build pages as about.html, menu.html etc. so the relative links keep working.
  build: { format: "file" },
  compressHTML: false,
});
