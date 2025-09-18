import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <>
      <section id="about" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center md:text-4xl">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">
                Passionate Software Developer
              </h2>

              <p className="text-muted-foreground/80">
                I'm Munashe Mudabura, a Master's student in Computer Science at
                Saint Louis University with a strong background in Software
                Engineering. I enjoy solving complex problems and building
                scalable solutions that make a real impact.
              </p>
              <p className="text-muted-foreground/80">
                My expertise spans modern web technologies like React, .NET
                MAUI, and Blazor. I’m passionate about creating user-friendly
                applications that combine performance, functionality, and great
                design.
              </p>
              <p className="text-muted-foreground/80">
                Beyond coding, I am continuously exploring AI and emerging
                technologies to expand my skill set and contribute to innovative
                projects in software development and enterprise systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  {" "}
                  Get In Touch
                </a>
                <a
                  href="/Munashe_Sam_Mudabura_Resume.pdf"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                  target="_blank"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 ">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">
                      Frontend Development
                    </h4>
                    <p className="text-muted-foreground/80">
                      Building responsive, dynamic, and visually appealing web
                      applications using React and modern JavaScript frameworks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 ">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">Full-Stack Skills</h4>
                    <p className="text-muted-foreground/80">
                      Experience with .NET MAUI, Blazor, and backend systems to
                      deliver complete end-to-end software solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 ">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">
                      Professional Growth
                    </h4>
                    <p className="text-muted-foreground/80">
                      Focused on mastering new technologies, collaborating on
                      real-world projects, and building a career as a versatile
                      software developer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
