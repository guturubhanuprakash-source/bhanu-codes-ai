import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Drowsiness Detection System",
      description: "Advanced computer vision system that monitors facial and verbal cues to identify signs of fatigue and prevent accidents. Utilizes real-time image processing and natural language processing to ensure driver safety.",
      technologies: ["OpenCV", "Python", "NLP", "Computer Vision", "Machine Learning"],
      features: [
        "Real-time facial expression analysis",
        "Voice pattern recognition for fatigue detection", 
        "Alert system for drowsiness prevention",
        "Multi-modal detection approach"
      ],
      category: "AI/ML Project",
      icon: "👁️"
    },
    {
      title: "Rainfall Prediction System",
      description: "Machine learning-based weather forecasting system that analyzes historical weather data patterns to accurately predict future precipitation levels and weather conditions.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Weather APIs", "Statistical Modeling"],
      features: [
        "Historical weather data analysis",
        "Predictive modeling algorithms",
        "Accurate precipitation forecasting",
        "Data visualization dashboard"
      ],
      category: "Data Science Project",
      icon: "🌧️"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining AI, machine learning, and real-world problem solving
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card border-border/50 hover:shadow-tech transition-all duration-500 hover:scale-[1.03] group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:animate-bounce">{project.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                      <Badge className="bg-tech-gradient text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-1">▶</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="border-primary/30 bg-skill-gradient hover:border-primary/60 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 hover:bg-primary/5 hover:border-primary/60"
                  >
                    View Project Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;