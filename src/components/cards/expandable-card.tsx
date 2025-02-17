'use client';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Button } from '@/components/ui/button';

export function ExpandableCard({
  /**
   * The height of the card when it is collapsed.
   */
  height = '8rem',
  /**
   * The class name to apply to the root container.
   */
  className = '',
  children,
  /**
   * Whether the button should be full width or not.
   */
  wide = false,
}: {
  height: string;
  wide?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [contentHeight, setContentHeight] = React.useState(0);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);
  return (
    <div
      className={cn(
        'px-4 pt-8 pb-3 w-full bg-white from-white rounded-lg border shadow dark:bg-zinc-950 dark:from-zinc-950',
        className,
      )}
    >
      <div className="overflow-hidden relative bg-inherit dark:bg-inherit">
        <div
          ref={contentRef}
          id="expandable-content"
          className="transition-all duration-300 ease-in-out"
          style={{ height: isExpanded ? `${contentHeight}px` : height }}
        >
          <>{children}</>
        </div>
        <div
          data-expanded={isExpanded}
          className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-inherit dark:from-inherit/50 to-transparent pointer-events-none data-[expanded=true]:opacity-0 transition-opacity duration-300 ease-in-out"
          aria-hidden={isExpanded ? 'true' : 'false'}
        />
        <div
          className={cn(
            'mx-auto bg-inherit dark:bg-inherit',
            wide ? 'w-full' : 'w-fit',
            isExpanded ? 'pt-2' : 'absolute inset-x-0 bottom-4',
          )}
        >
          <Button
            className="w-full rounded-lg bg-inherit dark:bg-inherit"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls="expandable-content"
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </Button>
        </div>
      </div>
    </div>
  );
}
