import { GraduationCap, Blocks, Book} from "lucide-react";
import type { EducationItem } from "@/types";
import { TimelineCard } from "@/components/common/TimelineCard";


const education: EducationItem[] = [
  {
    id: "cs-degree",
    title: "Bachelor of Computer Science",
    institution: "Federal University of ABC (UFABC)",
    period: "2023 — 2028",
    // description:
    //   "Core training in software development and computer science fundamentals, including algorithms and data structures, object-oriented design, database systems, and applied programming using Python and C#.",
    icon: GraduationCap,
  },
  {
    id: "ct-degree",
    title: "Bachelor of Science & Technology",
    institution: "Federal University of ABC (UFABC)",
    period: "2023 — 2028",
    // description:
    //   "Interdisciplinary program with a strong foundation in mathematics, scientific reasoning, and quantitative analysis, emphasizing problem-solving across engineering, computing, and natural sciences.",
    icon: GraduationCap,
  },
  {
    id: "webdev-course",
    title: "Technical Course in Web Development and Programming",
    institution: "Dom Bosco School",
    period: "2020 — 2022",
    // description:
    //   "Introductory training in programming logic and web development fundamentals, including HTML, CSS, and JavaScript, with early exposure to interactive applications, basic game development, and digital media tools.",
    icon: Blocks,
  },
];


export function Education() {
  return (
    <section id="education" className="space-y-6 scroll-mt-20">
      {/* Section title */}
      <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
        <Book className="w-6 h-6 text-muted" />
        <span>Education</span>
      </h2>

      {/* Education items */}
      <div className="flex flex-col gap-4">
        {education.map((item) => (
          <TimelineCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
