'use client';

import dynamic from 'next/dynamic';
import TranslatedText from "@/components/translatedText/TranslatedText";

const Hero = dynamic(() => import("@/components/hero/Hero"), { ssr: false });
const PriceCalculator = dynamic(() => import("@/components/priceCalculator/PriceCalculator"), { ssr: false });

export default function Prices() {
  return (
    <>
      <Hero
        backgroundSrc="/assets/images/testimage.jpg"
        title="Priser"
        overlayOpacity={0.5}
        height="h-[40vh]"
      />
      <PriceCalculator />
    </>
  );
}