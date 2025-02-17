'use client';
import * as React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
//======================================
export const Banner = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is more than 25px
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={
        isVisible
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
    >
      <div className="fixed top-0 right-0 left-0 z-30">
        <div className="flex-row-center w-full gap-x-6 dark:bg-zinc-800/40 backdrop-blur-lg px-6 py-2.5 sm:px-3.5 bg-zinc-50/40">
          <div className="flex gap-4 justify-center items-center text-lg font-semibold tracking-wide leading-6 text-green-600 dark:text-green-300">
            <span>Check Pro Templates</span>
            <Button asChild variant="default" size="sm" className="rounded-xl">
              <div className="gap-2 flex-row-start">
                <a
                  href={'https://indie-starter.dev/templates'}
                  className="inline-block"
                >
                  <FaArrowRight />
                </a>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
