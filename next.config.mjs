/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'pub-81e8ad22dc1f4213a0c54798e94af7b1.r2.dev' },
      { protocol: 'https', hostname: 'kc-images.kc-test-v1.workers.dev' }
    ]
  }
};

export default nextConfig;
