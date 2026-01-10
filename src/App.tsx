
import Navbar from "@/components/layout/Navbar"
import Hero from "@/sections/Hero"
import { Education } from "./sections/Education"
import { Experience } from "./sections/Experience"
import { Languages } from "./sections/Languages"

export default function App() {
  return (
    <section className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col mx-auto px-10 gap-10 md:max-w-6xl py-20 pt-24">
        <Hero />
        <Experience />
        <Education/>
        <Languages />
      </main>
    </section>
  )
}
