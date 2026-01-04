import { SITE_CONFIG, SOCIAL_LINKS, ANIMATION } from "@/lib/constants";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-16">
        <Image
          src="/liamylehr.png"
          alt="Liam Y Lehr"
          width={150}
          height={150}
          className="rounded-full animate-fade-in w-24 h-24 sm:w-[150px] sm:h-[150px]"
        />
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl animate-fade-in">
            {SITE_CONFIG.title}
          </h1>
          <p className="max-w-xl text-base sm:text-lg md:text-xl animate-fade-in mt-2">
            {SITE_CONFIG.subtitle}
          </p>
          <div className="mt-4 sm:mt-6 flex gap-4">
            {SOCIAL_LINKS.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-3xl hover:opacity-70 transition-opacity"
                  aria-label={link.ariaLabel}
                >
                  <Icon
                    className="animate-fade-in-left transition-all hover:scale-140"
                    style={{
                      animationDelay: `${index * ANIMATION.stagger.normal}ms`,
                    }}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
