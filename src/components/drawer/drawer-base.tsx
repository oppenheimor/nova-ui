'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

export function DrawerBase() {
  const [isOpen, setIsOpen] = React.useState(false);

  const openDrawer = () => setIsOpen(true);

  const closeDrawer = () => setIsOpen(false);

  const confirm = () => {
    alert('You clicked confirm!');
    closeDrawer();
  };

  const cancel = () => {
    alert('You clicked cancel!');
    closeDrawer();
  };

  return (
    <Drawer open={isOpen}>
      {/* Drawer 触发器 */}
      <DrawerTrigger asChild>
        <Button onClick={openDrawer}>Open Drawer</Button>
      </DrawerTrigger>
      {/* Drawer 主体 */}
      <DrawerContent>
        {/* Drawer 头部 */}
        <DrawerHeader onCloseIconClick={closeDrawer}>
          {/* Drawer 标题 */}
          <DrawerTitle>Drawer Title</DrawerTitle>
        </DrawerHeader>
        <p className="p-4">This is Drawer Content.</p>
        {/* Drawer 底部 */}
        <DrawerFooter>
          <Button onClick={confirm}>Confirm</Button>
          <Button variant="secondary" onClick={cancel}>
            Cancel
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
