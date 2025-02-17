'use client';

import { useFormBuilder } from '@/form-builder/hooks/use-form-builder';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FormElementSelector } from '@/form-builder/components/form-elements-selector';
import { FormEdit } from '@/form-builder/components/form-edit';
import { FormPreview } from '@/form-builder/components/form-preview';
import {
  JsonViewer,
  GeneratedFormCodeViewer,
} from '@/form-builder/components/code-viewer';
import * as React from 'react';
import { CommandProvider } from '@/form-builder/hooks/use-command-ctx';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';
import { ExternalLink } from 'lucide-react';
import { VscBug } from 'react-icons/vsc';
import { FaRegLightbulb } from 'react-icons/fa6';

const tabsList = [
  {
    name: 'Edit',
  },
  {
    name: 'Code',
  },
  {
    name: 'JSON',
  },
  {
    name: 'Submission',
  },
];

//======================================
export function FormBuilderMain() {
  const { submittedData, resetForm, form } = useFormBuilder();
  const formElements = useFormBuilderStore((s) => s.formElements);
  const isMS = useFormBuilderStore((s) => s.isMS);
  const setIsMS = useFormBuilderStore((s) => s.setIsMS);
  return (
    <>
      <div className="grid gap-3 py-6 pt-10 w-full md:grid-cols-12 lg:gap-5">
        <CommandProvider>
          <FormElementSelector />
        </CommandProvider>
        <div className="px-4 w-full min-w-full sm:px-0 md:col-span-6 grow">
          <Tabs defaultValue={tabsList[0].name} className="">
            <TabsList className="w-full">
              {tabsList.map((tab) => (
                <TabsTrigger key={tab.name} value={tab.name} className="w-full">
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={tabsList[0].name} tabIndex={-1}>
              <div className="pb-4 flex-row-between">
                <Button
                  size="sm"
                  className="rounded-lg"
                  onClick={() => setIsMS(!isMS)}
                >
                  {isMS ? 'Single-step' : 'Multi-step'} Form
                </Button>
                {formElements.length > 1 && (
                  <Button
                    size="sm"
                    onClick={resetForm}
                    className="rounded-lg"
                  >
                    Reset
                  </Button>
                )}
              </div>
              <FormEdit />
            </TabsContent>
            <TabsContent value={tabsList[1].name} tabIndex={-1}>
              <GeneratedFormCodeViewer />
            </TabsContent>
            <TabsContent value={tabsList[2].name} tabIndex={-1}>
              <JsonViewer json={formElements} isMS={isMS} />
            </TabsContent>
            <TabsContent value={tabsList[3].name} tabIndex={-1}>
              <JsonViewer json={submittedData} isMS={isMS} />
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-full md:col-span-4">
          <FormPreview form={form} />
        </div>
      </div>
      <div className="flex-wrap gap-4 px-2 py-6 mx-auto border-t border-dashed flex-row-center max-w-container">
        <Button>
          <a
            href={'https://github.com/Ali-Hussein-dev/indie-ui/discussions'}
            className="gap-2 flex-row-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request Feature <FaRegLightbulb />
          </a>
        </Button>
        <Button>
          <a
            href={'https://github.com/Ali-Hussein-dev/indie-ui/issues/new'}
            className="gap-2 flex-row-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Report bug <VscBug />
          </a>
        </Button>
        <Button>
          <a
            href={'https://github.com/Ali-Hussein-dev/indie-ui/discussions/54'}
            className="gap-2 flex-row-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Examples <ExternalLink className="size-4" />
          </a>
        </Button>
      </div>
    </>
  );
}
