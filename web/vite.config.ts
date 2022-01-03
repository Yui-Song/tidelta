import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const projectRootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),        
    ],
    server: {
        host: "0.0.0.0",
        port: 8161,
        open: false,
        https: false,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
        extensions: ['.mjs', '.js', '.tsx', '.json', '.sass', '.scss', '.ts'],
    },
    publicDir: "public",
})
