import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my software engineering projects, character development work, and creative endeavors.",
  openGraph: {
    title: "Projects | Liam Y Lehr",
    description: "Explore my software engineering projects, character development work, and creative endeavors.",
  },
  twitter: {
    title: "Projects | Liam Y Lehr",
    description: "Explore my software engineering projects, character development work, and creative endeavors.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <h1>Projects</h1>
    </div>
  );
}
