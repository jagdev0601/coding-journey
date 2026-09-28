import type { NextConfig } from 'next'

/* Static export for GMX Hosting (no Node.js there). For a subfolder deploy,
   run `npm run build:sub` and change the folder name in package.json. */
const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
}
export default nextConfig
