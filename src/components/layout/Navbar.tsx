const links = [
  { label: "Home", href: "#home" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
        <span className="font-semibold">Gallerani</span>

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
      </nav>
    </header>
  )
}
