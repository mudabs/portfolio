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
                Saint Louis University (4.0 GPA) with a strong background in
                software engineering. I enjoy solving complex problems and
                building scalable, production-grade systems that make a real
                impact.
              </p>
              <p className="text-muted-foreground/80">
                My core stack spans Java and Spring Boot on the backend, React
                and Next.js on the frontend, tied together with PostgreSQL,
                Docker, and cloud deployment. I care about clean architecture,
                solid REST API design, and shipping features that hold up in
                production.
              </p>
              <p className="text-muted-foreground/80">
                Beyond web systems, I'm actively growing in AI and machine
                learning, from LLM integration to computer vision, and enjoy
                taking projects all the way from prototype to deployed,
                real-world software.
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
                      Backend Engineering
                    </h4>
                    <p className="text-muted-foreground/80">
                      Designing and building REST APIs and scalable services with
                      Java, Spring Boot, and PostgreSQL, deployed with Docker.
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
                    <h4 className="text-lg font-semibold">Full-Stack Development</h4>
                    <p className="text-muted-foreground/80">
                      Building responsive React and Next.js frontends backed by
                      robust services to deliver complete, end-to-end products.
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
                    <h4 className="text-lg font-semibold">AI &amp; Cloud</h4>
                    <p className="text-muted-foreground/80">
                      Integrating LLMs and exploring computer vision, with CI/CD
                      and cloud/VPS deployment for production-grade delivery.
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
