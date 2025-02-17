import { configs } from '@/configs';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { LogoLink } from '@/components/logo';
import { Button } from '@/components/ui/button';

//======================================
export const Footer = () => {
  return (
    <footer className="h-16">
      <div className="gap-3 px-2 pt-4 mx-auto w-full border-t max-w-container flex-row-end">
        <LogoLink />
        <Button asChild variant="text" size="sm">
          <a
            href={configs.urls.newsletter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe
          </a>
        </Button>
        <div className="flex flex-row flex-1 gap-2 justify-end items-center md:gap-3">
          <a href={configs.urls.x} target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a
            href={configs.urls.discord}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>
          <a
            href={configs.urls.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};
