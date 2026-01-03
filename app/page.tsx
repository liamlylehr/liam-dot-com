import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center font-sans">
        <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-start py-12 px-4 sm:py-32 sm:px-16 sm:items-start">
          <HeroSection />
          <AboutPreview />
        </main>
      </div>
    </>
  );
}
