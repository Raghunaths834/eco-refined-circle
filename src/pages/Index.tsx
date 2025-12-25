import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO/SEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { 
  Recycle, 
  Leaf, 
  Shield, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  Factory,
  Users,
  Globe,
  Mail,
  Gauge
} from "lucide-react";
import oilRecyclingBg from "@/assets/oil-recycling-equipment.jpg";

const Index = () => {
  const features = [
    {
      icon: <Recycle className="h-8 w-8 text-primary" />,
      title: "Advanced Recycling",
      description: "State-of-the-art technology for processing used oil into high-quality recycled products."
    },
    {
      icon: <Leaf className="h-8 w-8 text-eco-green" />,
      title: "Environmental Impact",
      description: "Reducing waste and pollution while conserving natural resources for future generations."
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Certified Quality",
      description: "ISO 14001 certified processes ensuring highest quality and environmental standards."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Industry Leader",
      description: "Over 7 years of experience in sustainable oil recycling and waste management."
    }
  ];

  const stats = [
    { number: "1M+", label: "Gallons Recycled", icon: <Factory className="h-6 w-6" /> },
    { number: "600", label: "Tons/Year Authorized Oil Recycling", icon: <Gauge className="h-6 w-6" /> },
    { number: "100%", label: "Regulatory Compliance", icon: <Shield className="h-6 w-6" /> },
    { number: "98%", label: "Recovery Rate", icon: <Recycle className="h-6 w-6" /> },
    { number: "7+", label: "Years Experience", icon: <Globe className="h-6 w-6" /> }
  ];

  const benefits = [
    "Reduce environmental pollution and waste",
    "Cost-effective oil management solutions", 
    "Full compliance with environmental regulations",
    "Sustainable circular economy practices",
    "Professional collection and processing services"
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is waste oil recycling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Waste oil recycling is the process of collecting used oil from automotive and industrial sources and transforming it into high-quality base oils through advanced refining and purification processes."
        }
      },
      {
        "@type": "Question",
        "name": "What types of oil can be recycled?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recycle various types of used oils including motor oil, industrial lubricants, hydraulic fluids, gear oils, and transformer oils. Our facility is authorized to process 600 tons per year of waste oil."
        }
      },
      {
        "@type": "Question",
        "name": "Is recycled oil safe and high quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our recycled base oils meet API Group II standards and undergo rigorous quality testing. We maintain a 98% recovery rate and achieve industry-leading quality through our ISO 14001 certified processes."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Professional Waste Oil Recycling & Base Oil Manufacturing"
        description="Leading waste oil recycling facility in Ahmedabad. We transform used lubricants into high-quality base oils through sustainable refining processes. ISO certified, eco-friendly solutions."
        keywords="waste oil recycling, base oil manufacturing, lubricant refining, oil recycling Ahmedabad, sustainable oil processing, automotive oil recycling, industrial lubricants"
        canonical="https://www.gslubricants.com/"
        schemaData={faqSchema}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-hero-animated bg-gradient-animated animate-gradient-wave overflow-hidden">
        <div className="absolute inset-0 bg-black/60" />
        <img 
          src={oilRecyclingBg}
          alt="Modern waste oil recycling equipment and facility in Ahmedabad"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-foreground border-primary/30 animate-fade-in">
              <Award className="h-4 w-4 mr-2" />
              Sustainable Oil Recycling for a Cleaner Future
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in [animation-delay:200ms]">
              Transforming Waste Oil Into
              <span className="text-accent block mt-2">Valuable Resources</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in [animation-delay:400ms]">
              Trusted partner in lubricant manufacturing and authorized oil recycling. 
              We provide businesses with high-quality products while promoting sustainability and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:600ms]">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in hover-scale" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-center mb-3">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="outline" className="mb-4">
                Environmental Benefits
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Making a Positive Impact on Our Planet
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our advanced oil recycling processes help businesses reduce their environmental 
                footprint while creating valuable resources from waste materials.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-primary hover:bg-primary/90 hover-scale" asChild>
                <Link to="/about">
                  Learn More About Our Process
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="space-y-6 animate-fade-in [animation-delay:300ms]">
              <Card className="bg-gradient-card border-0 shadow-soft hover-scale transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-success/20 p-3 rounded-lg">
                      <Recycle className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Circular Economy</h3>
                      <p className="text-sm text-muted-foreground">Sustainable waste-to-resource solutions</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Converting waste oil into valuable products, reducing the need for virgin materials 
                    and supporting a circular economy model.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft hover-scale transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Compliance & Safety</h3>
                      <p className="text-sm text-muted-foreground">Full regulatory compliance guaranteed</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Our certified processes ensure complete compliance with environmental regulations 
                    while maintaining the highest safety standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Make a Sustainable Choice?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a free consultation and learn how we can help your business 
              implement sustainable oil recycling solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:300ms]">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground hover-scale" asChild>
                <Link to="/contact#phone-section">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Us
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover-scale" asChild>
                <Link to="/products">View Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;