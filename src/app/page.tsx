import { Navbar } from "@/components/navbar";
import { FeaturesSection } from "@/components/features";
import { PlayStoreSection } from "@/components/play-store-section";
import { GridSection } from "@/components/grid-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        id="hero"
        className="flex min-h-screen flex-col items-center justify-center pt-16 md:pt-20 px-4 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/destej60y/image/upload/v1770936759/background_3_wehyrv.png')"
        }}
      >
        <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-sans text-center max-w-5xl leading-tight">
          Games, Just One More.
        </h1>

        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/destej60y/image/upload/v1770937287/scroll_apbrab.png"
            alt="Scroll down"
            width={96}
            height={96}
            className="object-contain drop-shadow-2xl w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-34 lg:h-34"
            style={{ filter: "contrast(1.4) saturate(1.2) drop-shadow(0 8px 24px rgba(0,0,0,0.35))", opacity: 1 }}
          />
        </div>
      </main>

      <FeaturesSection />

      <PlayStoreSection />

      <GridSection />
    </>
  );
}
