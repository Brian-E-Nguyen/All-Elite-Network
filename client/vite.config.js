import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
// import react from '@vitejs/plugin-react-refresh';
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '../.env.production.local' });
} else {
  dotenv.config({ path: '../.env.development.local' });
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
