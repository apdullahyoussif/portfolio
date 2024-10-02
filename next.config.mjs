/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        forceSwcTransforms: true,
      },
      eslint: {

        ignoreDuringBuilds: true,
      },
      swcMinify: true,
};

export default nextConfig;
