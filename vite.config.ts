import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import { devApiPlugin } from "./vite-plugin-api";


export default defineConfig({
  plugins: [vike(), react(), devApiPlugin()]
});
