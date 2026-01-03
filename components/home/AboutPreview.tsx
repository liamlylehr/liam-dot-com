import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AboutPreview() {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="mt-8 sm:mt-16 w-full max-w-2xl"
      >
        <AccordionItem
          value="about-me"
          className="animate-fade-in-left"
          style={{
            animationDelay: "300ms",
          }}
        >
          <AccordionTrigger>About Me</AccordionTrigger>
          <AccordionContent>
            <p>
              I'm Liam Lehr, a passionate software engineer and character
              developer. I love creating innovative solutions and bringing
              characters to life through storytelling.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="my-skills"
          className="animate-fade-in-left"
          style={{
            animationDelay: "600ms",
          }}
        >
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
        <AccordionItem
          value="contact-me"
          className="animate-fade-in-left"
          style={{
            animationDelay: "900ms",
          }}
        >
          <AccordionTrigger>Contact Me</AccordionTrigger>
          <AccordionContent>
            <p>
              Feel free to reach out to me via email at{" "}
              <a
                href="mailto:liamlylehr@gmail.com"
                className="text-blue-500 underline"
              >
                liamlylehr at gmail dot com
              </a>{" "}
              or connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/liam-lehr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                LinkedIn
              </a>
              .
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
