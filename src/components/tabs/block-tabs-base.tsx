'use client';

import * as React from 'react';
import {
  BlockTabs,
  BlockTabsList,
  BlockTabsTrigger,
  BlockTabsContent,
} from '@/components/ui/block-tabs';

export function BlockTabsBase() {
  return (
    <BlockTabs defaultValue="Indices">
      <BlockTabsList>
        <BlockTabsTrigger value="Indices">Indices</BlockTabsTrigger>
        <BlockTabsTrigger value="Stocks">Stocks</BlockTabsTrigger>
        <BlockTabsTrigger value="Crypto">Crypto</BlockTabsTrigger>
        <BlockTabsTrigger value="Futures">Futures</BlockTabsTrigger>
        <BlockTabsTrigger value="Forex">Forex</BlockTabsTrigger>
        <BlockTabsTrigger value="Bonds">Bonds</BlockTabsTrigger>
        <BlockTabsTrigger value="ETFs">ETFs</BlockTabsTrigger>
      </BlockTabsList>
      <BlockTabsContent value="Indices">Indices Content</BlockTabsContent>
      <BlockTabsContent value="Stocks">Stocks Content</BlockTabsContent>
      <BlockTabsContent value="Crypto">Crypto Content</BlockTabsContent>
      <BlockTabsContent value="Futures">Futures Content</BlockTabsContent>
      <BlockTabsContent value="Forex">Forex Content</BlockTabsContent>
      <BlockTabsContent value="Bonds">Bonds Content</BlockTabsContent>
      <BlockTabsContent value="ETFs">ETFs Content</BlockTabsContent>
    </BlockTabs>
  );
}
