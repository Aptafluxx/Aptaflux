/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      { source: "/work", destination: "/portfolio", permanent: true },
      { source: "/work/:slug", destination: "/portfolio/:slug", permanent: true },
    ];
  },
};

export default nextConfig;