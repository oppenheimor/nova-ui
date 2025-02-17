import Link from 'next/link';
import { Button } from './ui/button';
import { FaChevronRight } from 'react-icons/fa';

export const VariantsCard = ({
  id,
  title,
  docUrl,
  children,
}: {
  id: string;
  title: string;
  docUrl: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="px-2 pt-3 pb-6 bg-white rounded-lg border border-dashed shadow sm:px-4 md:px-8 dark:bg-black"
  >
    <div className="gap-1 py-1 mb-4 border-b border-dashed flex-row-between">
      <h3 className="text-xl font-bold text-start">{title}</h3>
      <Button asChild size="sm">
        <Link href={docUrl} prefetch={false}>
          Get code
        </Link>
      </Button>
    </div>
    <div className="pt-4 w-full">{children}</div>
  </section>
);
