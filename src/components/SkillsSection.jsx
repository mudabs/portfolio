import { cn } from "@/lib/utils";
import { useState } from "react";

const skills = [
  // Frontend
  { name: "React", level: 70, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "Bootstrap CSS", level: 75, category: "frontend" },

  // Backend
  { name: "ASP.NET Core MVC", level: 65, category: "backend" },
  { name: "Razor Pages", level: 60, category: "backend" },
  { name: "Flask (Python)", level: 55, category: "backend" },
  { name: ".NET MAUI", level: 50, category: "backend" },
  { name: "Blazor", level: 40, category: "backend" },

  // Tools
  { name: "Git & GitHub", level: 80, category: "tools" },
  { name: "Docker", level: 50, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },
  { name: "SQL (MySQL, PostgreSQL, SqlServer)", level: 70, category: "tools" },
  { name: "NoSQL (MongoDB)", level: 60, category: "tools" },
];

const categories = [
  { name: "All", value: "all" },
  { name: "Frontend", value: "frontend" },
  { name: "Backend", value: "backend" },
  { name: "Tools", value: "tools" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category.value)}
              className={cn(
                "px-5 py-2 rounded-full capitalize transition-colors duration-300",
                activeCategory === category.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-primary hover:text-primary-foreground"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name} // use unique skill name instead of index
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
