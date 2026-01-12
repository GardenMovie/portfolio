import IconLinks from "@/components/common/IconLinks";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[30vh] md:mt-20 flex items-center justify-center md:flex-row flex-col gap-9 scroll-mt-20"
    >
      <img
        className="w-1/3 md:w-1/6 rounded-full md:mt-0 mt-20 ring-4 ring-primary"
        src="pfp.jpg"
        alt="Profile Picture"
      ></img>
      <div className="text-left space-y-2">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Hey! I'm <span className="text-primary">Dody</span> (Dod-gee)
        </h1>

        <p className="text-3xl text-muted-foreground">Full-Stack Developer</p>

        <div className="flex items-center relative group">
          <p className="rounded-md bg-gray-300/100 font-medium p-2 inline-flex items-center space-x-2 z-10">
            <MapPin className="h-4 w-4" />
            <span>São Paulo, Brazil</span>
          </p>
          <img
            src="/flags/Flag_of_Europe.svg"
            alt="EU Flag"
            className="rounded-xs ml-2 w-6 h-4 z-0 rotate-0 transition-all duration-300 sm:ml-[-16px] sm:-rotate-45 sm:group-hover:ml-2 sm:group-hover:rotate-0"
            aria-hidden="true"
          />
          <span className="ml-2 opacity-100 transition-opacity duration-300 whitespace-nowrap select-none text-blue-800 sm:opacity-0 sm:group-hover:opacity-100">
            EU Citizen
          </span>
        </div>
        <IconLinks />
      </div>
    </section>
  );
}
