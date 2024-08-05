/** @type {import('next').NextConfig} */
const nextConfig = {
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
