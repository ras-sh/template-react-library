import { defineConfig } from "tsdown";

export default defineConfig({
  entry: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/**/*.stories.*",
    "!src/**/*.test.*",
  ],
  external: ["react", "react-dom"],
});
