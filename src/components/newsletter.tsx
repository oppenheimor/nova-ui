import Link from 'next/link';
import { configs } from '@/configs';
// import { Button_v6 } from '@/components/buttons/button-v6';
import { MultilayerCardV_2 } from './cards/multi-layers';

//======================================
export const Newsletter = () => {
  return (
    <div className="py-8 mx-auto">
      <MultilayerCardV_2>
        <div>
          <p className="mb-5 text-lg font-bold tracking-tight text-center text-pretty dark:text-zinc-200 md:text-xl lg:text-2xl">
            Get notified about new components & updates
          </p>
          {/* <div className="mx-auto w-fit">
            <Button_v6>
              <Link href={configs.urls.newsletter}>Subscribe</Link>
            </Button_v6>{' '}
          </div> */}
        </div>
      </MultilayerCardV_2>
    </div>
  );
};
