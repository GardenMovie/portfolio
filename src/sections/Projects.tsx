import { Github, ExternalLink, FolderKanban } from "lucide-react";
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
          <div className="h-full" key={project.id}>
            <Card
              className="cursor-pointer "
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
              <div className="flex flex-col ">
                {/* Image area: top, maintain aspect ratio */}
                <CardHeader className="aspect-[8/4] p-3 w-full flex items-center justify-center overflow-hidden">
                  {project.images &&
                    project.images.map((img, idx) => (
                      <img
                        key={img + idx}
                        src={img}
                        alt={project.title + " preview " + (idx + 1)}
                        className="object-cover rounded-md w-full h-full"
                      />
                    ))}
                </CardHeader>
                {/* Content area: bottom */}
                <CardContent className="flex flex-col flex-1 p-3 justify-between">
                  <div>
                    <h3 className="font-bold text-lg leading-none">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 mb-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-end w-full mt-2">
                    {/* Badges on the left */}
                    <div className="flex gap-2">
                      {project.stack && project.stack.length > 0 && project.stack.map((tech, idx) => (
                        <span
                          key={tech + idx}
                          className="inline-flex items-center gap-2 px-3 py-2.5 rounded-md border-2 border-gray-600 bg-transparent text-black-700 text-sm font-medium select-none h-[40px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Link buttons on the right */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2.5 rounded-md bg-(--chart-2) text-primary-foreground hover:bg-(--chart-2)/80 transition text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                      {project.deploy && !project.deployIsDownload && (
                        <a
                          href={project.deploy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-(--chart-5) text-primary-foreground hover:bg-(--chart-5)/80 transition text-sm font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Deploy</span>
                        </a>
                      )}
                      {project.deploy && project.deployIsDownload && (
                        <a
                          href={project.deploy}
                          download
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-(--chart-5) text-primary-foreground hover:bg-(--chart-5)/80 transition text-sm font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Download</span>
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
