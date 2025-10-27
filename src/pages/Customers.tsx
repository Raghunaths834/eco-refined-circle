import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Star, 
  Quote, 
  Building, 
  Truck, 
  Factory,
  ArrowRight,
  Users,
  Award,
  CheckCircle
} from "lucide-react";

const Customers = () => {
  const testimonials = [
    {
      name: "Chandra Shekhar Behera",
      title: "EHS Manager",
      company: "Steel Authority of India Limited - Rourkela",
      rating: 5,
      image: "CB",
      testimonial: "GS Lubricant has been our trusted partner for over 5 years. Their reliable collection service and quality recycled products have helped us achieve our sustainability goals while reducing costs.",
      industry: "Manufacturing"
    },
    {
      name: "Rajesh Kumar Sharma",
      title: "Fleet Operations Manager", 
      company: "SAIZAR Enterprise Pvt. Ltd.",
      rating: 5,
      image: "RK",
      testimonial: "The team's professionalism and attention to detail is outstanding. They handle all our used oil disposal needs efficiently, and their documentation helps us maintain full compliance.",
      industry: "Transportation"
    },
    {
      name: "Priyanka Mishra",
      title: "Facility Manager",
      company: "Formonik Technology Pvt. Ltd.",
      rating: 5,
      image: "PM",
      testimonial: "Working with GS Lubricant has been a game-changer. Their custom collection schedule fits our operations perfectly, and the quality of their recycled products is exceptional.",
      industry: "Industrial"
    },
    {
      name: "Anil Das",
      title: "Operations Manager",
      company: "Tata Motors - Kolkata Division",
      rating: 5,
      image: "AD",
      testimonial: "Their commitment to environmental responsibility aligns perfectly with our values. The team provides excellent service and their recycled oils perform as well as virgin products.",
      industry: "Automotive"
    },
    {
      name: "Susmita Samal",
      title: "Deputy Director",
      company: "Paradip Port Trust",
      rating: 5,
      image: "SS",
      testimonial: "GS Lubricant helped us implement a comprehensive waste oil management program. Their expertise and reliable service have been invaluable to our environmental initiatives.",
      industry: "Marine"
    },
    {
      name: "Saroj Panda",
      title: "Environment Manager",
      company: "Beekay Steel Industries Limited",
      rating: 5,
      image: "SP",
      testimonial: "The consistency and quality of their service is remarkable. They've never missed a pickup, and their recycled lubricants have exceeded our performance expectations.",
      industry: "Manufacturing"
    }
  ];

  const industries = [
    {
      icon: <Factory className="h-8 w-8 text-primary" />,
      name: "Manufacturing",
      description: "Industrial facilities, machinery maintenance, and production operations",
      clients: "150+"
    },
    {
      icon: <Truck className="h-8 w-8 text-secondary" />,
      name: "Transportation",
      description: "Fleet operations, logistics companies, and commercial vehicle services",
      clients: "75+"
    },
    {
      icon: <Building className="h-8 w-8 text-accent" />,
      name: "Commercial",
      description: "Office buildings, retail centers, and commercial property management",
      clients: "200+"
    },
    {
      icon: <Users className="h-8 w-8 text-eco-green" />,
      name: "Government",
      description: "Municipal facilities, public works, and government fleet operations",
      clients: "25+"
    }
  ];

  const benefits = [
    "Cost-effective waste oil management",
    "Full regulatory compliance support",
    "Flexible collection scheduling",
    "Detailed reporting and documentation",
    "Emergency response services",
    "Environmental impact reduction"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Customer Success Stories
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted by 
              <span className="text-primary block mt-2">500+ Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From small businesses to large corporations, our customers rely on us for 
              reliable, sustainable oil recycling solutions that deliver real results.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">99.8%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">7+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-green mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - HIDDEN (can be restored later) */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              What Our Customers Say
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Real Stories from Real Customers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say 
              about their experience working with GS Lubricant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-semibold text-lg">
                      {testimonial.image}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="h-6 w-6 text-muted absolute -top-2 -left-2" />
                    <p className="text-muted-foreground leading-relaxed pl-4">
                      {testimonial.testimonial}
                    </p>
                  </div>
                  
                  <Badge variant="outline" className="mt-4">
                    {testimonial.industry}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Industries Served */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Industries We Serve
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Specialized Solutions for Every Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We understand that different industries have unique needs. Our tailored 
              approach ensures optimal solutions for your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-background border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-muted p-4 rounded-lg w-fit mx-auto mb-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{industry.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{industry.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <Award className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">{industry.clients} Clients</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Customer Benefits
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Businesses Choose Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our comprehensive approach to oil recycling delivers tangible benefits 
                that help businesses achieve their operational and environmental goals.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/contact">
                  Become Our Next Success Story
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Partnership Approach</h3>
                  <p className="text-muted-foreground mb-4">
                    We don't just provide services – we build lasting partnerships. Our dedicated 
                    account managers work closely with each client to optimize their oil recycling programs.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Dedicated Account Management</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Compliance Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Our compliance experts ensure your operations meet all environmental regulations. 
                    We provide comprehensive documentation and reporting to keep you audit-ready.
                  </p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm font-medium text-foreground">100% Compliance Guaranteed</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Sustainable Impact</h3>
                  <p className="text-muted-foreground mb-4">
                    Every gallon of oil you recycle with us helps reduce environmental impact. 
                    We provide detailed sustainability reports showing your positive contribution.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-foreground">Sustainability Reporting</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Discover how GS Lubricant can help your business achieve its sustainability 
              goals while reducing costs and ensuring compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link to="/contact">Start Your Partnership</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customers;
