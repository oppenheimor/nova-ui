'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function DialogBase() {
  const [isOpen, setIsOpen] = React.useState(false);

  const openDialog = () => setIsOpen(true);

  const closeDialog = () => setIsOpen(false);

  const confirm = () => {
    alert('You clicked confirm!');
    closeDialog();
  };

  const cancel = () => {
    alert('You clicked cancel!');
    closeDialog();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Dialog 触发器 */}
      <DialogTrigger asChild>
        <Button onClick={openDialog}>Open Dialog</Button>
      </DialogTrigger>
      {/* Dialog 主体 */}
      <DialogContent className="sm:max-w-[425px]">
        {/* Dialog 头部 */}
        <DialogHeader onCloseIconClick={closeDialog}>
          {/* Dialog 标题 */}
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
        <p>This is dialog content.</p>
        {/* Dialog 底部 */}
        <DialogFooter>
          <Button variant="secondary" onClick={cancel}>
            Cancel
          </Button>
          <Button onClick={confirm}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
