import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import amazonImage from "@/assets/project-amazon.jpg";
import jobPortalImage from "@/assets/project-jobportal.jpg";
import eventImage from "@/assets/project-event.jpg";

const Projects = () => {
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
              }, index * 150);
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

  const projects = [
    {
      title: "Amazon Clone – E-Commerce Application",
      description:
        "Comprehensive e-commerce platform with secure authentication, product management, shopping cart, and order processing. Features role-based access control for customers and admins with JWT authentication.",
      image: amazonImage,
      tech: ["React.js", "Spring Boot", "Spring Security", "JWT", "MySQL", "JUnit", "Swagger"],
      github: "https://github.com/Ramesh-hari/project-two-ecommerce-application",
      demo: "#",
    },
    {
      title: "Job Portal Application",
      description:
        "Full-featured job portal enabling employers to post jobs and seekers to discover opportunities. Includes advanced search, filtering, and role-based workflows with secure authentication.",
      image: jobPortalImage,
      tech: ["Spring MVC", "Spring Security", "MongoDB", "JUnit", "Swagger"],
      github: "https://github.com/Ramesh-hari/job-connect-project",
      demo: "#",
    },
    {
      title: "Event Management System",
      description:
        "Interactive event management platform with user registration, event browsing, and admin dashboards. Features JWT authentication, CRUD operations, and advanced search capabilities.",
      image: eventImage,
      tech: ["React.js", "Spring Boot", "Spring Security", "JWT", "MySQL", "JUnit", "Swagger"],
      github: "https://github.com/Ramesh-hari/Event-Management-System",
      demo: "#",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll bg-project-card"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  {project.demo !== "#" && (
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
