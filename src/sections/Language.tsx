import { Languages } from "lucide-react";
import { Card } from "../components/ui/card";

const languages = [
  { id: "en", name: "English", level: "C1", description: "Proficient" },
  { id: "pt", name: "Portuguese", level: "C2", description: "Native" },
  // { id: "de", name: "German", level: "A1", description: "Learning" },
];

export function Language() {
  return (
    <section id="language" className="space-y-6 scroll-mt-20">
      <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
        <Languages className="w-6 h-6 text-muted" />
        <span>Languages</span>
      </h2>
      <div className="flex gap-4">
        {languages.map((lang) => (
          <Card key={lang.id} className="flex flex-row items-center gap-4 px-4 py-3 w-full">
            <span className="font-bold text-lg min-w-10 text-center">
              {lang.level}
            </span>
            <div className="space-y-1">
              <span className="font-bold text-lg leading-none">{lang.name}</span>
              {/* <div className="text-muted-foreground">
                {lang.description}
              </div> */}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
