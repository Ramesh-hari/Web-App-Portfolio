import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Layers, Users } from "lucide-react";
import aboutImage from "@/assets/about.png";

const About = () => {
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
              }, index * 100);
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

  const highlights = [
    {
      icon: Target,
      title: "Problem Solving",
      description: "Finding efficient solutions to complex challenges",
    },
    {
      icon: Lightbulb,
      title: "Real-time Solutions",
      description: "Building applications that meet business needs",
    },
    {
      icon: Layers,
      title: "Scalable Apps",
      description: "Designing systems that grow with your business",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborating effectively with cross-functional teams",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-on-scroll">
            <img
              src={aboutImage}
              alt="About Ramesh"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="flex-1 space-y-6">
            <div className="space-y-4 animate-on-scroll">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a Full Stack Java Developer skilled in building secure, simple, and scalable full stack applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I focus on clean code, real-time business solutions, and team collaboration.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy solving problems and building applications that are both functional and user-friendly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow animate-on-scroll bg-card"
                >
                  <highlight.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
