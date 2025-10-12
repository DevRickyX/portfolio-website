import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { sendContactEmail } from './src/utils/email';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'email-api-dev-middleware',
        configureServer(server) {
          server.middlewares.use('/api/send-email', async (req, res, next) => {
            const origin = (req.headers as any)?.origin || '*';
            res.setHeader('Access-Control-Allow-Origin', origin);
            res.setHeader('Vary', 'Origin');
            res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

            if (req.method === 'OPTIONS') {
              res.statusCode = 204;
              res.end();
              return;
            }

            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            let bodyStr = '';
            req.on('data', (chunk: any) => {
              bodyStr += chunk;
            });
            req.on('end', async () => {
              let body: any = {};
              try {
                body = JSON.parse(bodyStr || '{}');
              } catch {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
                return;
              }

              const { name, email, projectType, requirements } = body || {};

              if (!name || !email || !projectType || !requirements) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Missing required fields' }));
                return;
              }

              const RESEND_API_KEY = env.RESEND_API_KEY || process.env.RESEND_API_KEY;

              if (!RESEND_API_KEY) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Missing RESEND_API_KEY server environment variable' }));
                return;
              }

              try {
                const { error } = await sendContactEmail(
                  { name, email, projectType, requirements },
                  RESEND_API_KEY
                );

                if (error) {
                  res.statusCode = 502;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error }));
                  return;
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
              } catch (err: any) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err?.message || 'Failed to send email' }));
              }
            });
          });
        },
      },
    ],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
