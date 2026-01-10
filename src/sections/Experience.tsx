import { Briefcase, Terminal } from "lucide-react";
import type { EducationItem } from "@/types";
import { TimelineCard } from "@/components/common/TimelineCard";

const education: EducationItem[] = [
  {
    id: "freelancer",
    title: "Freelancer",
    institution: "Web Development",
    period: "2024 — Present",
    description: 
      `Delivered automation solutions, data analysis, and lead-generation landing pages for small businesses.
      \n- Automated workflows and repetitive tasks using Python Playwright, saving hours of manual work, with improved accuracy.
      - Built and deployed lead-generation landing pages for clients, generating 100s of qualified leads that turned into sales.
      - Delivered actionable data analysis and automated reporting, increasing client conversion rates by 15%.
      \nTechnologies used: Playwright, Python, TypeScript, React, Next.js`,
    icon: Terminal,
  },
  {
    id: "game-dev-interantar",
    title: "Game Developer",
    institution: "InterAntar",
    period: "May 2025 — Jan 2026",
    description: `Game Developer in a team with aggressive deadlines, contributing to the development, testing and publication of mobile games.
\n - End-to-end development of 3 mobile games using Unity, delivered on time and published on the Google Play Store.
 - Involved in testing and bug fixing of my own games, and provided technical support to other devs on the team.
 - Shared experiences at national events such as the National Science and Technology Week (SNCT 2025).
 - Presented the team's projects at the Brazilian conference on Computers in Education (CBIE 2025), with 3 team games awarded.

Technologies used: C#, Unity, Git, Google Workspace, Figma`,
    icon: Briefcase,
  },
];

export function Experience() {
  return (
    <section id="experience" className="space-y-6 scroll-mt-20">
      {/* Section title */}
      <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
        <Briefcase className="w-6 h-6 text-muted" />
        <span>Experience</span>
      </h2>

      {/* Education items */}
      <div className="grid gap-4">
        {education.map((item) => (
          <TimelineCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
