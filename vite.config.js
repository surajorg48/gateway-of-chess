import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 3000,
    open: false,
    host: true,
  },
  plugins: [
    {
      name: 'clean-urls-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const rawPath = req.url.split('?')[0].replace(/\/$/, '');
          const routes = {
            '/platform': '/platform.html',
            '/for-academies': '/for-academies.html',
            '/for-coaches': '/for-coaches.html',
            '/events': '/events.html',
            '/academics': '/academics.html',
            '/pricing': '/pricing.html',
            '/about-us': '/about-us.html',
            '/login': '/login.html',
            '/book-demo': '/book-demo.html',
          };
          if (routes[rawPath]) {
            req.url = routes[rawPath] + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        platform: resolve(__dirname, 'platform.html'),
        academies: resolve(__dirname, 'for-academies.html'),
        coaches: resolve(__dirname, 'for-coaches.html'),
        events: resolve(__dirname, 'events.html'),
        academics: resolve(__dirname, 'academics.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        about: resolve(__dirname, 'about-us.html'),
        login: resolve(__dirname, 'login.html'),
        bookDemo: resolve(__dirname, 'book-demo.html'),
      }
    }
  }
});
