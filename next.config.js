/** @type {import('next').NextConfig} */
module.exports = {
    swcMinify: false,
    reactStrictMode: true,
    compress: true,
    poweredByHeader: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
            },
        ],
    },
    transpilePackages: ['three'],
};