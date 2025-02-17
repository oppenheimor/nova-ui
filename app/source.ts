import { map } from '../.map';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { PageTree } from 'fumadocs-core/server';
import { getEnvConfig } from './../configs/env/index.mjs';

const envConfig = getEnvConfig();

export const {
  getPage,
  getPages,
  pageTree: originalTree,
} = loader({
  baseUrl: '/docs',
  rootDir: 'docs',
  source: createMDXSource(map),
});

export const pageTree: PageTree.Root = {
  name: 'Nova UI',
  children: [
    { type: 'separator', name: 'Getting Started' },
    { type: 'page', name: 'Setup', url: `${envConfig.SERVER.BASE_PATH}/docs` },
    { type: 'page', name: 'Changelog', url: `${envConfig.SERVER.BASE_PATH}/docs/changelog` },

    { type: 'separator', name: ' 按钮' },
    { type: 'page', name: 'Button', url: `${envConfig.SERVER.BASE_PATH}/docs/button` },

    { type: 'separator', name: '开关' },
    { type: 'page', name: 'Switch', url: `${envConfig.SERVER.BASE_PATH}/docs/switch` },

    { type: 'separator', name: '弹出层' },
    { type: 'page', name: 'Dialog', url: `${envConfig.SERVER.BASE_PATH}/docs/dialog` },
    { type: 'page', name: 'Drawer', url: `${envConfig.SERVER.BASE_PATH}/docs/drawer` },
    { type: 'page', name: 'Credenza', url: `${envConfig.SERVER.BASE_PATH}/docs/credenza` },
  ],
};
