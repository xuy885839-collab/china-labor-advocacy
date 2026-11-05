/** @type {import('next').NextConfig} */
const LOCALES = ["zh", "en"];
const DEFAULT_LOCALE = "zh";

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const pages = [
      "about",
      "cases",
      "contact",
      "donate",
      "employee-satisfied",
      "join",
      "laws",
      "legal-aid",
      "media",
      "news",
      "sweatshop",
      "video",
    ];
    return [
      ...pages.map((page) => ({
        source: `/${page}`,
        destination: `/${DEFAULT_LOCALE}/${page}`,
        permanent: false,
      })),
      ...pages.map((page) => ({
        source: `/${page}/:path*`,
        destination: `/${DEFAULT_LOCALE}/${page}/:path*`,
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;
