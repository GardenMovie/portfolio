import { GraduationCap, Blocks } from "lucide-react";
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
    id: "cs-degree",
    title: "Bachelor of Computer Science",
    institution: "Federal University of ABC (UFABC)",
    period: "2023 — 2028",
    description:
      "Core training in software development and computer science fundamentals, including algorithms and data structures, object-oriented design, database systems, and applied programming using Python and C#.",
    icon: GraduationCap,
  },
  {
    id: "ct-degree",
    title: "Bachelor of Science & Technology",
    institution: "Federal University of ABC (UFABC)",
    period: "2023 — 2028",
    description:
      "Interdisciplinary program with a strong foundation in mathematics, scientific reasoning, and quantitative analysis, emphasizing problem-solving across engineering, computing, and natural sciences.",
    icon: GraduationCap,
  },
  {
    id: "webdev-course",
    title: "Technical Course in Web Development and Programming",
    institution: "Dom Bosco School",
    period: "2020 — 2022",
    description:
      "Introductory training in programming logic and web development fundamentals, including HTML, CSS, and JavaScript, with early exposure to interactive applications, basic game development, and digital media tools.",
    icon: Blocks,
  },
];


export function Education() {
  return (
    <section id="education" className="space-y-6">
      {/* Section title */}
      <h2 className="text-2xl font-semibold tracking-tight">
        Education
      </h2>

      {/* Education items */}
      <div className="grid gap-4">
        {education.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.id}>
              <CardContent className="flex items-center px-6 min-h-30">
                <div className="flex gap-4">
                {/* Icon */}
                <div className="mt-1">
                  <Icon className="h-6 w-6 text-muted-foreground" />
                </div>

                {/* Text content */}
                <div className="space-y-1">
                  <h3 className="font-medium leading-none">
                    {item.title}
                  </h3>

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
