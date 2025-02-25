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
    { type: 'page', name: 'Switch', url: '/docs/switch' },

    { type: 'separator', name: '弹出层' },
    { type: 'page', name: 'Dialog', url: '/docs/dialog' },
    { type: 'page', name: 'Drawer', url: '/docs/drawer' },
    { type: 'page', name: 'Credenza', url: '/docs/credenza' },
    { type: 'page', name: 'Tooltip', url: '/docs/tooltip' },

    { type: 'separator', name: '标签栏' },
    { type: 'page', name: 'BlockTabs', url: '/docs/block-tabs' },
    { type: 'page', name: 'TextTabs', url: '/docs/text-tabs' }
  ],
};
