import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config() // load env vars from .env

export default defineConfig({
  plugins: [react()],
  define: {
    __APP_NAME__: `"${process.env.APP_NAME}"` // wrapping in "" since it's a string
  },
  //....
});
