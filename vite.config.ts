// vite.config.js
import { defineConfig } from "vite";
import { codecovVitePlugin } from "@codecov/vite-plugin";
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [
    solid(),
    // Put the Codecov vite plugin after all other plugins
    codecovVitePlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: "BA-SETUP-DEMO",
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
});