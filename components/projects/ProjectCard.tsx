"use client";
import { useState } from "react";
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
import { GoProjectSymlink } from "react-icons/go";
import { ANIMATION } from "@/lib/constants";

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
  index?: number;
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
  index = 0,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  const MAX_DESCRIPTION_LENGTH = 200;
  const shouldTruncate = description.length > MAX_DESCRIPTION_LENGTH;

  return (
    <>
      <Card
        className="w-full mb-3 animate-fade-in-left"
        style={{
          animationDelay: `${index * ANIMATION.stagger.normal}ms`,
        }}
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {shouldTruncate && !isExpanded
              ? `${description.slice(0, MAX_DESCRIPTION_LENGTH)}... `
              : description}
            {shouldTruncate && (
              <button
                onClick={toggleExpand}
                className="text-blue-500 hover:underline ml-1"
              >
                {isExpanded ? "Show Less" : "Read More"}
              </button>
            )}
          </CardDescription>
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
            {github_link && (
              <Badge className="mr-4 py-2 transition-all hover:scale-110 hover:shadow-lg">
                <a
                  href={github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGithub /> View on GitHub
                </a>
              </Badge>
            )}
            {link && (
              <Badge className="mr-4 py-2 transition-all hover:scale-110 hover:shadow-lg">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <GoProjectSymlink /> Visit Page
                </a>
              </Badge>
            )}
            {status && (
              <>
                <br /> <p className="mt-2 text-sm">Status: {status}</p>
              </>
            )}
          </CardAction>
        </CardFooter>
      </Card>
    </>
  );
}
