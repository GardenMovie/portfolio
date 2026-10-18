//import vigilisImg from "@/assets/projectPics/vigilisSpecula.png";
import vigilisImgLaptop from "@/assets/projectPics/vigilisSpeculaLaptop.png";
//import raycastingImg from "@/assets/projectPics/raycasting.png";
import raycastingImgLaptop from "@/assets/projectPics/raycastingImgLaptop.png";
import breviareImg from "@/assets/projectPics/breviarePic.png";

export const projects = [
  {
    id: "breviare",
    title: "Breviare",
    description:
      "URL shortener with analytics, accounts and link safety checks. React frontend and Spring Boot backend",
    //github: "https://github.com/GardenMovie/breviare-iter",
    github: "https://breviare-iter.vercel.app/",
    deploy: "https://breviare-iter.vercel.app/",
    deployIsDownload: false,
    stack: ["React", "TypeScript", "Java", "PostgreSQL"],
    image: breviareImg,
  },
  {
    id: "vigilis",
    title: "Vigilis",
    description: "Monitoring System for server usage metrics",
    //github: "https://github.com/GardenMovie/vigilis-specula",
    github: "https://vigilis-specula.vercel.app",
    deploy: "https://vigilis-specula.vercel.app",
    deployIsDownload: false,
    stack: ["MongoDB", "TypeScript", "Python"],
    //image: vigilisImg,
    image: vigilisImgLaptop,
  },
  {
    id: "raycasting-engine",
    title: "Raycasting Engine",
    description:
      "Web based game engine that uses raycasting to render 3D levels",
    //github: "https://github.com/GardenMovie/raycasting-engine",
    github: "https://carmack-inc.github.io/raycasting-engine/",
    deploy: "https://carmack-inc.github.io/raycasting-engine/",
    deployIsDownload: false,
    stack: ["TypeScript", "React", "Next.js"],
    image: raycastingImgLaptop,
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
