import { defineConfig } from 'vite'
// import React from "react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    port:5175
  }
})
