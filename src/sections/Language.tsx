import { Languages } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { languages } from "@/data/languages";

export function Language() {
  return (
    <section id="language" className="space-y-6 scroll-mt-20">
      <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
        <Languages className="w-6 h-6 text-muted" />
        <span>Languages</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        {languages.map((lang) => (
          <div key={lang.id} className="relative w-full">
            <Card className="flex-1 min-w-0">
              <CardContent>
                <div className="flex items-center gap-4 py-3 w-full">
                  <span className="font-bold text-lg min-w-10 text-center">
                    {lang.level}
                  </span>
                  <span className="font-bold text-lg leading-none">
                    {lang.name}
                  </span>
                  {/* <div className="text-muted-foreground">
                {lang.description}
              </div> */}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
