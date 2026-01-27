import { Briefcase, Gamepad2} from "lucide-react";
import { TimelineCard } from "@/components/common/TimelineCard";
import { experience } from "@/data/experience";

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
        {experience.map((item) => (
          <TimelineCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
