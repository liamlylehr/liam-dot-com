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
            animationDelay: "200ms",
          }}
        >
          <AccordionTrigger>About Me</AccordionTrigger>
          <AccordionContent>
            <p>
              I'm Liam Y Lehr, a passionate software engineer, combat athlete,
              and life-long student. I love learning about a wide variety of
              topics, creating innovative solutions and helping bring all kinds
              of ideas to light. <br />
              <br />
              When I'm not coding, you can find me:
            </p>
            <ul className="list-disc list-inside">
              <li>training BJJ, Wrestling or Muay Thai</li>
              <li>
                watching a movie, reading a book or listening to music/podcasts
                (send your recs)
              </li>
              <li>learning guitar or to cook a new dish</li>
              <li>traveling to new places</li>
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
            animationDelay: "400ms",
          }}
        >
          <AccordionTrigger>My Skills</AccordionTrigger>
          <AccordionContent>
            <p>Here are some of the technologies I've worked with:</p>
            <br />
            <ul className="list-disc list-inside">
              <li>JavaScript / TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
              <li>Three.js</li>

              <li>Java</li>
              <li>Spring Boot</li>

              <li>Python</li>
              <li>FastAPI</li>
              <li>Hugging Face</li>
              <li>YOLOv11</li>

              <li>PostgreSQL</li>
              <li>MongoDB</li>

              <li>OpenShift</li>
              <li>Vercel</li>
              <li>AWS</li>
              <li>Docker</li>
              <li>Kubernetes</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="contact-me"
          className="animate-fade-in-left"
          style={{
            animationDelay: "600ms",
          }}
        >
          <AccordionTrigger>Contact Me</AccordionTrigger>
          <AccordionContent>
            <p>
              Feel free to reach out via email{" "}
              <a
                href="mailto:liamlylehr@gmail.com"
                className="text-blue-500 underline"
              >
                liamlylehr at gmail dot com
              </a>{" "}
              <br />
              or connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/liam-lehr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                LinkedIn
              </a>{" "}
              and{" "}
              <a
                href="https://x.com/liamylr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                X (Twitter)
              </a>
              .
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
