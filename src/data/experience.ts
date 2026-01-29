import type { EducationItem } from "@/types";
import { Gamepad2 , Terminal } from "lucide-react";

export const experience: EducationItem[] = [
  {
    id: "game-dev-interantar",
    title: "Game Developer",
    institution: "InterAntar",
    period: "May 2025 — Jan 2026",
    description: `Game Developer in a team with aggressive deadlines, contributing to the development, testing and publication of mobile games.

    - End-to-end development of 3 mobile games using Unity, delivered on time and published on the Google Play Store.
    - Involved in testing and bug fixing of my own games, and provided technical support to other devs on the team.
    - Shared experiences at national events such as the National Science and Technology Week (SNCT 2025).
    - Presented the team's projects at the Brazilian conference on Computers in Education (CBIE 2025), with 3 team games awarded.
    
    Tech Stack: C#, Unity, Git, Google Workspace, Figma`,
    icon: Gamepad2,
  },
  {

    id: "freelancer",
    title: "Web Developer and Automation Engineer",
    institution: "Freelancer",
    period: "Feb 2024 — Jan 2025",
    description: `Web Developer and Automation Engineer delivering impactful solutions for clients, focusing on efficiency and user experience.

      - Planned and developed landing pages with mobile-first layouts using Bootstrap, HTML, CSS, and JavaScript, supporting client marketing campaigns. This resulted in a 30% increase in lead conversion and a 20% reduction in bounce rates post-launch.
      - Developed a Python automation, using pandas, to process a backlog of +100k historical sales records, reducing manual workload by more than 20 hours per month and preventing future backlogs for clients.
      - Created a Playwright-based web automation (Python), integrating with a gated community digital intercom platform, streamlining access for service providers.
      - Delivered customized solutions for small clients, enabling process standardization, efficiency gains, and fast-loading web pages aligned with their goals.

      Tech Stack: HTML, CSS, JavaScript, Bootstrap, Python, Playwright (Python), Pandas (Python).`,
    icon: Terminal,
  },
];
