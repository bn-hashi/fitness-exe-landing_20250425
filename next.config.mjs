/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
}

export default nextConfig

module.exports = {
  assetPrefix: isProd ? '/fitness-exe-landing_20250425/' : '',
  basePath: isProd ? '/fitness-exe-landing_20250425' : '',
  trailingSlash: true,
};