
import Navbar from "@/components/layout/Navbar"
import Hero from "@/sections/Hero"
import { Education } from "./sections/Education"
import { Experience } from "./sections/Experience"
import { Languages } from "./sections/Languages"

export default function App() {
  return (
    <section className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <section className="md:min-h-[90vh] min-h-[50vh] flex justify-center flex-col-reverse xl:flex-row gap-x-30 gap-y-10">
          {/* Left: Education + Languages, Right: Experience */}
          <div className="flex flex-col gap-10 flex-1">
            <Education />
            <Languages />
          </div>
          <div className="flex-1">
            <Experience />
          </div>
        </section>
      </main>
    </section>
  )
}
