/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  srcDir: "src", // 👈 This tells Next.js to look for app/ inside src/
};

export default nextConfig;
