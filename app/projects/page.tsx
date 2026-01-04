import ProjectCard from "@/components/projects/ProjectCard";
import type { Metadata } from "next";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my software engineering projects, character development work, and creative endeavors.",
  openGraph: {
    title: "Projects | Liam Y Lehr",
    description:
      "Explore my software engineering projects, character development work, and creative endeavors.",
  },
  twitter: {
    title: "Projects | Liam Y Lehr",
    description:
      "Explore my software engineering projects, character development work, and creative endeavors.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-start py-12 px-4 sm:py-12 sm:px-16 sm:items-start">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Projects</h1>
          <p className="text-sm text-gray-500">
            Explore what I've been developing. I will be updating this section
            with my latest work. Open to questions, suggestions and
            collaborations.
          </p>
        </div>
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            github_link={project.github_link}
            stack={project.stack}
            status={project.status}
            teammates={project.teammates}
          />
        ))}
      </main>
    </div>
  );
}
