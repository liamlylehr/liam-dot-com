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
    </>
  );
}
