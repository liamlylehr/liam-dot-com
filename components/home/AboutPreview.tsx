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
              I'm Liam Y Lehr, a passionate software engineer, combat athlete,
              and friend. I love learning about a wide variety of topics,
              creating innovative solutions and helping bring ideas of all kinds
              to light. <br />
              <br />
              When I'm not coding, you can find me:
            </p>
            <ul className="list-disc list-inside">
              <li>training BJJ, Wrestling or Muay Thai</li>
              <li>
                watching a movie or reading a book (please send your recs)
              </li>
              <li>playing guitar</li>
              <li>traveling to new spots</li>
              <li>exploring new tech</li>
            </ul>
            <br />
            <p>
              Feel free to reach out! I'm always excited to connect with
              like-minded individuals!
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
