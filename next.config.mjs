// next.config.mjs
// @ts-check
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';  

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // デフォルトの画像最適化を無効化（静的エクスポート対応） :contentReference[oaicite:5]{index=5}
  },
  output: 'export',     // 静的エクスポートモードを有効化 :contentReference[oaicite:6]{index=6}
  assetPrefix: isProd 
    ? '/fitness-exe-landing_20250425/' 
    : '',               // 静的アセットのパス接頭辞を設定 :contentReference[oaicite:7]{index=7}
  basePath: isProd 
    ? '/fitness-exe-landing_20250425' 
    : '',               // ルーティングのベースパスを設定 :contentReference[oaicite:8]{index=8}
  trailingSlash: true,  // ページを /about/index.html の形式で出力 :contentReference[oaicite:9]{index=9}
};

export default nextConfig;
