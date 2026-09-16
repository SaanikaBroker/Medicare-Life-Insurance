import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'save-photo-middleware',
          configureServer(server) {
            server.middlewares.use('/api/save-photo', (req, res) => {
              if (req.method === 'POST') {
                const chunks: Buffer[] = [];
                req.on('data', (chunk: Buffer) => chunks.push(chunk));
                req.on('end', () => {
                  try {
                    const buffer = Buffer.concat(chunks);
                    const publicDir = path.resolve(__dirname, 'public');
                    if (!fs.existsSync(publicDir)) {
                      fs.mkdirSync(publicDir, { recursive: true });
                    }
                    fs.writeFileSync(path.join(publicDir, 'BM6A8382.jpeg'), buffer);
                    fs.writeFileSync(path.join(publicDir, 'BM6A8382.jpg'), buffer);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ success: true }));
                  } catch (err) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: String(err) }));
                  }
                });
              } else {
                res.statusCode = 405;
                res.end();
              }
            });
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
