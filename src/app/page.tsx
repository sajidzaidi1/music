import FeatureCourses from "@/components/FeatureCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import UpcommingWebnar from "@/components/UpcommingWebnar";
import CardHover from "@/components/ui/CardHover";
import { Spotlight } from "@/components/ui/Spotlight";
import SpotlightPreview from "@/components/ui/SpotlightPreview";
import { WavyBackground } from "@/components/ui/wavy-background";


import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white[0.02] text-white flex flex-col justify-center items-center">
          <HeroSection />
          <FeatureCourses />
          <UpcommingWebnar />
         <Spotlight />
         <WavyBackground />
         <Footer />
        
         
    </main>
  );
}
