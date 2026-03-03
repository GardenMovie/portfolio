import type { EducationItem } from "@/types";
import { Gamepad2 , Terminal } from "lucide-react";

export const experience: EducationItem[] = [
  {
    id: "game-dev-interantar",
    title: "Game Developer",
    institution: "InterAntar",
    period: "May 2025 — Jan 2026",
    description: `Game Developer in a team with aggressive deadlines, contributing to the development, testing and publication of mobile games.
    - Tech Stack: C#, Unity, Git, Google Workspace, Figma`,
    icon: Gamepad2,
  },
  {

    id: "freelancer",
    title: "Web Developer and Automation Engineer",
    institution: "Freelancer",
    period: "Feb 2024 — Jan 2025",
    description: `Web Developer and Automation Engineer delivering impactful solutions for clients, focusing on efficiency and user experience.
      - Tech Stack: HTML, CSS, JavaScript, Bootstrap, Python, Playwright (Python), Pandas (Python).`,
    icon: Terminal,
  },
];
