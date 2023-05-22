const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/vacancies',
        permanent: true,
      },
    ];
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};

module.exports = nextConfig;
