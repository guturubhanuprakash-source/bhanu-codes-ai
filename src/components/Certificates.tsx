import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certificates = () => {
  const certificates = [
    {
      title: "Foundations of Modern Machine Learning",
      issuer: "IIIT Hyderabad",
      type: "Professional Certificate",
      description: "Comprehensive training program covering modern machine learning fundamentals, algorithms, and practical implementations.",
      skills: ["Machine Learning", "Deep Learning", "Data Science", "Python"],
      icon: "🤖",
      category: "AI/ML"
    },
    {
      title: "Applied Artificial Intelligence: Practical Implementations",
      issuer: "TechSaksham",
      type: "Professional Certificate", 
      description: "Advanced certification focusing on practical applications of AI technologies and real-world implementation strategies.",
      skills: ["Artificial Intelligence", "AI Applications", "Practical AI", "Implementation"],
      icon: "🧠",
      category: "AI"
    },
    {
      title: "Foundations Of Python",
      issuer: "Infosys Spring Boot",
      type: "Technical Certification",
      description: "Fundamental certification in Python programming covering core concepts, data structures, and programming best practices.",
      skills: ["Python", "Programming", "Data Structures", "Software Development"],
      icon: "🐍",
      category: "Programming"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-card-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Certifications & Training</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and specialized training programs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className="bg-card border-border/50 hover:shadow-tech transition-all duration-500 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-3 group-hover:animate-bounce">{cert.icon}</div>
                <Badge 
                  className="bg-tech-gradient mb-3 mx-auto"
                >
                  {cert.category}
                </Badge>
                <CardTitle className="text-lg leading-snug text-primary">
                  {cert.title}
                </CardTitle>
                <div className="text-muted-foreground font-semibold">{cert.issuer}</div>
                <Badge variant="outline" className="border-primary/30 mt-2">
                  {cert.type}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
                
                <div>
                  <h4 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-skill-gradient border-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;