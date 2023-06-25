import path from 'path';
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  process.env = loadEnv(mode, process.cwd());

  return {
    envDir: __dirname,
    envPrefix: 'CLIENT_APP_',
    root: path.resolve(__dirname, 'src'),
    build: {
      outDir: path.resolve(__dirname, 'build'),
      emptyOutDir: true,
    },
    server: {
      open: true,
      port: Number(process.env.VITE_PORT)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
