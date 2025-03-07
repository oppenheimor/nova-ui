'use client';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function TooltipBase() {
  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>Add to library</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
