const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'radyalabsappstorage.blob.core.windows.net',
        port: '',
        pathname: '*/**',
      },
    ],
  },
  headers: () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cross-Origin-Opener-Policy',
          value: 'same-origin-allow-popups',
        },
      ],
    },
  ],
};

module.exports = nextConfig;
