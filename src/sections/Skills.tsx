import { Puzzle } from "lucide-react";
import { Card } from "../components/ui/card";

const skills = [
  { name: "React.js", color: "#61dafb" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Tailwind CSS", color: "#38bdf8" },
  { name: "Figma", color: "#a259ff" },
  { name: "Docker", color: "#2496ed" },
  { name: "Linux", color: "#fbc02d" },
  { name: "Git", color: "#f14e32" },
  { name: "Next.js", color: "#000000" },
  { name: "Vite", color: "#646cff" },
  { name: "Python", color: "#3776ab" },
  { name: "C#", color: "#9b4f96" },
  { name: "Playwright", color: "#45ba6a" },
];

export default function Skills() {
  return (
    <section className="space-y-6 scroll-mt-20" id="skills">
      <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
        <Puzzle className="w-6 h-6 text-muted" />
        <span>Skills</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            color={skill.color}
            className="flex items-center justify-center text-lg font-semibold p-6 min-h-[80px]"
          >
            <span className="relative z-10">{skill.name}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}
