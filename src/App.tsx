
import Navbar from "@/components/layout/Navbar"
import Hero from "@/sections/Hero"
import { Education } from "./sections/Education"
import { Experience } from "./sections/Experience"
<<<<<<< HEAD
<<<<<<< HEAD
import { Projects } from "./sections/Projects"
import { Language } from "./sections/Language"
=======
import { Languages } from "./sections/Languages"
import { Projects } from "./sections/Projects"
>>>>>>> 76b8a19 (Feat: add project cards with details and stack to new section for projects)
=======
import { Projects } from "./sections/Projects"
import { Language } from "./sections/Language"
>>>>>>> 899c0f3 (Feat: update project sections; refactor Navbar and styling)

export default function App() {
  return (
    <section className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col mx-auto px-10 gap-10 md:max-w-6xl py-20 pt-24">
        <Hero />
        <Experience />
<<<<<<< HEAD
        <Projects />
        <Education/>
<<<<<<< HEAD
        <Language />
=======
        <Languages />
        <Projects />
>>>>>>> 76b8a19 (Feat: add project cards with details and stack to new section for projects)
=======
        <Projects />
        <Education/>
        <Language />
>>>>>>> 899c0f3 (Feat: update project sections; refactor Navbar and styling)
      </main>
    </section>
  )
}
