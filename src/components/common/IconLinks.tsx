import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

type IconLink = {
  href: string
  label: string
  icon: React.ReactNode
  download?: string
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
  // {
  //   href: "/DodyCV.pdf",
  //   label: "Resume",
  //   icon: <FileText className="h-5 w-5" />,
  //   download: "DodyCV.pdf"
  // },
]

export default function IconLinks({ row = true }: { row?: boolean }) {
  return (
    <div className={cn(
      "flex flex-wrap flex-col-1 gap-3 justify-left",
      row ? "flex-row" : "flex-col"
    )}>
      <Button
        key={"Download CV"}
        variant="outline"
        size="lg"
        asChild
        aria-label={"Download CV"}
      >
        <a
          href={"/DodyCV.pdf"}
          download={"DodyCV.pdf"}
          rel="noopener noreferrer"
        >
          <FileText className="h-5 w-5" /> Resume
        </a>
      </Button>
      {links.map(link => (
        <Button
          key={link.label}
          variant="outline"
          size="icon-lg"
          asChild
          aria-label={link.label}
        >
          <a
            href={link.href}
            target="_blank"
            download={link.download}
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  )
}
