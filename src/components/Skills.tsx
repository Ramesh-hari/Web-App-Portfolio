import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-slide-up");
              }, index * 50);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap", "Responsive Design"],
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      title: "Backend",
      skills: ["Java", "OOP", "Collections", "Exception Handling", "Multithreading", "Spring Boot", "Spring MVC", "Spring Security", "REST APIs", "Hibernate", "Microservices"],
      color: "bg-green-500/10 text-green-500 border-green-500/20",
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB", "Schema Design"],
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    },
    {
      title: "Testing & Debugging",
      skills: ["JUnit", "Mockito", "Postman", "Debugging Tools"],
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    },
    {
      title: "Tools & Deployment",
      skills: ["Git", "GitHub", "Docker", "IntelliJ IDEA", "VS Code", "Netlify", "Railway"],
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    },
    {
      title: "Methodologies",
      skills: ["Agile"],
      color: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll bg-skill-card"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className={`${category.color} hover:scale-105 transition-transform`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
