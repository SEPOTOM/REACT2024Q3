/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: './dist',
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/search/1',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
