/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'creacionkert.com',
            },
        ],
        formats: ['image/avif', 'image/webp'],
    },
    headers: async () => {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/coleccion/maletas/:slug((?!ref-).*)',
                destination: '/coleccion/maletas',
                permanent: true,
            },
            {
                source: '/coleccion/rinoneras/:slug((?!ref-).*)',
                destination: '/coleccion/rinoneras',
                permanent: true,
            },
            {
                source: '/coleccion/bolsos/:slug((?!ref-).*)',
                destination: '/coleccion/bolsos',
                permanent: true,
            },
            {
                source: '/coleccion/bolsas-cambrel/:slug((?!ref-).*)',
                destination: '/coleccion/bolsas-cambrel',
                permanent: true,
            },
            {
                source: '/coleccion/bolsas-tela/:slug((?!ref-).*)',
                destination: '/coleccion/bolsas-tela',
                permanent: true,
            },
            {
                source: '/coleccion/bolsos-multiuso/:slug((?!ref-).*)',
                destination: '/coleccion/bolsos-multiuso',
                permanent: true,
            },
            {
                source: '/coleccion/otros/:slug((?!ref-).*)',
                destination: '/coleccion/otros',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
