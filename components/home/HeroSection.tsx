import { SITE_CONFIG, SOCIAL_LINKS, ANIMATION } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-start py-12 px-4 sm:py-32 sm:px-16 sm:items-start">
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
                      className="animate-fade-in-left"
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
        <Accordion
          type="single"
          collapsible
          className="mt-8 sm:mt-16 w-full max-w-2xl animate-fade-in-left"
          style={{
            animationDelay: "300ms",
          }}
        >
          <AccordionItem value="about-me">
            <AccordionTrigger>About Me</AccordionTrigger>
            <AccordionContent>
              <p>
                I'm Liam Lehr, a passionate software engineer and character
                developer. I love creating innovative solutions and bringing
                characters to life through storytelling.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="my-skills">
            <AccordionTrigger>My Skills</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside">
                <li>JavaScript / TypeScript</li>
                <li>React / Next.js</li>
                <li>Node.js</li>
                <li>Character Development</li>
                <li>Storytelling</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
}
