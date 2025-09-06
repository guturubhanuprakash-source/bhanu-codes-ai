import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "AI-ML Virtual Intern",
      company: "National Internship Portal",
      duration: "10 weeks",
      type: "Virtual Internship",
      description: [
        "Completed comprehensive AI-ML Virtual Internship program",
        "Enhanced technical skills through application of modern machine learning techniques",
        "Contributed directly to project outcomes within the internship framework",
        "Gained practical experience in AI and ML technologies"
      ],
      skills: ["Machine Learning", "AI Technologies", "Python", "Data Analysis"]
    },
    {
      title: "Networking Virtual Intern", 
      company: "National Internship Portal",
      duration: "10 weeks",
      type: "Virtual Internship",
      description: [
        "Acquired essential skills in networking technologies and concepts",
        "Demonstrated expertise in network systems and protocols",
        "Enhanced understanding of modern networking infrastructure",
        "Applied theoretical knowledge to practical networking scenarios"
      ],
      skills: ["Networking", "Network Protocols", "System Administration", "Network Security"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience through specialized internships in cutting-edge technologies
          </p>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary mb-1">{exp.title}</CardTitle>
                    <div className="text-lg font-semibold text-muted-foreground">{exp.company}</div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge variant="outline" className="border-primary/30">
                      {exp.duration}
                    </Badge>
                    <Badge className="bg-tech-gradient">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="bg-skill-gradient border-primary/20"
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

export default Experience;