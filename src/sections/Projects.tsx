import { FolderKanban } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { projects } from "@/data/projects";
export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
        <FolderKanban className="w-6 h-6 text-muted" />
        <span>Projects</span>
        {/* <span className="ml-5 -rotate-3 bg-gray-300 text-sm text-muted-foreground px-2 py-1 rounded-md">Click to open Github Repo</span> */}
      </h2>
      <div className="grid gap-4 grid-cols-1">
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
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 p-3">
                {/* Left (1/2): 16:9 image */}
                <div className="col-span-1 aspect-video rounded-lg bg-gray-300 overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title + " preview"}
                      className="object-cover rounded-lg w-full h-full border border-foreground/10"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
                {/* Right (1/2): info */}
                <div className="col-span-1 flex flex-col">
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
                </div>
              </CardContent>
            </Card>
        ))}
      </div>
    </section>
  );
}
