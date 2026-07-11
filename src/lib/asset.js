// Prefix a public-folder asset path with the app's base URL, so images resolve
// whether the site is served from "/" (local dev) or "/NDE-Experts/" (GitHub
// Pages project site). Usage: asset('/logos/pia.png').
export const asset = (p) => import.meta.env.BASE_URL + String(p).replace(/^\/+/, '');
