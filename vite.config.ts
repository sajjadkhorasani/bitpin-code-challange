import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsConfigPath from 'vite-tsconfig-paths';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ['API_']);

  return {
    define: {
      'process.env': { ...env },
    },
    plugins: [
      react(),
      tsConfigPath(),
      TanStackRouterVite({
        routesDirectory: 'src/pages',
        generatedRouteTree: 'src/router.d.ts',
      }),
    ],
  };
});
