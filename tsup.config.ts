import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/**/*.stories.*",
    "!src/**/*.test.*",
  ],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  splitting: true,
  treeshake: true,
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
  external: ["react", "react-dom"],
});
