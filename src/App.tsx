import Navbar from "@/components/layout/Navbar"
import Hero from "@/sections/Hero"
import { Education } from "./sections/Education"
import { Experience } from "./sections/Experience"
import { Projects } from "./sections/Projects"
import { Language } from "./sections/Language"
import "@/components/common/HeroGridBg.css";

export default function App() {

  return (
    <section className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col mx-auto px-10 gap-10 md:max-w-6xl py-2 relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Education/>
        <Language />
      </main>
    </section>
  )
}
