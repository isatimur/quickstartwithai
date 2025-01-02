/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev, isServer }) => {
        // Split chunks more aggressively
        if (!dev && !isServer) {
            config.optimization.splitChunks = {
                chunks: 'all',
                minSize: 20000,
                maxSize: 244000,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            const packageName = module.context.match(
                                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                            )[1];
                            return `vendor.${packageName.replace('@', '')}`;
                        },
                        priority: 20,
                    },
                    common: {
                        minChunks: 2,
                        priority: 10,
                        reuseExistingChunk: true,
                    },
                },
            };
        }
        return config;
    },
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
    transpilePackages: ['three'],
}

export default nextConfig;
