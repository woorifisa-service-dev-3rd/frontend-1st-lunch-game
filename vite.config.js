import { defineConfig } from 'vite';

export default defineConfig({
    root: './public', // 'index.html' 파일의 위치가 루트가 아닌 경우 해당 경로로 변경
    build: {
        outDir: 'dist',
    },
});
