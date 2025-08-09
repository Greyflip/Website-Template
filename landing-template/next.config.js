/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  images: {
    domains: [],
  },
};

module.exports = nextConfig;