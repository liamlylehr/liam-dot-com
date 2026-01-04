import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import type { IconType } from "react-icons";

/**
 * Site Configuration
 * Core metadata and information about the site
 */
export const SITE_CONFIG = {
  name: "Liam Y Lehr",
  author: "Liam Y Lehr",
  title: "Hello, I'm Liam.",
  subtitle: "Software Engineer | Ideator",
  url: "https://liamylehr.com",
} as const;

/**
 * Social Media Links
 * Used in: HeroSection, Footer
 */
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/liamlylehr",
    icon: FaGithub,
    ariaLabel: "Visit my GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/liam-lehr/",
    icon: FaLinkedinIn,
    ariaLabel: "Connect with me on LinkedIn",
  },
  {
    name: "Twitter",
    url: "https://x.com/liamylr",
    icon: FaXTwitter,
    ariaLabel: "Follow me on Twitter",
  },
  {
    name: "Medium",
    url: "https://medium.com/@liamlylehr",
    icon: SiMedium,
    ariaLabel: "Read my articles on Medium",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/shorts/3E8akMaedIc?si=uwXCYDCQN07jgBzL",
    icon: FaYoutube,
    ariaLabel: "Subscribe to my YouTube channel",
  },
] as const satisfies ReadonlyArray<{
  name: string;
  url: string;
  icon: IconType;
  ariaLabel: string;
}>;

/**
 * Navigation Links
 * Primary navigation menu items
 */
export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
] as const;

/**
 * Animation Configuration
 * Timing values in milliseconds for consistent animations across the site
 */
export const ANIMATION = {
  delays: {
    none: 0,
    fast: 50,
    normal: 100,
    medium: 150,
    slow: 200,
  },
  durations: {
    fast: 300,
    normal: 500,
    slow: 700,
  },
  stagger: {
    fast: 50,
    normal: 100,
    slow: 150,
  },
} as const;
