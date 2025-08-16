// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin'; // استخدم import

const withNextIntl = createNextIntlPlugin(
  // المسار إلى ملف إعداد الطلب الخاص بك (src/i18n.js)
  // إذا كان في المسار الافتراضي، يمكنك ترك هذا فارغًا: createNextIntlPlugin()
  // './src/i18n.js'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true, // Or whatever other configs you have
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Or 'https' if your image source supports it
        hostname: 'megapowers.pythonanywhere.com',
        port: '', // Optional: specify if it's a non-standard port
        pathname: '/media/products/**', // Optional: be more specific if needed, e.g., '/Resourse/AllFiles/**'
      },
      // You can add more remote patterns here for other domains
    ],
  },
};

export default withNextIntl(nextConfig); // استخدم export default في ESM