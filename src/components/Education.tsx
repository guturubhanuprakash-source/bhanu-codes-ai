import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Kakinada Institute of Engineering and Technology",
      university: "JNTU Kakinada",
      duration: "2022 - 2026",
      grade: "65%",
      status: "Pursuing",
      icon: "🎓",
      highlights: [
        "Focused on Computer Science and Engineering",
        "Strong foundation in programming and algorithms",
        "Specialized coursework in AI and Machine Learning"
      ]
    },
    {
      degree: "Intermediate Education",
      institution: "Sri Chaitanya Junior College",
      location: "Tuni, Andhra Pradesh",
      duration: "2020 - 2022",
      grade: "70%",
      status: "Completed",
      icon: "📚",
      highlights: [
        "Strong performance in Mathematics and Physics",
        "Foundation in analytical thinking",
        "Prepared for engineering entrance examinations"
      ]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sri Prakash Vidya Nikethan",
      location: "Tuni, Andhra Pradesh",
      duration: "2020",
      grade: "9.3 CGPA",
      status: "Completed",
      icon: "🏫",
      highlights: [
        "Excellent academic performance with 9.3 CGPA",
        "Strong foundation in core subjects",
        "Active participation in extracurricular activities"
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Educational Background</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation with consistent performance and focused learning in technology
          </p>
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.01]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{edu.icon}</div>
                    <div>
                      <CardTitle className="text-xl text-primary mb-2">{edu.degree}</CardTitle>
                      <div className="text-lg font-semibold text-muted-foreground">{edu.institution}</div>
                      {edu.university && (
                        <div className="text-sm text-muted-foreground">{edu.university}</div>
                      )}
                      {edu.location && (
                        <div className="text-sm text-muted-foreground">{edu.location}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge 
                      variant={edu.status === "Pursuing" ? "default" : "secondary"}
                      className={edu.status === "Pursuing" ? "bg-tech-gradient" : ""}
                    >
                      {edu.status}
                    </Badge>
                    <div className="text-sm text-muted-foreground">{edu.duration}</div>
                    <div className="text-lg font-bold text-primary">{edu.grade}</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;