import IconLinks from "@/components/common/IconLinks";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="md:min-h-[70vh] min-h-[50vh] flex md:items-center justify-center flex-col-reverse md:flex-row gap-3"
    >
      <div className="text-left md:w-1/2 space-y-2 max-w-xl">

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Hey! I'm <span className="text-primary">Dody</span> (Doddee)
        </h1>

        <p className="text-3xl text-muted-foreground">
        FullStack Developer
        </p>

        <p className="rounded-md bg-gray-500/10 font-medium p-2 inline-flex items-center space-x-2">
          <MapPin className="h-4 w-4"/>
          <span>São Paulo, Brazil</span>
        </p>
        <IconLinks />
      </div>
      {/* <img
        className="w-1/2 md:w-1/3 rounded-4xl md:rounded-lg "
        src="pfp.jpg"
        alt="Profile Picture"
      ></img> */}
    </section>
  );
}
