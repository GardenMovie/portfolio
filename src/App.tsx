
import Navbar from "@/components/layout/Navbar"
import Hero from "@/sections/Hero"
import { Education } from "./sections/Education"
import { Experience } from "./sections/Experience"
import { Projects } from "./sections/Projects"
import FullStackSkills from "./sections/Skills";
import { Language } from "./sections/Language"
import Footer from "./sections/Footer";
import { Blog } from "./sections/Blog";
import { BlogPost } from "./sections/BlogPost";
import { useEffect, useState } from "react";
import "@/components/common/HeroGridBg.css";

const BLOG_ROUTE = "#/blog";
const POST_ROUTE = /^#\/blog\/([\w-]+)$/;

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  const slug = hash.match(POST_ROUTE)?.[1];

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // The target section isn't mounted yet when the hash changes from a blog page
  // back to the home page, so scroll to it once the new view has rendered.
  useEffect(() => {
    if (slug || hash === BLOG_ROUTE) {
      window.scrollTo(0, 0);
    } else if (hash.length > 1) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [slug, hash]);

  return (
    <section className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col mx-auto px-10 gap-10 md:max-w-6xl py-2 relative z-10">
        {slug ? (
          <BlogPost slug={slug} />
        ) : hash === BLOG_ROUTE ? (
          <Blog />
        ) : (
          <>
            <Hero />
            <Experience />
            <Projects />
            <FullStackSkills />
            <Education/>
            <Language />
            <Footer />
          </>
        )}
      </main>
    </section>
  )
}
