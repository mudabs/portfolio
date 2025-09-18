import { ArrowDown } from "lucide-react";
import profileImg from "/Munashe Mudabura.png"; // <- place your image in /public or /src/assets

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen px-4"
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-8">
        {/* Left side - Text */}
        <div className="space-y-6 relative z-10 text-left">
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
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl opacity-0 animate-fade-in-delay-4">
            I'm a passionate developer specializing in creating beautiful and
            functional web applications.
          </p>

          <div className="mt-6 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative">
          <img
            src={profileImg}
            alt="Munashe Mudabura"
            className="w-80 md:w-[400px] rounded-full mx-auto opacity-0 animate-fade-in-delay-3"
          />

          {/* Optional overlay for text overlap effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1 className="text-6xl md:text-7xl font-bold text-primary opacity-10">
              Developer
            </h1>
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
