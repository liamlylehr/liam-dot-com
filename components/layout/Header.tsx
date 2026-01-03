import Link from "next/link";
import { ThemeToggle } from "../theme/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <h1 className="py-4 text-lg font-semibold">Liam Y Lehr</h1>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/projects"
              className="text-sm font-medium hover:underline"
            >
              Projects
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
