import { Languages } from "lucide-react";

const languages = [
  { id: "en", name: "English", level: "C1", description: "Proficient" },
  { id: "pt", name: "Portuguese", level: "C2", description: "Native" },
  // { id: "de", name: "German", level: "A1", description: "Learning" },
  //   { id: "de", name: "German", level: "A1", description: "Beginner" },
];

export function Language() {
  return (
    <section id="language" className="space-y-6 scroll-mt-20">
      <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
        <Languages className="w-6 h-6 text-muted" />
        <span>Education</span>
      </h2>
      <div className="flex gap-4">
        {languages.map((lang) => (
          <div key={lang.id} className="relative w-full">
            <div className="absolute inset-0 translate-x-1 translate-y-1 bg-primary rounded-xl z-0 shadow-lg" aria-hidden="true" />
            <div className="flex items-center gap-4 px-4 py-3 bg-card rounded-md relative z-10 bg-gradient-to-br from-neutral-100 from-70% to-neutral-300">
              <span className="font-bold text-lg min-w-10 text-center">
                {lang.level}
              </span>
              <div className="space-y-1">
                <span className="font-bold text-lg leading-none">{lang.name}</span>
                {/* <div className="text-muted-foreground">
                  {lang.description}
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
