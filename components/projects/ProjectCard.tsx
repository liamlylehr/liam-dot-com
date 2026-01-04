import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";

interface Teammate {
  name: string;
  website?: string;
}
interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  github_link?: string;
  stack?: string[];
  status?: string;
  teammates?: Teammate[];
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  github_link,
  stack,
  status,
  teammates,
}: ProjectCardProps) {
  return (
    <>
      <Card className="w-full m-3">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="text-sm">
          {teammates && teammates.length > 0 && (
            <div className="mb-2">
              <p>
                Team:{" "}
                {teammates.map((teammate) => (
                  <Badge
                    key={teammate.name}
                    variant="outline"
                    className="mr-1 text-blue-500 transition-all hover:scale-110 hover:shadow-lg"
                  >
                    {teammate.website ? (
                      <a
                        href={teammate.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {teammate.name}
                      </a>
                    ) : (
                      teammate.name
                    )}
                  </Badge>
                ))}
              </p>
            </div>
          )}
          {stack && (
            <div>
              <p>
                Stack:{" "}
                {stack.map((tech) => (
                  <Badge key={tech} variant="outline" className="mr-1">
                    {tech}
                  </Badge>
                ))}
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <CardAction>
            <Badge className="mr-4 p-1.5 transition-all hover:scale-110 hover:shadow-lg">
              {github_link && (
                <a
                  href={github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGithub /> View on GitHub
                </a>
              )}
            </Badge>
            {status && <span>Status: {status}</span>}
          </CardAction>
        </CardFooter>
      </Card>
    </>
  );
}
