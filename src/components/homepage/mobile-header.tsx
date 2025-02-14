'use client';

import { Button } from '../ui/button';
import { IconsList, LinksList } from './header';
import { CgClose, CgMenu } from 'react-icons/cg';
import * as React from 'react';
import { cn } from '@/lib/utils';

export const MobileHeader = ({
  links,
  // icons,
  Logo,
}: {
  links: LinksList;
  // icons?: IconsList;
  Logo: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className={cn(
        'md:hidden px-4 pt-2 border-b',
        isOpen && 'min-h-screen z-40 dark:bg-zinc-950 bg-white fixed size-full',
      )}
    >
      <div className="pb-2 flex-row-between">
        {Logo}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="rounded-xl"
          variant={'outline'}
        >
          {isOpen ? <CgClose /> : <CgMenu />}
        </Button>
      </div>
      <dialog
        open={isOpen}
        className={
          isOpen
            ? 'flex flex-col gap-4 px-4 pt-5 mb-5 bg-white backdrop-blur animate-popover-in size-full dark:bg-zinc-950/10'
            : ''
        }
      >
        {links.map((link) => (
          <Button
            key={link.href}
            asChild
            variant={'outline'}
            className="justify-start w-full rounded-xl"
            size="lg"
          >
            <a href={link.href}>{link.label}</a>
          </Button>
        ))}

        {/* <div className="gap-3 pt-4 w-full border-t border-dashed flex-row-end">
          {icons && (
            <div className="gap-5 flex-row-center grow">
              {icons.map((icon) => (
                <Button
                  key={icon.name}
                  size="icon"
                  className="rounded-full"
                  variant={'outline'}
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <a href={icon.href}>{icon.icon}</a>
                </Button>
              ))}
            </div>
          )}
        </div> */}
      </dialog>
    </div>
  );
};
