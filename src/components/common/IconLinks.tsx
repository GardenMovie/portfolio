import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

type IconLink = {
  href: string
  label: string
  icon: React.ReactNode
}

const links: IconLink[] = [
  {
    href: "https://github.com/GardenMovie",
    label: "GitHub",
    icon: <Github className="h-5 w-5" />,
  },
  {
    href: "https://linkedin.com/in/dody-gallerani",
    label: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    href: "mailto:dodygallerani@hotmail.com",
    label: "Email",
    icon: <Mail className="h-5 w-5" />,
  },
]

export default function IconLinks() {
  return (
    <div className="flex gap-3 justify-left">
      {links.map(link => (
        <Button
          key={link.label}
          variant="outline"
          size="icon"
          asChild
          aria-label={link.label}
        >
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  )
}
