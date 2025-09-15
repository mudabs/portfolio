import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4"
    >
      {/* Content */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl">
            <span className="text-4xl sm:text-5xl font-bold text-glow text-foreground opacity-0 animate-fade-in-delay-1">
              Hi, I'm{" "}
              <span className="text-primary opacity-0 animate-fade-in-delay-2">
                Munashe
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Mudabura
              </span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            I'm a passionate developer specializing in creating beautiful and
            functional web applications.
          </p>

          <div className="mt-6 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none -z-10"></div>

      {/* Scroll indicator at bottom */}
      <div className="absolute bottom-6 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary " />
      </div>
    </section>
  );
};
