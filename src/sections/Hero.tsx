import IconLinks from "@/components/common/IconLinks";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center"
    >
      <div className="text-left space-y-3 max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Hallo! Ich bin <span className="text-primary">Dody</span>
        </h1>

        <p className="text-lg text-muted-foreground">
          FullStack Developer, focused on Python, TypeScript and C#
        </p>

        <IconLinks />
      </div>
    </section>
  );
}
