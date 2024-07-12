import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		{
			name: 'env-timestamp',
			config() {
				process.env.VITE_DATA_MODIFIED = new Date().toISOString();
			}
		}
	]
});
