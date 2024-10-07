/** @type {import('next').NextConfig} */
module.exports = {
    swcMinify: false,
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
            },
        ],
    },
};