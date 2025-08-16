// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'megapowers.pythonanywhere.com',
        port: '',
        // هذا هو التعديل. يسمح الآن بأي مسار على هذا النطاق
        pathname: '/**',
      },
      // يمكنك إضافة نطاقات أخرى هنا إذا احتجت
    ],
  },
};

export default withNextIntl(nextConfig);