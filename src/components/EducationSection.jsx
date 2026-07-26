import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "M.S. in Computer Science",
    school: "Saint Louis University",
    location: "St. Louis, MO, USA",
    period: "Expected May 2027",
    honor: "GPA: 4.0 / 4.0",
    detail:
      "Focus on software engineering, AI/ML, computer vision, and parallel & GPU computing.",
  },
  {
    degree: "Bachelor of Technology (Hons), Information Technology",
    school: "Harare Institute of Technology",
    location: "Harare, Zimbabwe",
    period: "2020 – 2024",
    honor: "First Class Honours",
    detail:
      "Foundation in software engineering, data structures, databases, and systems design.",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Education</span>
        </h2>

        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.degree}
              className="gradient-border p-6 card-hover flex items-start gap-4 text-left"
            >
              <div className="p-3 rounded-full bg-primary/10 shrink-0">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-lg font-semibold">{item.degree}</h3>
                  <span className="text-sm text-muted-foreground shrink-0">
                    {item.period}
                  </span>
                </div>
                <p className="font-medium text-primary/90">{item.school}</p>
                <p className="text-sm text-muted-foreground">{item.location}</p>
                {item.honor && (
                  <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                    {item.honor}
                  </span>
                )}
                <p className="mt-2 text-sm text-muted-foreground/80">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
