import vigilisImg from "@/assets/projectPics/vigilisSpecula.png";
import fragmentosImg from "@/assets/projectPics/fragmentos.png";
import raycastingImg from "@/assets/projectPics/raycasting.png";
import banqueteImg from "@/assets/projectPics/banqueteGelado.png";
import polarooImg from "@/assets/projectPics/polaroo.png";
import brailleImg from "@/assets/projectPics/braille.jpeg";

export const projects = [
  {
    id: "vigilis",
    title: "Vigilis",
    description: "Monitoring System for server usage metrics",
    github: "https://github.com/GardenMovie/vigilis",
    deploy: "vigilis-specula.vercel.com",
    deployIsDownload: false,
    stack: ["MongoDB", "TypeScript", "Python"],
    image: vigilisImg,
  },
  {
    id: "interantar-fragmentos-polares",
    title: "Interantar Fragmentos Polares",
    description: "Educational point-and-click game for young children",
    github: "https://github.com/GardenMovie/interantar-fragmentos-polares",
    deploy: "https://play.google.com/store/apps/details?id=com.interantar.fragmentospolares",
    deployIsDownload: true,
    stack: ["C#", "Unity"],
    image: fragmentosImg,
  },
  {
    id: "raycasting-engine",
    title: "Raycasting Engine",
    description:
      "Web based game engine that uses raycasting to render 3D levels",
    github: "https://github.com/GardenMovie/raycasting-engine",
    deploy: "https://carmack-inc.github.io/raycasting-engine/",
    deployIsDownload: false,
    stack: ["TypeScript", "React", "Next.js"],
    image: raycastingImg,
  },
  {
    id: "interantar-banquete-gelado",
    title: "Interantar Banquete Gelado",
    description: "Educational top-down adventure game for young children",
    github: "https://github.com/GardenMovie/interantar-banquete-gelado",
    deploy: "",
    deployIsDownload: true,
    stack: ["C#", "Unity"],
    image: banqueteImg,
  },
  {
    id: "interantar-polaroo",
    title: "Interantar Polaroo",
    description: "Educational Wordle-inspired game for young children",
    github: "https://github.com/GardenMovie/interantar-polaroo",
    deploy: "",
    deployIsDownload: true,
    stack: ["C#", "Unity"],
    image: polarooImg,
  },
  {
    id: "ufabc-braille-servos",
    title: "Braille Display with Servos",
    description:
      "Arduino controlled braille display using servos and 3D printed parts, made at a course at UFABC",
    github: "https://github.com/GardenMovie/ufabc-braille-servos",
    deploy: "",
    deployIsDownload: false,
    stack: ["Arduino", "CAD", "3D Printing"],
    image: brailleImg,
  },
  // {
  // 	id: "portfolio",
  // 	title: "Portfolio",
  // 	description: "",
  // 	github: "https://github.com/GardenMovie/portfolio",
  // 	deploy: "",
  // 	stack: ["TypeScript", "React", "Vite"],
  // 	images: ["https://placehold.co/400x100?text=Portfolio"],
  // },
];
