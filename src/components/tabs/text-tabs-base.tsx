"use client"

import * as React from 'react';
import { TextTabs, TextTabsList, TextTabsTrigger, TextTabsContent, TextTabsSeparator } from '@/components/ui/text-tabs';

export function TextTabsBase() {
  return (
    <TextTabs defaultValue="1Y">
    <TextTabsList>
      <TextTabsTrigger value="1Y">1Y</TextTabsTrigger>
      <TextTabsSeparator />
      <TextTabsTrigger value="2Y">2Y</TextTabsTrigger>
      <TextTabsSeparator />
      <TextTabsTrigger value="5Y">5Y</TextTabsTrigger>
    </TextTabsList>
    <TextTabsContent value="1Y">1 Year Report Content</TextTabsContent>
    <TextTabsContent value="2Y">2 Year Report Content</TextTabsContent>
    <TextTabsContent value="5Y">5 Year Report Content</TextTabsContent>
  </TextTabs>
  )
}