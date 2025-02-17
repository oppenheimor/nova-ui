'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { FaPlay } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export const AnimationContainer = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [key, setKey] = React.useState(0);
  const onClick = () => {
    setKey((prv) => prv + 1);
  };
  return (
    <div className={cn('pt-4 pb-12 border-b dark:border-zinc-900', className)}>
      <div className="mb-2 w-full flex-row-end">
        <Button
          onClick={onClick}
          className="rounded-lg size-9"
        >
          <FaPlay className="size-3" />
        </Button>
      </div>
      <div key={key}>{children}</div>
    </div>
  );
};
