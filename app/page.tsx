// import { Button } from '@/components/ui/button';
// import { Button_v1 } from '@/components/buttons/button-v1';
// import { Button_v2 } from '@/components/buttons/button-v2';
// import { Button_v3 } from '@/components/buttons/button-v3';
// import { Button_v4 } from '@/components/buttons/button-v4';
// import { Button_v5 } from '@/components/buttons/button-v5';
// import { Button_v6 } from '@/components/buttons/button-v6';
// import { Button_v7 } from '@/components/buttons/button-v7';
// import { EyeCatchingButton_v1 } from '@/components/buttons/eye-catching-button-v1';
// import { EyeCatchingButton_v2 } from '@/components/buttons/eye-catching-button-v2';
// import { EyeCatchingButton_v3 } from '@/components/buttons/eye-catching-button-v3';
// import {
//   SimpleCard_V1,
//   SimpleCard_V2,
//   SimpleCard_V3,
//   SimpleCard_V4,
//   SimpleCard_V5,
//   SimpleCard_V6,
//   SimpleCard_V7,
// } from '@/components/cards/simple-cards';
// import {
//   MultilayerCardV_1,
//   MultilayerCardV_2,
//   MultilayerCardV_3,
//   MultilayerCardV_4,
// } from '@/components/cards/multi-layers';

// import {
//   Card_with_image_v1,
//   Card_with_image_v2,
//   Card_with_image_v3,
//   Card_with_image_v4,
//   Card_with_image_v5,
//   Card_with_image_v6,
// } from '@/components/cards/with-image-bg';
// import { Input, InputBlock } from '@/components/inputs/input';
// import { Footer } from '@/components/footer';
// import { Newsletter } from '@/components/newsletter';
// import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
// import { IoSend } from 'react-icons/io5';
import { Hero } from '@/components/homepage/hero';
// import components from '@/constants/components.json';
// import { VariantsCard } from '@/components/variants-card';
// import { TextAnimationVariants } from '@/components/text/text-animation-variants';
// import { Separator } from '@/components/separators/separator';
// import { FaPlus } from 'react-icons/fa6';
// import {
//   CardBody,
//   CardWithCircleEllipsis,
//   CardWithEllipsis,
//   CardWithGrid,
//   CardWithGridEllipsis,
//   CardWithLines,
//   CardWithNoise,
//   CardWithPlus,
//   CardWithSquareX,
// } from '@/components/cards/with-pattern';
// import { BentoVariants } from '@/components/layout/bento-variants';
// import { Dots_v1, Dots_v2, Dots_v3, Dots_v4 } from '@/components/loaders/dots';
import * as React from 'react';
// import { StatefulButton_1 } from '@/components/buttons/stateful/variant-1';
// import { StatefulButton_2 } from '@/components/buttons/stateful/variant-2';
// import { ExpandableCard } from '@/components/cards/expandable-card';
// import { TextLoader } from '@/components/loaders/text-loader';

