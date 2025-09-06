import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import professionalPortrait from "@/assets/professional-portrait.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <Badge variant="secondary" className="text-sm font-medium">
                Available for Opportunities
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold bg-tech-gradient bg-clip-text text-transparent leading-tight">
                Bhanu Prakash Guturu
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                Aspiring Software Engineer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Results-driven software engineer with hands-on experience in AI and ML technologies. 
              Proven ability in problem-solving and critical thinking, with a strong foundation in 
              programming and database management.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Button 
                size="lg" 
                className="bg-tech-gradient hover:shadow-glow transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="border-primary/30 hover:bg-primary/5"
              >
                View Projects
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Certificates</div>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-tech animate-glow">
                <img 
                  src={professionalPortrait} 
                  alt="Bhanu Prakash Guturu - Professional Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-tech-gradient opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;