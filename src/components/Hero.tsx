import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import profileImage from "@/assets/profile-picture.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
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

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex-1 text-center md:text-left space-y-6 animate-slide-in-left">
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl text-primary font-medium">Hi, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Ramesh Harikrishnan
              </h1>
              <h3 className="text-2xl md:text-3xl text-muted-foreground">
                Full Stack Developer
              </h3>
            </div>
            <p className="text-lg text-gray-300 max-w-xl">
              Building secure, scalable, and user-friendly full stack applications with modern technologies.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Ramesh H - Resume.pdf";
                  link.download = "Ramesh_Harikrishnan_Resume.pdf";
                  link.click();
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0 animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-hero-from to-hero-to rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Ramesh Harikrishnan"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
