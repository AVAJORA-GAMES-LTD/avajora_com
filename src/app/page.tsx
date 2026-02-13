import { Navbar } from "@/components/navbar";
import { FeaturesSection } from "@/components/features";
import { GridSection } from "@/components/grid-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        id="hero"
        className="flex min-h-screen flex-col items-center justify-center pt-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/destej60y/image/upload/v1770936759/background_3_wehyrv.png')"
        }}
      >
        <h1 className="text-black text-6xl md:text-7xl lg:text-8xl font-sans text-center px-4">
          Games, Just One More.
        </h1>

        <div className="absolute bottom-10 flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/destej60y/image/upload/v1770937287/scroll_apbrab.png"
            alt="Scroll down"
            width={136}
            height={136}
            className="object-contain drop-shadow-2xl"
            style={{ filter: "contrast(1.4) saturate(1.2) drop-shadow(0 8px 24px rgba(0,0,0,0.35))", opacity: 1 }}
          />
        </div>
      </main>

      <FeaturesSection />

      <GridSection />
    </>
  );
}
