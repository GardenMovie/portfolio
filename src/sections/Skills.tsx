import { Puzzle } from "lucide-react";
import { Card } from "../components/ui/card";
import { skills } from "@/data/skills";

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