// const CardsWithPattern = [
//   CardWithEllipsis,
//   CardWithGridEllipsis,
//   CardWithCircleEllipsis,
//   CardWithLines,
//   CardWithPlus,
//   CardWithSquareX,
//   CardWithGrid,
//   CardWithNoise,
// ];
export default function HomePage() {
  return (
    <main className="min-h-screen text-center">
      <Hero />
      {/* <div className="flex overflow-hidden flex-col justify-center">
        <div className="px-2 pb-10 mx-auto space-y-8 max-w-6xl">
          <VariantsCard
            id={components.button.id}
            title={components.button.title}
            docUrl={components.button.docUrl}
          >
            <div className="grid grid-cols-1 gap-y-3 max-w-2xl sm:grid-cols-2 md:grid-cols-3 sm:gap-3 md:gap-6">
              <Button_v1>Click me</Button_v1>
              <Button_v2>Hover me</Button_v2>
              <Button_v3>Hover me</Button_v3>
              <Button_v4>Hover me</Button_v4>
              <Button_v5 Icon={<IoSend />}>Hover me</Button_v5>
              <Button_v6>Hover me</Button_v6>
              <Button>
                <span>Hover me</span>
              </Button>
              <Button_v7 className="mx-auto w-fit">Hover me</Button_v7>
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.eyeCatchingButton.id}
            title={components.eyeCatchingButton.title}
            docUrl={components.eyeCatchingButton.docUrl}
          >
            <div className="grid grid-cols-2 gap-3 max-w-2xl md:grid-cols-3 sm:gap-6">
              <EyeCatchingButton_v1 className="w-full">
                Shimmer effect
              </EyeCatchingButton_v1>
              <EyeCatchingButton_v2>Shiny background</EyeCatchingButton_v2>
              <EyeCatchingButton_v3>Shiny text</EyeCatchingButton_v3>
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.statefulButton.id}
            title={components.statefulButton.title}
            docUrl={components.statefulButton.docUrl}
          >
            <div className="gap-3 mx-auto flex-row-center">
              <StatefulButton_1 />
              <StatefulButton_2 />
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.input.id}
            title={components.input.title}
            docUrl={components.input.docUrl}
          >
            <div className="space-y-6 max-w-2xl">
              <InputBlock>
                <Input placeholder="Input field (default)" />
              </InputBlock>
              <InputBlock variant="underlined">
                <Input placeholder="Input field (underlined)" />
              </InputBlock>
              <InputBlock variant="filled">
                <Input placeholder="Input field (filled)" />
              </InputBlock>
              <InputBlock variant="neubrutalism">
                <Input placeholder="Input field (neubrutalism)" />
              </InputBlock>
              <InputBlock variant="ghost">
                <Input placeholder="Input field (ghost)" />
              </InputBlock>
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.simpleCards.id}
            title={components.simpleCards.title}
            docUrl={components.simpleCards.docUrl}
          >
            <div className="pt-4 mx-auto space-y-10 max-w-2xl md:space-y-12">
              <SimpleCard_V1 />
              <SimpleCard_V2 />
              <SimpleCard_V3 />
              <SimpleCard_V4 />
              <SimpleCard_V5 />
              <SimpleCard_V6 />
              <SimpleCard_V7 />
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.cardsWithMultiLayers.id}
            title={components.cardsWithMultiLayers.title}
            docUrl={components.cardsWithMultiLayers.docUrl}
          >
            <div className="mx-auto space-y-4 max-w-xl">
              <MultilayerCardV_1 />
              <MultilayerCardV_2 />
              <MultilayerCardV_3 />
              <MultilayerCardV_4 />
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.cardsWithImageBg.id}
            title={components.cardsWithImageBg.title}
            docUrl={components.cardsWithImageBg.docUrl}
          >
            <div className="grid gap-4 gap-y-8 max-w-2xl md:grid-cols-2 md:gap-y-20">
              <Card_with_image_v1 />
              <Card_with_image_v2 />
              <Card_with_image_v3 />
              <Card_with_image_v4 />
              <Card_with_image_v5 />
              <Card_with_image_v6 />
            </div>
          </VariantsCard>
          <Newsletter />
          <VariantsCard
            id={components.cardsWithPattern.id}
            title={components.cardsWithPattern.title}
            docUrl={components.cardsWithPattern.docUrl}
          >
            <div className="grid gap-4 gap-y-8 mx-auto max-w-2xl md:grid-cols-2">
              {CardsWithPattern.map((Card, i) => (
                <Card key={i}>
                  <CardBody />
                </Card>
              ))}
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.cardsInteractive.id}
            title={components.cardsInteractive.title}
            docUrl={components.cardsInteractive.docUrl}
          >
            <div className="mx-auto max-w-2xl">
              <ExpandableCard height="6rem">
                <p className="text-sm/relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                  amet hendrerit risus, sed porttitor quam. Magna exercitation
                  reprehenderit magna cillum tempor amet aliquip ullamco.
                  Occaecat adipisicing ea elit labore incididunt consectetur
                  dolore sint ipsum nulla ullamco magna aliqua culpa dolore
                  cillum esse veniam.
                </p>
              </ExpandableCard>
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.loadersDots.id}
            title={components.loadersDots.title}
            docUrl={components.loadersDots.docUrl}
          >
            <div className="grid grid-cols-2 gap-4 gap-y-8 pl-8 mx-auto mb-8 max-w-2xl md:grid-cols-4 md:gap-y-4">
              <div className="mx-auto -translate-x-9 md:translate-x-0 md:mx-0">
                <Dots_v1 />
              </div>
              <Dots_v2 />
              <Dots_v3 />
              <Dots_v4 />
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.loadersText.id}
            title={components.loadersText.title}
            docUrl={components.loadersText.docUrl}
          >
            <div className="py-1 w-full flex-row-center">
              <TextLoader
                messages={[
                  'Preparing your experience',
                  'Loading awesome content',
                  'Almost there',
                  'Just a moment',
                  'Getting things ready',
                ]}
              />
            </div>
          </VariantsCard>
          <VariantsCard
            id={components.separator.id}
            title={components.separator.title}
            docUrl={components.separator.docUrl}
          >
            <div className="gap-12 pt-4 flex-col-center">
              <Separator gradient />
              <Separator />
              <Separator
                label={<span className="px-2">Section</span>}
                gradient
              />
              <Separator label={<span className="px-2">Section</span>} />
              <Separator
                label={
                  <div className="px-4 py-1 rounded-full border border-dashed">
                    Section
                  </div>
                }
                gradient
              />
              <Separator
                label={
                  <div className="px-4 py-1 rounded-full border">Section</div>
                }
              />
              <Separator
                label={
                  <div className="px-12 py-2 rounded-full border">
                    <FaPlus />
                  </div>
                }
                gradient
              />
            </div>
          </VariantsCard>
          <TextAnimationVariants />
          <BentoVariants />
        </div>
      </div> */}
      {/* <Footer /> */}
    </main>
  );
}
