/**
 * @format
 * @type {import('next').NextConfig}
 */
import CompressionPlugin from 'compression-webpack-plugin';

const nextConfig = {
	experimental: {
		forceSwcTransforms: true,
	},

	eslint: {
		ignoreDuringBuilds: true,
	},

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.clerk.com',
				port: '',
				pathname: '/**',
			},
		],
		deviceSizes: [640, 768, 1024, 1280, 1600],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},

	webpack: (config, { isServer }) => {
		if (process.env.NODE_ENV === 'production') {
			config.optimization.minimize = true;
			config.optimization.splitChunks = {
				chunks: 'all',
				maxSize: 200000,
				minSize: 30000,
				cacheGroups: {
					vendors: {
						test: /[\\/]node_modules[\\/]/,
						priority: -10,
					},
				},
			};

			config.plugins.push(
				new CompressionPlugin({
					algorithm: 'gzip',
					test: /\.(js|css|html|svg)$/,
					threshold: 8192,
					minRatio: 0.8,
				})
			);
		}

		if (!isServer) {
			config.resolve.fallback = {
				fs: false,
			};
		}

		return config;
	},

	swcMinify: true,
	siteUrl: 'https://abdullah-youssef.com',
	generateRobotsTxt: true,
};

export default nextConfig;
