/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/homepage/header';
import { configs } from '@/configs';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
// import components from '@/constants/components.json';
// import { cn } from '@/lib/utils';

const ProductHunt = () => (
  <a href="https://www.producthunt.com/posts/indie-ui" target="_blank">
    <img
      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=477059&theme=dark"
      alt="Indie UI - Rich Styled UI | Product Hunt"
      className="w-[250px] h-[54px] mx-auto"
      width="250"
      height="54"
    />
  </a>
);

//======================================
export const Hero = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-4xl h-[85vh] lg:h-[90vh] center px-2">
        <div className="mt-10 animate-in sm:mt-16">
          <h1 className="mb-4 text-4xl font-black text-center md:text-5xl text-balance lg:text-6xl h1">
            Rich Styled UI Components
          </h1>
          <p className="mx-auto mb-4 text-lg text-center text-pretty dark:text-zinc-400">
            Make your website stand out with minimal effort.
            <span className="block">
              Built with{' '}
              <span className="font-semibold text-green-700 dark:text-green-300">
                Reactjs
              </span>
              ,{' '}
              <span className="font-semibold text-green-700 dark:text-green-300">
                shadcn
              </span>{' '}
              and{' '}
              <span className="font-semibold text-green-700 dark:text-green-300">
                Framer Motion
              </span>{' '}
              for animation.
            </span>
          </p>
          <div className="gap-4 py-4 mx-auto flex-row-center max-w-fit">
            <Button asChild rightIcon={<FaArrowRight />}>
              <Link
                href="/docs/changelog"
                className="mx-auto font-semibold w-fit"
                prefetch={false}
              >
                What{"'"}s new
              </Link>
            </Button>
            {/* <Button asChild variant={'outline'} leftIcon={<FaGithub />}>
              <a href={configs.urls.github} target="_blank">
                GitHub
              </a>
            </Button> */}
          </div>
          {/* <div className="pt-10 mx-auto">
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:gap-3">
              {Object.values(components).map((o, i) => (
                <Button
                  key={o.id}
                  size="sm"
                  variant={'outline'}
                  asChild
                  className={cn('text-xs sm:justify-start')}
                >
                  <a href={`#${o.id}`}>{o.title}</a>
                </Button>
              ))}
            </div>
          </div> */}
          {/* <div className="pt-8 pb-8">
            <ProductHunt />
          </div> */}
        </div>
      </div>
    </div>
  );
};
