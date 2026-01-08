import Navbar from "@/components/layout/Navbar"
import Hero from "@/sections/Hero"
import { Education } from "./sections/Education"

export default function App() {
  return (
    <section className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <Education />
      </main>
    </section>
  )
}
