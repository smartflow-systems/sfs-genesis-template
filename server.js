import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
    }
  }
}));

// CORS — same-origin by default
const allowedOrigin = process.env.CORS_ORIGIN || false;
app.use(cors({ origin: allowedOrigin, credentials: false }));

// Rate limiting
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, message: "Too many requests, please try again later." }
}));

app.use(express.json({ limit: "50kb" }));

// Serve built static files
app.use(express.static(join(__dirname, "dist")));

// Health check
app.get("/health", (_req, res) => res.json({ ok: true }));

// SPA fallback
app.get("*", (_req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

// Global error handler
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err.message);
  res.status(err.status || 500).json({ ok: false, message: "Internal server error" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`sfs-genesis-template serving on port ${port}`));
export default app;
