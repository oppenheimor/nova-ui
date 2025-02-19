'use client';

import * as React from 'react';
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from '@/components/ui/credenza';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

export function CredenzaBase() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [isOpen, setIsOpen] = React.useState(false);

  const openCredenza = () => setIsOpen(true);

  const closeCredenza = () => setIsOpen(false);

  const confirm = () => {
    alert('You clicked confirm!');
    closeCredenza();
  };

  return (
    <Credenza open={isOpen} onOpenChange={setIsOpen}>
      <CredenzaTrigger asChild>
        <Button onClick={openCredenza}>Open Credenza</Button>
      </CredenzaTrigger>
      {/* Credenza 主体 */}
      <CredenzaContent>
        {/* Credenza 头部 */}
        <CredenzaHeader onCloseIconClick={closeCredenza}>
          {/* Credenza 标题 */}
          <CredenzaTitle>Credenza Title</CredenzaTitle>
        </CredenzaHeader>
        {/* Credenza 内容 */}
        <CredenzaBody>
          <p className={cn(isDesktop ? 'p-0' : 'px-4')}>
            This modal got triggered using state
          </p>
        </CredenzaBody>
        {/* Credenza 底部 */}
        <CredenzaFooter>
          <Button onClick={confirm}>Confirm</Button>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
}
