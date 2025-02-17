import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { LogoLink } from '@/components/logo';
import { Header } from './header';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ThemeToggle } from '../toggle-theme';

const headerLinks = [
  { name: 'Features', href: '/header-demo/#features' },
  { name: 'Pricing', href: '/header-demo/#pricing' },
  { name: 'FAQs', href: '/header-demo/#faqs' },
];
const icons = [
  {
    name: 'Twitter',
    icon: <FaXTwitter size="14" />,
    href: 'https://x.com',
  },
  {
    name: 'GitHub',
    icon: <FaGithub size="14" />,
    href: 'https://github.com',
  },
];
const HeaderLink = (props: { href: string; name: string }) => {
  return <Link href={props.href}>{props.name}</Link>;
};
export const HeaderDemo = ({
  variant = 'default',
  sticky,
}: {
  variant: 'default' | 'centered';
  sticky: boolean;
}) => (
  <Header
    Logo={<LogoLink />}
    variant={variant}
    sticky={sticky}
    desktopItems={
      <>
        {headerLinks.map((link, i) => (
          <HeaderLink key={i} href={link.href} name={link.name} />
        ))}
        <ThemeToggle />
      </>
    }
    mobileItems={({ setIsOpen }) => (
      <>
        {headerLinks.map((link) => (
          <Button
            key={link.href}
            asChild
            className="justify-center w-full rounded-xl"
            size="lg"
            onClick={() => setIsOpen(false)}
          >
            <Link href={link.href}>{link.name}</Link>
          </Button>
        ))}
        <div className="gap-3 pt-4 w-full border-t border-dashed flex-row-end">
          {icons && (
            <div className="gap-2 flex-row-center grow">
              {icons.map((icon) => (
                <Button
                  key={icon.name}
                  className="rounded-full"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={icon.href}>{icon.icon}</Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </>
    )}
  />
);
