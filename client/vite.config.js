import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
// import react from '@vitejs/plugin-react-refresh';

dotenv.config({ path: '../.env' });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
