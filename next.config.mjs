/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    // IMPORTANT for static export
    unoptimized: true,

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kc-images.kc-test-v1.workers.dev',
      },
      // (optional) αν κρατάς και r2.dev links κάπου
      {
        protocol: 'https',
        hostname: 'pub-81e8ad22dc1f4213a0c54798e94af7b1.r2.dev',
      },
    ],
  },
};

export default nextConfig;
