import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  if(!process.env.VITE_PORT) {
    throw new Error('Port not found on env!');
  }

  if(!process.env.VITE_APP_API_URL) {
    throw new Error('Api url not found on env!');
  }

  
  return defineConfig({
    define: {
      'process.env': process.env
    },
    envDir: './',
    server: {
      port: Number(process.env.VITE_PORT)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
    base: './'
  })
}
