const languages = [
  { id: "en", name: "English", level: "C1", description: "Native" },
  { id: "pt", name: "Portuguese", level: "C2", description: "Fluent" },
  //   { id: "de", name: "German", level: "A1", description: "Beginner" },
];

export function Languages() {
  return (
    <section id="languages" className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">Languages</h2>
      <div className="grid gap-4">
        {languages.map((lang) => (
          <div
            key={lang.id}
            className="flex items-center gap-4 px-4 py-3 bg-card rounded-md"
          >
            <span className="font-bold text-lg min-w-10 text-center">
              {lang.level}
            </span>
            <div className="space-y-1">
              <span className="font-medium leading-none">{lang.name}</span>
              <div className="text-sm text-muted-foreground">
                {lang.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
