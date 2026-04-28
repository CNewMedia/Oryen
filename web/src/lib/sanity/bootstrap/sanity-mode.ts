export function isProductionNodeEnv(): boolean {
  return process.env.NODE_ENV === 'production';
}

/**
 * `next build` runs with NODE_ENV=production but often without CMS env in CI.
 * Treat the build phase as non-"live" so the app can compile; runtime still enforces rules.
 */
export function isLikelyNextBuildPhase(): boolean {
  return (
    process.env.npm_lifecycle_event === 'build' ||
    process.env.NEXT_PHASE === 'phase-production-build'
  );
}

/**
 * When true: no Sanity client → may use bootstrap copy (no network).
 * - Non-production
 * - next build (compile-time)
 * - ORYEN_ALLOW_OFFLINE_CMS=true (escape hatch for previews / local prod mode)
 */
export function allowBootstrapWithoutSanityClient(): boolean {
  if (process.env.ORYEN_ALLOW_OFFLINE_CMS === 'true') return true;
  if (!isProductionNodeEnv()) return true;
  if (isLikelyNextBuildPhase()) return true;
  return false;
}
