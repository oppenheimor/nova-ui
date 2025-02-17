import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { CodeSnippet } from './code-snippet';

const filePaths = {
  ExpandableCard: 'cards/expandable-card.tsx',
  Separator: 'separators/separator.tsx',
  input: 'inputs/input.tsx',

  button_variants: 'button/button-variants.tsx',
  button_sizes: 'button/button-sizes.tsx',
  button_disabled: 'button/button-disabled.tsx',
  button_loading: 'button/button-loading.tsx',

  switch_base: 'switch/switch-base.tsx',

  dialog_base: 'dialog/dialog-base.tsx',

  drawer_base: 'drawer/drawer-base.tsx',

  credenza_base: 'credenza/credenza-base.tsx',
  credenza_with_state: 'credenza/credenza-with-state.tsx',

  loader_text: 'loaders/text-loader.tsx',
};

type ComponentPreviewProps = {
  children: React.ReactNode;
  /**
   * The key of the file path to display in the code tab.
   */
  filePathsKey: keyof typeof filePaths;
  // contributorKey: string;
  className?: string;
};
//======================================
export function ComponentPreview({
  children,
  filePathsKey,
  className = '',
  // contributorKey = 'aliHussein',
}: ComponentPreviewProps) {
  // make sure the filePath is a valid key
  if (!filePaths[filePathsKey]) {
    throw new Error(`Invalid file path: ${filePathsKey}`);
  }
  return (
    <Tabs items={['Preview', 'Code']}>
      <Tab value="Preview">
        <div className={className}>{children}</div>
      </Tab>
      <Tab value="Code">
        <CodeSnippet filePath={`/src/components/${filePaths[filePathsKey]}`} />
      </Tab>
    </Tabs>
  );
}
