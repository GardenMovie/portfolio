import { GraduationCap, Briefcase, FolderKanban, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
// import ThemeToggle from "./ThemeToggle";

const links = [
  { icon: <Briefcase className="w-5 h-5" />, href: "#experience", label: "Experience" },
  { icon: <FolderKanban className="w-5 h-5" />, href: "#projects", label: "Projects" },
  { icon: <GraduationCap className="w-5 h-5" />, href: "#education", label: "Education" },
  { icon: <Languages className="w-5 h-5" />, href: "#language", label: "Languages" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/30 backdrop-blur">
      <nav className="flex max-w-6xl mx-auto px-4 h-14 px-10 flex items-center justify-between">
        <a href="#home" className="font-semibold hover:text-primary p-2">Gallerani</a>
          <div className="flex gap-3 text-sm">
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
          {/* <ThemeToggle /> */}
      </nav>
    </header>
  );
}
