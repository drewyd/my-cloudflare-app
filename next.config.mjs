/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    SB_COMPANY_LOGIN: process.env.SB_COMPANY_LOGIN,
    SB_API_TOKEN: process.env.SB_API_TOKEN,
  },
};

export default nextConfig;
