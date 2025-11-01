import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Recycle, 
  Leaf, 
  Shield, 
  Award, 
  Users, 
  Target,
  Heart,
  CheckCircle,
  ArrowRight,
  Building,
  Globe
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-eco-green" />,
      title: "Environmental Stewardship",
      description: "Committed to protecting our planet through sustainable practices and innovative recycling solutions."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Quality & Safety",
      description: "Maintaining the highest standards in processing, safety protocols, and regulatory compliance."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Customer Focus",
      description: "Building lasting partnerships through reliable service, transparency, and dedicated support."
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Community Impact",
      description: "Creating positive change in our local community and contributing to a sustainable future."
    }
  ];

  const certifications = [
    "ISO 14001 Environmental Management",
    "EPA Certified Recycling Facility", 
    "State Environmental License"
  ];

  const timeline = [
    {
      year: "2017",
      title: "Company Founded",
      description: "Started with a vision to revolutionize oil recycling in our region"
    },
    {
      year: "2019", 
      title: "Facility Expansion",
      description: "Expanded processing capacity and upgraded to advanced recycling technology"
    },
    {
      year: "2024",
      title: "ISO Certification",
      description: "Achieved ISO 14001 certification for environmental management systems"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              About GS Lubricant
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Leading the Future of 
              <span className="text-primary block mt-2">Sustainable Oil Recycling</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              For over 7 years, we've been transforming waste oil into valuable resources, 
              protecting the environment while serving businesses across the region with 
              reliable, certified recycling solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  To provide innovative, sustainable oil recycling solutions that protect the 
                  environment while creating value for our customers and communities. We are 
                  committed to excellence in everything we do.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">Environmental protection and sustainability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">Innovation in recycling technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">Exceptional customer service</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-secondary/20 p-3 rounded-lg">
                    <Globe className="h-8 w-8 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  To be the regional leader in sustainable oil recycling, setting the standard 
                  for environmental responsibility and operational excellence while contributing 
                  to a circular economy.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">Zero waste to landfill operations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">Continuous technological advancement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">Community environmental leadership</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* From Manager's Desk */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                From Manager's Desk
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                A Message from Our Leadership
              </h2>
            </div>
            
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="p-8 lg:p-12">
                <blockquote className="text-lg text-muted-foreground leading-relaxed italic mb-8">
                  "At GS Lubricants, we believe that environmental responsibility and business success go hand in hand.
                  Our commitment to sustainable oil recycling isn't just about compliance—it's about creating a legacy 
                  for future generations. Every gallon of oil we process represents our dedication to turning waste into 
                  valuable resources while protecting our planet. We're proud to partner with businesses who share our 
                  vision of a more sustainable future."
                </blockquote>
                <div className="flex items-center space-x-2 text-primary">
                  <div className="w-12 h-0.5 bg-primary"></div>
                  <span className="font-semibold">Muna Pani, General Manager</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Core Values
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              What Drives Our Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our values guide every decision we make and every service we provide, 
              ensuring we deliver on our commitment to sustainability and excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-background border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-muted p-4 rounded-lg w-fit mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Journey
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              7+ Years of Environmental Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to industry leadership, our story is one of continuous 
              innovation and unwavering commitment to environmental sustainability.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold">
                      {item.year}
                    </div>
                  </div>
                  <Card className="flex-1 bg-gradient-card border-0 shadow-soft">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Certifications & Licenses
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Trusted & Certified Operations
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our facility maintains the highest industry certifications and regulatory 
                compliance, ensuring safe, legal, and environmentally responsible operations.
              </p>
              
              <div className="space-y-4 mb-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{cert}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="bg-primary/20 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <Building className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Modern Processing Infrastructure</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our facility features advanced recycling technology, 
                    environmental monitoring systems, and comprehensive safety protocols.
                  </p>
                  <div className="flex justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Monitoring</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of businesses who trust us with their oil recycling needs. 
              Let's build a more sustainable future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/products">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;