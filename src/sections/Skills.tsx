import { Puzzle } from "lucide-react";
import { Card } from "../components/ui/card";

const skills = [
  { name: "React.js", color: "bg-cyan-400/60" }, 
  { name: "TypeScript", color: "bg-blue-500/60" },
  { name: "Tailwind CSS", color: "bg-sky-400/60" },
  { name: "Figma", color: "bg-pink-500/60" }, 
  { name: "Docker", color: "bg-sky-600/60" }, 
  { name: "Linux", color: "bg-yellow-500/60" },
  { name: "Git", color: "bg-red-500/60" },
  { name: "Next.js", color: "bg-black/60" }, 
  { name: "Vite", color: "bg-purple-400/60" },
  { name: "Python", color: "bg-yellow-400/60" },
  { name: "C#", color: "bg-violet-700/60" },
  { name: "Playwright", color: "bg-green-600/60" },
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
            shadowColor={skill.color}
            className="flex items-center justify-center text-lg font-semibold p-6 min-h-[80px]"
          >
            <span className="relative z-10">{skill.name}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}
