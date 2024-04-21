import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import dynamic from "next/dynamic";
import AppSection from "@/components/AppSection";


const Premium = dynamic(() => import("@/components/Premium"));
const Extra = dynamic(() => import("@/components/Extra"));
const ButtonGradient = dynamic(() => import("@/assets/svg/ButtonGradient"));

export default function Home() {
  return (
    <main className="">
      <div className="pt-[4.75rem] lg:pt-[5.25rem] font-pop overflow-hidden bg-white">
        <Hero />
        <Benefits />
        <Premium />
        <AppSection/>
        <CTA />
        <Extra />
      </div>
      <ButtonGradient />
    </main>
  );
}
