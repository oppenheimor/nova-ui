'use client';
import { Button } from '@/components/ui/button';
import { HeaderDemo } from '@/components/headers/header-demo';
import * as React from 'react';

//======================================
const HeaderDemoPage = () => {
  const [variant, setVariant] = React.useState<'default' | 'centered'>(
    'default',
  );
  const [isSticky, setIsSticky] = React.useState(false);
  return (
    <div className="relative">
      <HeaderDemo variant={variant} sticky={isSticky} />
      <section className="h-screen">
        <div className="gap-10 py-10 flex-row-center">
          <Button
            onClick={() => setVariant('default')}
            variant="default"
          >
            default
          </Button>
          <Button
            onClick={() => setVariant('centered')}
            variant="default"
          >
            centered
          </Button>
          <Button
            onClick={() => setIsSticky(!isSticky)}
            variant="default"
          >
            {isSticky ? 'unstick' : 'stick'}
          </Button>
        </div>
        <p className="pb-8 text-center">
          Resize the window to see the mobile version
        </p>
      </section>
      <section
        id="features"
        className="mx-auto h-screen border-t flex-row-center"
      >
        Features
      </section>
      <section
        id="pricing"
        className="mx-auto h-screen border-t flex-row-center"
      >
        pricing
      </section>
      <section id="faqs" className="mx-auto h-screen border-t flex-row-center">
        FAQs
      </section>
    </div>
  );
};
export default HeaderDemoPage;
