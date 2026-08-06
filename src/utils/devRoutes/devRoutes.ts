/**
 * The `/dev/*` pages expose raw order data — customer email, shipping address, the full order JSON
 * and download links to the print assets. They shipped in the production build reachable by anyone
 * who guessed the URL, so they are now opt-in: set DEV_ROUTES_ENABLED=true on staging only.
 *
 * Server-side only: the flag is deliberately not `NEXT_PUBLIC_*`, so it is never inlined into the
 * client bundle.
 */
const areDevRoutesEnabled = (): boolean => process.env.DEV_ROUTES_ENABLED?.trim() === 'true';

export { areDevRoutesEnabled };
