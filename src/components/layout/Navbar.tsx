// import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="flex max-w-6xl mx-auto px-4 h-14 px-10 flex items-center justify-between">
        <span className="font-semibold">Gallerani</span>
        <div className="flex items-center gap-4">
          <div className="flex gap-6 text-sm">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition"
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* <ThemeToggle /> */}
        </div>
      </nav>
    </header>
  );
}
