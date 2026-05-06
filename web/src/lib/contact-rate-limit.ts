/** In-memory rate limit (best-effort on multi-instance Serverless; consider Redis/KV if abused). */
const buckets = new Map<string, number[]>();

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

export function contactFormRateLimitOk(ip: string): boolean {
  const now = Date.now();
  const prev = buckets.get(ip) ?? [];
  const recent = prev.filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return false;
  recent.push(now);
  buckets.set(ip, recent);
  return true;
}

export function clientIpFromRequest(req: Request): string {
  const xf = req.headers.get('x-forwarded-for');
  if (xf) return xf.split(',')[0]?.trim() || 'unknown';
  const real = req.headers.get('x-real-ip');
  if (real) return real.trim();
  return 'unknown';
}
