import Navbar from "@/components/layout/Navbar"
import Hero from "@/sections/Hero"
import { Education } from "./sections/Education"
import { Experience } from "./sections/Experience"

export default function App() {
  return (
    <section className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <section className="md:min-h-[90vh] min-h-[50vh] flex justify-center flex-col-reverse md:flex-row gap-x-30 gap-y-10">
        <Education />
        <Experience />
        </section>
      </main>
    </section>
  )
}
