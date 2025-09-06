import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["HTML", "CSS", "Python", "JavaScript"],
      icon: "💻"
    },
    {
      title: "Technologies & Frameworks",
      skills: ["Machine Learning", "OpenCV", "NLP", "Spring Boot"],
      icon: "⚡"
    },
    {
      title: "Databases & Systems",
      skills: ["MySQL", "Windows", "Data Analysis"],
      icon: "🗄️"
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Critical Thinking", "Communication", "Self-motivated", "Agile", "Confident"],
      icon: "🎯"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML technologies, programming languages, and essential soft skills
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-card-gradient border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary" 
                      className="bg-skill-gradient border-primary/20 hover:border-primary/50 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;