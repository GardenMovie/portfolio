import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio built with React, Vite, and Tailwind CSS.",
    image: "https://placehold.co/600x200?text=Portfolio",
    github: "https://github.com/youruser/portfolio",
    deploy: "https://your-portfolio.com",
    stack: ["React", "Vite", "Tailwind"],
  },
  {
    id: "tasker",
    title: "Tasker App",
    description: "A simple task management app with drag-and-drop and persistent storage.",
    image: "https://placehold.co/600x200?text=Tasker",
    github: "https://github.com/youruser/tasker",
    deploy: "https://tasker-demo.com",
    stack: ["React", "TypeScript", "DndKit"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="">
      <h2 className="text-2xl font-semibold mb-8">Projects</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="relative w-full h-[28rem]">
            <div className="absolute inset-0 translate-x-1 translate-y-1 bg-primary rounded-xl z-0 shadow-lg" aria-hidden="true" />
            <div className="flex flex-col h-full bg-card rounded-xl relative z-10 overflow-hidden">
              {/* Image area: top 1/3 */}
              <div className="h-1/2 w-full bg-muted flex items-center justify-center overflow-hidden">
                <img src={project.image} alt={project.title + ' preview'} className="object-cover w-full h-full" />
              </div>
              {/* Content area: bottom 2/3 */}
              <div className="flex flex-col flex-1 gap-2 px-6 py-6 justify-between relative">
                <div>
                  <h3 className="font-bold text-lg leading-none">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                </div>
                <div className="flex flex-row justify-between items-end w-full mt-2">
                  {/* Stack widgets bottom left */}
                  <div className="flex gap-2">
                    {project.stack?.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-muted text-xs font-semibold text-muted-foreground border border-border shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Links bottom right, same style */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[--chart-2] text-primary-foreground hover:bg-primary/80 transition text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[--chart-2] text-primary-foreground hover:bg-primary/80 transition text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Deploy</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
