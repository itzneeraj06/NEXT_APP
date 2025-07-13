import { Form } from "@/components/Form";
import HeroSection from "@/components/HeroSection";
import { WavyBackground } from "@/components/ui/wavy-background";
import { WavyBackgroundDemo } from "@/components/WavyBackground";
import { WorldMapDemo } from "@/components/WorldMapDemo";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <WavyBackgroundDemo />
        <Form />
      </main>
    </>
  );
}
