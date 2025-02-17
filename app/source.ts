import { map } from '../.map';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { PageTree } from 'fumadocs-core/server';

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
    { type: 'page', name: 'Setup', url: '/docs' },
    { type: 'page', name: 'Changelog', url: '/docs/changelog' },

    { type: 'separator', name: ' 按钮' },
    { type: 'page', name: 'Button', url: '/docs/button' },

    { type: 'separator', name: '开关' },
    { type: 'page', name: 'Switch', url: '/docs/switch' }
  ],
};
