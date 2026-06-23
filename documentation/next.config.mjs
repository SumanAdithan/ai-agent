import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you decide NOT to use a custom root domain and host on the default github URL
  // (e.g. https://<username>.github.io/ai-agent), you MUST uncomment the line below:
  // basePath: '/ai-agent',
};

export default withMDX(config);
