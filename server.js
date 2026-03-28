/**
 * Optional Static Server with Health Check for sfs-genesis-template
 *
 * This simple server serves the built Vite app and provides a health endpoint.
 * Use this for production deployments on platforms like Replit, Railway, etc.
 *
 * Usage:
 *   npm run build
 *   node server.js
 */

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    ok: true,
    service: 'sfs-genesis-template',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Serve static files from dist directory (after build)
app.use(express.static(join(__dirname, 'dist')));

// SPA fallback - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ SFS Genesis Template Server running on port ${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
});
