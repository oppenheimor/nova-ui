'use client';

import { Button } from '../ui/button';
import { CgClose, CgMenu } from 'react-icons/cg';
import * as React from 'react';
import { cn } from '@/lib/utils';

export const MobileHeader = ({
  Logo,
  children,
}: {
  Logo: React.ReactNode;
  children: ({
    setIsOpen,
  }: {
    /**
     * Set the open state of the mobile header, use to close the header when a link is clicked
     */
    setIsOpen: (open: boolean) => void;
  }) => React.ReactNode | React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className={cn(
        'md:hidden px-4 pt-2',
        isOpen && 'min-h-screen z-40 dark:bg-zinc-950 bg-zinc-50 size-full',
      )}
    >
      <div className="pb-2 flex-row-between">
        {Logo}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl"
        >
          {isOpen ? <CgClose /> : <CgMenu />}
        </Button>
      </div>

      <dialog
        open={isOpen}
        className={
          isOpen
            ? 'flex flex-col gap-3 px-4 pt-4 w-full h-full animate-popover-in bg-inherit'
            : 'hidden'
        }
      >
        {typeof children === 'function' ? children({ setIsOpen }) : children}
      </dialog>
    </div>
  );
};
