import path from 'path';
import { defineConfig, loadEnv } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  process.env = loadEnv(mode, process.cwd());

  return {
    envDir: __dirname,
    envPrefix: 'CLIENT_APP_',
    root: path.resolve(__dirname, 'src'),
    plugins: [react()],
    build: {
      outDir: path.resolve(__dirname, 'build'),
      emptyOutDir: true,
    },
    server: {
      open: true,
      port: Number(process.env.VITE_PORT || 3000)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
