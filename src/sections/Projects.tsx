import { Github, ExternalLink, FolderKanban } from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";

const projects = [
	{
		id: "ufabc-braille-servos",
		title: "ufabc-braille-servos",
		description: "",
		github: "https://github.com/GardenMovie/ufabc-braille-servos",
		deploy: "",
		stack: [],
		image: "https://placehold.co/400x100?text=ufabc-braille-servos",
	},
	{
		id: "interantar-fragmentos-polares",
		title: "Interantar Fragmentos Polares",
		description: "Educational point-and-click game for young children",
		github: "https://github.com/GardenMovie/interantar-fragmentos-polares",
		deploy: "",
		stack: [],
		image: "https://placehold.co/400x100?text=Interantar+Fragmentos+Polares",
	},
	{
		id: "interantar-banquete-gelado",
		title: "Interantar Banquete Gelado",
		description: "Educational top-down adventure game for young children",
		github: "https://github.com/GardenMovie/interantar-banquete-gelado",
		deploy: "",
		stack: [],
		image: "https://placehold.co/400x100?text=Interantar+Banquete+Gelado",
	},
	{
		id: "interantar-polaroo",
		title: "Interantar Polaroo",
		description: "Educational Wordle-inspired game for young children",
		github: "https://github.com/GardenMovie/interantar-polaroo",
		deploy: "",
		stack: [],
		image: "https://placehold.co/400x100?text=Interantar+Polaroo",
	},
	{
		id: "raycasting-engine",
		title: "Raycasting Engine",
		description: "Web based game engine that uses raycasting to render 3D levels",
		github: "https://github.com/GardenMovie/raycasting-engine",
		deploy: "",
		stack: [],
		image: "https://placehold.co/400x100?text=Raycasting+Engine",
	},
	{
		id: "portfolio",
		title: "Portfolio",
		description: "",
		github: "https://github.com/GardenMovie/portfolio",
		deploy: "",
		stack: [],
		image: "https://placehold.co/400x100?text=Portfolio",
	},
];
export function Projects() {
	return (
		<section id="projects" className="scroll-mt-20">
		<h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
			<FolderKanban className="w-6 h-6 text-muted" />
			<span>Projects</span>
		</h2>
		<div className="grid gap-4 grid-cols-1 md:grid-cols-2">
			{projects.map((project) => (
					<Card key={project.id} className="h-80 cursor-pointer" hoverEffect>
						<div className="flex flex-col h-full">
							{/* Image area: top */}
							<CardHeader className="min-h-1/2 w-full bg-muted flex items-center justify-center overflow-hidden">
								<img
									src={project.image}
									alt={project.title + " preview"}
									className="object-cover w-full h-full"
								/>
							</CardHeader>
							{/* Content area: bottom 2/3 */}
							<CardContent className="flex flex-col flex-1 gap-2 px-6 py-6 justify-between">
								<div>
									<h3 className="font-bold text-lg leading-none">
										{project.title}
									</h3>
									<p className="text-sm text-muted-foreground mb-2">
										{project.description}
									</p>
								</div>
								<div className="flex justify-end gap-3 mt-2">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-3 py-2.5 rounded-md bg-(--chart-2) text-primary-foreground hover:bg-(--chart-2)/80 transition text-sm font-medium"
									>
										<Github className="w-4 h-4" />
										<span>GitHub</span>
									</a>
									<a
										href={project.deploy}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-(--chart-5) text-primary-foreground hover:bg-(--chart-5)/80 transition text-sm font-medium"
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
