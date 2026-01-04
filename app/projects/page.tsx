import type { Metadata } from "next";

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
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-start py-12 px-4 sm:py-32 sm:px-16 sm:items-start">
        <h1>Projects</h1>
      </main>
    </div>
  );
}
