import { Header } from '@/components/homepage/header';
import { Footer } from '@/components/footer';
import { generateSEOTags } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa6';
import { configs } from '@/configs';

const title = 'Shadcn Form Builder';
const description =
  'Build forms in minutes not hours for free using shadcn, tailwindcss, React, Zod, and React Hook Form';

export const metadata = generateSEOTags({
  title,
  description,
  openGraph: {
    description,
    title,
    url: `${configs.site}/form-builder`,
    type: 'website',
    images: [
      {
        url: '/formfast/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FormFast Builder',
      },
    ],
  },
  twitter: {
    site: `${configs.site}/form-builder`,
    title,
    description,
    images: [
      {
        url: '/formfast/twitter-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FormFast Builder',
      },
    ],
  },
});
//======================================
export default function FormBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex-col-center">
      <Header />
      <div className="container px-2 pt-10 pb-3 w-full h-full grow">
        <div className="grid mx-auto mb-5 border border-dashed md:grid-cols-8">
          <div className="md:col-span-1" />
          <div className="px-3 py-5 w-full border-dashed md:col-span-6 md:border-x grow sm:py-6 md:py-8 md:px-6">
            <h1 className="mb-2 text-2xl font-bold text-center md:text-3xl text-pretty">
              Build Forms In{' '}
              <span className="line-through decoration-red-600">Hours</span>{' '}
              Minutes{' '}
            </h1>
            <p className="text-center text-muted-foreground text-pretty">
              Build as many forms as you want for free using
            </p>
            <div className="flex-wrap gap-3 pt-2 flex-row-center text-muted-foreground">
              <span>React</span>
              <span>Tailwindcss</span>
              <span>Shadcn</span>
              <span>Zod</span>
              <span>React Hook Form</span>
            </div>
            <div className="pt-4 mx-auto w-fit">
              <Button asChild variant={'default'}>
                <a
                  href={configs.urls.github}
                  className="block px-5 mx-auto rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Star on Github
                  <FaGithub className="inline-block ml-2" />
                </a>
              </Button>
            </div>
          </div>
          <div className="md:col-span-1" />
        </div>
        {children}
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
