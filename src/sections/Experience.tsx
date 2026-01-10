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
      "Delivered automation solutions, data analysis, and lead-generation landing pages for small businesses. Applied tools such as Playwright, JavaScript, Python, and web technologies to streamline workflows and improve client results.",
    icon: Terminal,
  },
  {
    id: "game-dev-interantar",
    title: "Game Developer",
    institution: "InterAntar",
    period: "May 2025 — Jan 2026",
    description:
      "Spearheaded the end-to-end development, testing, and publication of three educational mobile games using Unity and C#. Presented projects at national events receiving awards for our work.",
    icon: Briefcase,
  },
];

export function Experience() {
  return (
    <section id="experience" className="space-y-6">
      {/* Section title */}
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>

      {/* Education items */}
      <div className="grid gap-4">
        {education.map((item) => (
          <TimelineCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
