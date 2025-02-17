// import { EyeCatchingButton_v3 } from '@/components/buttons/eye-catching-button-v3';

const SponsorCard = ({ children }: { children: React.ReactNode }) => (
  <div className="p-2 text-sm rounded-lg border border-dashed shadow-inner size-28 center border-zinc-300 dark:border-zinc-700 dark:text-zinc-500 text-zinc-600">
    {children}
  </div>
);
//======================================
export function Sponsor() {
  const borderClass = 'dark:border-zinc-800/80 border-dashed border-zinc-300';
  return (
    <div className="py-12">
      <div
        className={`pt-6 w-full bg-white rounded-sm border shadow flex-col-center md:pt-10 ${borderClass} dark:bg-black`}
      >
        <div className="pt-4 pb-4 space-y-3 md:pb-10 sm:pb-6">
          <h2 className="text-3xl font-bold text-green-500 dark:text-green-300">
            Sponsors
          </h2>
          <p className="max-w-xl text-center text-pretty dark:text-zinc-400">
            Sponsor Indie UI and showcase your brand to a community of active
            developers and solopreneurs.
          </p>
        </div>
        <div
          className={`flex-wrap gap-4 py-5 w-full flex-row-center md:py-7 ${borderClass} border-y`}
        >
          <SponsorCard>Your logo here</SponsorCard>
          <SponsorCard>Your logo here</SponsorCard>
          <SponsorCard>Your logo here</SponsorCard>
        </div>
        {/* <div className="py-6 w-full">
          <EyeCatchingButton_v3 asChild>
            <a
              href="https://github.com/sponsors/Ali-Hussein-dev"
              target="_blank"
              data-umami-event="sponsor-github"
            >
              Become a Sponsor
            </a>
          </EyeCatchingButton_v3>
        </div> */}
      </div>
    </div>
  );
}
