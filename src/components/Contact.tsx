import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "guturubhanu@gmail.com",
      icon: "📧",
      action: () => window.open("mailto:guturubhanu@gmail.com"),
      description: "Send me an email"
    },
    {
      type: "Phone", 
      value: "+91 9381201445",
      icon: "📞",
      action: () => window.open("tel:+919381201445"),
      description: "Give me a call"
    },
    {
      type: "Location",
      value: "Tuni, Andhra Pradesh, India",
      icon: "📍",
      action: () => window.open("https://maps.google.com/?q=Tuni,Andhra Pradesh,India"),
      description: "View on maps"
    }
  ];

  const socialLinks = [
    {
      platform: "LinkedIn",
      icon: "💼",
      description: "Professional Network"
    },
    {
      platform: "GitHub", 
      icon: "💻",
      description: "Code Repository"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities in AI and software development
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card 
                key={contact.type}
                className="bg-card-gradient border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer group"
                onClick={contact.action}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-3 group-hover:animate-bounce">{contact.icon}</div>
                  <CardTitle className="text-lg text-primary">{contact.type}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="font-semibold text-foreground">{contact.value}</div>
                  <div className="text-sm text-muted-foreground">{contact.description}</div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary/30 hover:bg-primary/5"
                  >
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="bg-card-gradient border-border/50 shadow-tech">
            <CardContent className="p-12 text-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3 bg-tech-gradient bg-clip-text text-transparent">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  I'm actively seeking opportunities to contribute to innovative projects in AI, machine learning, 
                  and software development. Let's discuss how we can work together to create impactful solutions.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="secondary" className="bg-skill-gradient">
                  Available for Full-time Positions
                </Badge>
                <Badge variant="secondary" className="bg-skill-gradient">
                  Open to Internships
                </Badge>
                <Badge variant="secondary" className="bg-skill-gradient">
                  Collaborative Projects Welcome
                </Badge>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg"
                  className="bg-tech-gradient hover:shadow-glow transition-all duration-300"
                  onClick={() => window.open("mailto:guturubhanu@gmail.com?subject=Opportunity Discussion")}
                >
                  Start a Conversation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/30 hover:bg-primary/5"
                  onClick={() => window.open("tel:+919381201445")}
                >
                  Schedule a Call
                </Button>
              </div>
              
              <div className="pt-8 border-t border-border/50">
                <div className="text-sm text-muted-foreground mb-4">Connect with me on:</div>
                <div className="flex gap-4 justify-center">
                  {socialLinks.map((social) => (
                    <div key={social.platform} className="text-center">
                      <div className="text-2xl mb-1">{social.icon}</div>
                      <div className="text-sm font-semibold">{social.platform}</div>
                      <div className="text-xs text-muted-foreground">{social.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;