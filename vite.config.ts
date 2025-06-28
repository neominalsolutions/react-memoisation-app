import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig(({ mode }) => {
	// .env.staging dosyasını da okuyabilmek için
	const env = loadEnv(mode, process.cwd());

	return {
		define: {
			__APP_ENV__: JSON.stringify(env.VITE_APP_ENV),
		},
		base: mode === 'staging' ? '/staging/' : '/',
		build: {
			outDir: mode === 'staging' ? 'dist-staging' : 'dist',
		},
		plugins: [react()], // Burada react pluginini ekleyebilirsiniz
		// Diğer config ayarları
	};
});
