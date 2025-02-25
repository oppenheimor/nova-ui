import createMDX from 'fumadocs-mdx/config';
import { getEnvConfig } from './configs/env/index.mjs';

const envConfig = getEnvConfig();

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  basePath: envConfig.SERVER.BASE_PATH,
  async headers() {
    return [{
      source: '/:path*',
      headers: [{
        key: 'X-Forwarded-Prefix',
        value: '/nova-ui'
      }]
    }]
  },
  reactStrictMode: true,
  assetPrefix: envConfig.SERVER.BASE_ASSET_PREFIX
};

export default withMDX(config);
