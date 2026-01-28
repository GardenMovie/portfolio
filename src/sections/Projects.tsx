import { FolderKanban } from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { projects } from "@/data/projects";
export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
        <FolderKanban className="w-6 h-6 text-muted" />
        <span>Projects</span>
        {/* <span className="ml-5 -rotate-3 bg-gray-300 text-sm text-muted-foreground px-2 py-1 rounded-md">Click to open Github Repo</span> */}
      </h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
            <Card
              className="cursor-pointer h-full flex flex-col"
              hoverEffect
              onClick={() => {
                if (project.github) {
                  window.open(project.github, "_blank", "noopener,noreferrer");
                }
              }}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && project.github) {
                  window.open(project.github, "_blank", "noopener,noreferrer");
                }
              }}
            >
              {/* Image area: top, maintain aspect ratio */}
              <CardHeader className="aspect-[2/1] pt-3 px-3 w-full flex items-center justify-center overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title + " preview"}
                      className="object-cover rounded-md w-full h-full"
                      loading="lazy"
                    />
                  )}
              </CardHeader>
              {/* Content area: bottom */}
              <CardContent className="flex flex-col flex-1 px-3 pb-3">
                <div className="">
                  <h3 className="font-bold text-xl leading-none">
                    {project.title}
                  </h3>
                  <p className="text-md text-muted-foreground mt-1 mb-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack && project.stack.length > 0 && project.stack.map((tech, idx) => (
                    <span
                      key={tech + idx}
                      className="inline-flex items-center gap-2 px-3 py-2.5 rounded-md border-2 border-gray-600 bg-transparent text-black-700 text-center text-sm font-medium select-none h-[40px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
        ))}
      </div>
    </section>
  );
}
