import { Github, ExternalLink, FolderKanban } from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";

const projects = [
  {
    id: "ufabc-braille-servos",
    title: "Braille Display with Servos",
    description:
      "Arduino controlled braille display using servos and 3D printed parts, made at a course at UFABC",
    github: "https://github.com/GardenMovie/ufabc-braille-servos",
    deploy: "",
    stack: [],
    images: ["/projectPics/braille.jpeg"],
  },
  {
    id: "interantar-fragmentos-polares",
    title: "Interantar Fragmentos Polares",
    description: "Educational point-and-click game for young children",
    github: "https://github.com/GardenMovie/interantar-fragmentos-polares",
    deploy: "",
    stack: [],
    images: ["/projectPics/fragmentos.png"],
  },
  {
    id: "interantar-banquete-gelado",
    title: "Interantar Banquete Gelado",
    description: "Educational top-down adventure game for young children",
    github: "https://github.com/GardenMovie/interantar-banquete-gelado",
    deploy: "",
    stack: [],
    images: ["/projectPics/banqueteGelado.png"],
  },
  {
    id: "interantar-polaroo",
    title: "Interantar Polaroo",
    description: "Educational Wordle-inspired game for young children",
    github: "https://github.com/GardenMovie/interantar-polaroo",
    deploy: "",
    stack: [],
    images: [
      "projectPics/polaroo1.png",
      "projectPics/polaroo2.png",
      "projectPics/polaroo3.png",
    ],
  },
  {
    id: "raycasting-engine",
    title: "Raycasting Engine",
    description:
      "Web based game engine that uses raycasting to render 3D levels",
    github: "https://github.com/GardenMovie/raycasting-engine",
    deploy: "",
    stack: [],
    images: ["projectPics/raycasting.png"],
  },
  // {
  // 	id: "portfolio",
  // 	title: "Portfolio",
  // 	description: "",
  // 	github: "https://github.com/GardenMovie/portfolio",
  // 	deploy: "",
  // 	stack: [],
  // 	images: ["https://placehold.co/400x100?text=Portfolio"],
  // },
];
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
            key={project.id}
            className="h-100 cursor-pointer"
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
            <div className="flex flex-col h-full">
              {/* Image area: top */}
              <CardHeader className="h-2/3 p-3 w-full flex items-center justify-center overflow-hidden">
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
              {/* Content area: bottom 2/3 */}
              <CardContent className="flex flex-col flex-1 p-3 justify-between">
                <div>
                  <h3 className="font-bold text-lg leading-none">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex justify-end gap-3 ">
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
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
