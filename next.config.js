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
};

module.exports = nextConfig;
