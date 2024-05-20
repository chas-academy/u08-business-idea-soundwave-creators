/// <reference types="vite/client" />
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome',
      '@fortawesome/free-solid-svg-icons': '@fortawesome/free-solid-svg-icons'
    }
  }
});
