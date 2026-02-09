import { cn } from "@/lib/utils";
import { useState } from "react";

// --- 1. Define Certifications Data ---
const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    category: "cloud",
    badgePath: "/badges/OCI25FNDCFA.jpeg",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=10E8F6FADEF7F0FB32FEAC20A6DD991F78B59F08E5E09367A8FD60B418AB65E1",
    badgeLink:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=10E8F6FADEF7F0FB32FEAC20A6DD991F78B59F08E5E09367A8FD60B418AB65E1",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    category: "ai",
    badgePath: "/badges/OCI25AICFA.jpeg",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A71B5168D9ADBAAE992939570D21BA2F5F10597261598C0AF59A1694843FF9D5",
    badgeLink:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A71B5168D9ADBAAE992939570D21BA2F5F10597261598C0AF59A1694843FF9D5",
  },
  {
    name: "Oracle Data Platform 2025 Certified Foundations Associate",
    category: "data",
    badgePath: "/badges/OCI25DCFAV2.jpg",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=019746FB6AC8560C019C9F5E87AA0BE7A21BF31F65D7EDF806A50E1B093E22DD",
    badgeLink:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=019746FB6AC8560C019C9F5E87AA0BE7A21BF31F65D7EDF806A50E1B093E22DD",
  },
  {
    name: "MySQL HeatWave Implementation Certified Associate Rel 1",
    category: "data",
    badgePath: "/badges/MYSQLHWIMPOCA.jpg",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C1399DDADA28ABCBBA4D0F72E69D058545FEB747EF3A2A430451B2CCEF81B2C0",
    badgeLink:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C1399DDADA28ABCBBA4D0F72E69D058545FEB747EF3A2A430451B2CCEF81B2C0",
  },
  // Add more certifications here as you get them:
  // {
  //   name: "Example AI Certification",
  //   category: "ai",
  //   badgePath: "path/to/ai/badge.png",
  //   link: "#",
  //   badgeLink: "path/to/ai/badge.png",
  // },
];

// --- 2. Define Certification Categories ---
const categories = [
  { name: "All", value: "all" },
  { name: "Cloud", value: "cloud" },
  { name: "AI", value: "ai" },
  { name: "Code", value: "code" },
  { name: "Data", value: "data" },
];

// --- 3. The Certifications Component ---
export const CertsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCertifications =
    activeCategory === "all"
      ? certifications
      : certifications.filter((cert) => cert.category === activeCategory);

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certifications</span>
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

        {/* Certification Grid Container */}
        <div
          // New classes to handle centering when fewer than 3 items are present
          className={cn(
            "grid gap-8",
            filteredCertifications.length > 0
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "",
            filteredCertifications.length === 1 &&
              "lg:grid-cols-1 max-w-sm mx-auto", // Center 1 item
            filteredCertifications.length === 2 &&
              "lg:grid-cols-2 max-w-3xl mx-auto" // Center 2 items
          )}
        >
          {filteredCertifications.length > 0 ? (
            filteredCertifications.map((cert) => (
              <a
                key={cert.name}
                // *** CHANGE 1: Use cert.badgeLink (which is the image path) for the href ***
                href={cert.badgeLink}
                target="_blank"
                rel="noopener noreferrer"
                // Styles for the card to use the image as a background
                style={{ backgroundImage: `url(${cert.badgePath})` }}
                className={cn(
                  "bg-cover bg-center bg-no-repeat rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 relative aspect-[4/3] group cursor-pointer card-hover overflow-hidden"
                )}
              >
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] group-hover:bg-black/70 transition-colors duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-300 capitalize mt-1">
                    {cert.category}
                  </p>
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full text-center text-muted-foreground text-lg p-10">
              No certifications found in the{" "}
              <span className="capitalize font-medium text-foreground">
                {activeCategory}
              </span>{" "}
              category yet. Check back soon!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
