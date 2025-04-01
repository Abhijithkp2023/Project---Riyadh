import i18nConfig from './next-i18next.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: i18nConfig.i18n,
  reactStrictMode: true,
};

export default nextConfig;    