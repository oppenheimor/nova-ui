import createMDX from 'fumadocs-mdx/config';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  basePath: '/nova-ui',
  reactStrictMode: true,
};

export default withMDX(config);
