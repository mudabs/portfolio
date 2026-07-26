// Flat skill tags — ordered by relevance (backend/AI first, .NET last), no
// categories or self-assigned levels. The projects above carry the proof of depth.
const skills = [
  "Java",
  "Spring Boot",
  "REST API Design",
  "PostgreSQL",
  "JWT / OAuth2 Auth",
  "Stripe Integration",
  "Python",
  "LLM Integration (LangChain4j)",
  "Machine Learning",
  "Computer Vision (OpenCV, YOLO)",
  "CUDA / GPU Programming",
  "C++",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "HTML & CSS",
  "SQL",
  "Docker",
  "CI/CD (GitHub Actions)",
  "Linux / VPS / Nginx",
  "Cloud Storage (S3 / Cloudflare R2)",
  "Git & GitHub",
  "ASP.NET Core MVC",
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          The tools and technologies I build with day to day.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground shadow-xs transition-colors duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
