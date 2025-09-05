// Global CDN configuration
export const CDN_BASE_URL = "https://turnkeyfiles.equitybuilders.co";

// Helper function to get CDN asset URL
export const getCDNAssetUrl = (path: string) => {
  return `${CDN_BASE_URL}${path.startsWith('/') ? path : '/' + path}`;
};