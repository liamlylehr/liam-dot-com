import React from "react";
import { SOCIAL_LINKS } from "../../lib/constants";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} Liam Y Lehr. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href={SOCIAL_LINKS[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            GitHub
          </a>
          <a
            href={SOCIAL_LINKS[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            LinkedIn
          </a>
          <a
            href={SOCIAL_LINKS[2].url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
