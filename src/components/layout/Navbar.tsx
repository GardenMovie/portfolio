import { GraduationCap, Briefcase, FolderKanban, Languages, Puzzle, Menu } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
// import ThemeToggle from "./ThemeToggle";

const links = [
  { icon: <Briefcase className="w-5 h-5" />, href: "#experience", label: "Experience" },
  { icon: <FolderKanban className="w-5 h-5" />, href: "#projects", label: "Projects" },
  { icon: <Puzzle className="w-5 h-5" />, href: "#skills", label: "Skills" },
  { icon: <GraduationCap className="w-5 h-5" />, href: "#education", label: "Education" },
  { icon: <Languages className="w-5 h-5" />, href: "#language", label: "Languages" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/30 backdrop-blur">
      <nav className="flex max-w-6xl mx-auto px-4 h-14 px-10 flex items-center justify-between">
        <a href="#home" className="font-semibold hover:text-primary p-2">Gallerani</a>
        {/* Desktop links */}
        <div className="hidden sm:flex gap-3 text-sm">
          {links.map(link => (
            <Button
              key={link.href}
              variant="outline"
              size="icon"
              asChild
              aria-label={link.label}
            >
              <a
                href={link.href}
                className="text-muted-foreground hover:text-primary flex items-center"
                title={link.label}
              >
                {link.icon}
              </a>
            </Button>
          ))}
        </div>
        {/* Hamburger menu for mobile */}
        <div className="sm:hidden flex items-center">
          <Button variant="outline" size="icon" onClick={() => setOpen(o => !o)} aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </Button>
          {open && (
            <div className="absolute top-14 right-4 bg-background border rounded-md shadow-lg flex flex-col py-2 z-50 min-w-[160px] animate-in fade-in slide-in-from-top-2">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition"
                  title={link.label}
                  onClick={() => setOpen(false)}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
        {/* <ThemeToggle /> */}
      </nav>
    </header>
  );
}
