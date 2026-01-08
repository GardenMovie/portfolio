import { Briefcase, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type EducationItem = {
  id: string;
  title: string;
  institution: string;
  period: string;
  description?: string;
  icon: React.ElementType;
};

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
      "Spearheaded the end-to-end development, testing, and publication of three educational mobile games using Unity and C#. Presented projects at national events receiving awards for our work",
    icon: Briefcase,
  },
];

export function Experience() {
  return (
    <section id="education" className="space-y-6">
      {/* Section title */}
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>

      {/* Education items */}
      <div className="grid gap-4">
        {education.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.id}>
              <CardContent className="flex items-center px-6 min-h-30 ">
                <div className="flex gap-4">
                {/* Icon */}
                <div className="mt-1">
                  <Icon className="h-6 w-6 text-muted-foreground" />
                </div>

                {/* Text content */}
                <div className="space-y-1">
                  <h3 className="font-medium leading-none">{item.title}</h3>

                  <p className="text-sm text-muted-foreground">
                    {item.institution} • {item.period}
                  </p>

                  {item.description && (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
