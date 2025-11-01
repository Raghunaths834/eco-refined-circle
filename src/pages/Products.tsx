import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Fuel, 
  Wrench, 
  Zap, 
  Droplets,
  CheckCircle,
  ArrowRight,
  Recycle,
  Factory,
  Truck,
  FlaskConical,
  Eye
} from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: <Fuel className="h-8 w-8 text-primary" />,
      title: "Re-refined Base Oil",
      grade: "Premium Quality",
      description: "High-quality base oil suitable for automotive and industrial applications, meeting all industry specifications.",
      specifications: [
        "API Group II standards",
        "SAE viscosity grades",
        "Low sulfur content",
        "High oxidation stability"
      ],
      applications: [
        "Motor oil blending",
        "Industrial lubricants", 
        "Hydraulic fluids",
        "Gear oils"
      ]
    },
    {
      icon: <Wrench className="h-8 w-8 text-secondary" />,
      title: "Industrial Lubricants",
      grade: "Commercial Grade",
      description: "Specially formulated lubricants for industrial machinery and equipment applications.",
      specifications: [
        "ISO VG 32-680",
        "Anti-wear properties",
        "Corrosion protection",
        "Extended service life"
      ],
      applications: [
        "Manufacturing equipment",
        "Construction machinery",
        "Mining operations",
        "Marine applications"
      ]
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Biofuel Products",
      grade: "Renewable Energy", 
      description: "Clean-burning biofuel produced from recycled oil waste, supporting renewable energy initiatives.",
      specifications: [
        "ASTM D6751 compliant",
        "Low carbon footprint",
        "Reduced emissions",
        "Biodegradable formula"
      ],
      applications: [
        "Heating systems",
        "Power generation",
        "Industrial boilers",
        "Marine fuel"
      ]
    },
    {
      icon: <Droplets className="h-8 w-8 text-eco-green" />,
      title: "Specialty Fluids",
      grade: "Custom Solutions",
      description: "Custom-formulated specialty fluids for specific industrial and commercial applications.",
      specifications: [
        "Custom viscosity profiles",
        "Temperature stability",
        "Chemical compatibility",
        "Performance additives"
      ],
      applications: [
        "Transformer oil",
        "Metalworking fluids",
        "Process oils",
        "Specialty applications"
      ]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Collection",
      description: "Professional collection of used oil from customer facilities using specialized equipment.",
      icon: <Truck className="h-6 w-6" />
    },
    {
      step: "2", 
      title: "Filtering",
      description: "Initial filtration removes large contaminants and debris from the waste oil.",
      icon: <Factory className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Distillation", 
      description: "Advanced distillation process separates oil components at precise temperatures.",
      icon: <Factory className="h-6 w-6" />
    },
    {
      step: "4",
      title: "Purification",
      description: "Final purification removes remaining impurities to achieve premium quality.",
      icon: <Factory className="h-6 w-6" />
    },
    {
      step: "5",
      title: "Quality Testing",
      description: "Comprehensive laboratory testing ensures products meet all specifications.",
      icon: <FlaskConical className="h-6 w-6" />
    },
    {
      step: "6",
      title: "Distribution",
      description: "Finished products are packaged and distributed to customers nationwide.",
      icon: <Truck className="h-6 w-6" />
    }
  ];

  const services = [
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Collection Services",
      description: "Professional collection of used oil from your facility with certified transportation."
    },
    {
      icon: <Factory className="h-6 w-6 text-secondary" />,
      title: "Processing & Refining",
      description: "Efficient processing using proven technology to deliver reliable, quality results."
    },
    {
      icon: <FlaskConical className="h-6 w-6 text-accent" />,
      title: "Quality Testing",
      description: "Comprehensive laboratory testing to ensure all products meet strict quality standards."
    },
    {
      icon: <Recycle className="h-6 w-6 text-eco-green" />,
      title: "Waste Management",
      description: "Complete waste oil management solutions with full compliance and documentation."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Our Products & Services
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Quality Recycled Oil 
              <span className="text-primary block mt-2">Products & Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From high-grade base oils to specialized industrial lubricants, we transform 
              waste oil into valuable products that meet the highest industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Products & Services Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Premium Products & Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Complete Oil Recycling Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our comprehensive range of recycled oil products and end-to-end services
              that meet the highest industry standards.
            </p>
          </div>

          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="products" className="text-base">Oil Products</TabsTrigger>
              <TabsTrigger value="services" className="text-base">Our Services</TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {products.map((product, index) => (
                  <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-muted p-3 rounded-lg">
                          {product.icon}
                        </div>
                        <Badge variant="secondary">{product.grade}</Badge>
                      </div>
                      <CardTitle className="text-2xl text-foreground">{product.title}</CardTitle>
                      <p className="text-muted-foreground">{product.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
                          <div className="space-y-2">
                            {product.specifications.map((spec, specIndex) => (
                              <div key={specIndex} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Applications</h4>
                          <div className="space-y-2">
                            {product.applications.map((app, appIndex) => (
                              <div key={appIndex} className="flex items-center space-x-2">
                                <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{app}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Process Overview */}
              <div className="mt-16">
                <div className="text-center mb-16">
                  <Badge variant="outline" className="mb-4">
                    Our Process
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    From Waste Oil to Premium Products
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Our comprehensive recycling process transforms waste oil into high-quality 
                    products through advanced technology and rigorous quality control.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {processSteps.map((step, index) => (
                    <Card key={index} className="bg-background border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                            {step.step}
                          </div>
                          <div className="bg-muted p-3 rounded-lg text-primary">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="services" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="bg-muted p-4 rounded-lg w-fit mx-auto mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <div className="bg-gradient-card rounded-2xl p-8 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Complete Service Integration
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Our services work seamlessly together to provide you with a complete 
                    oil recycling solution from collection to final product delivery.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Badge variant="outline" className="text-sm px-4 py-2">24/7 Collection</Badge>
                    <Badge variant="outline" className="text-sm px-4 py-2">Real-time Tracking</Badge>
                    <Badge variant="outline" className="text-sm px-4 py-2">Quality Certification</Badge>
                    <Badge variant="outline" className="text-sm px-4 py-2">Custom Solutions</Badge>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Quality Assurance
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Rigorous Testing & Quality Control
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every product undergoes comprehensive testing in our certified laboratory 
                to ensure it meets or exceeds industry standards and customer specifications.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">ASTM and API standard compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Multi-stage quality testing process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Certified laboratory analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">Continuous improvement protocols</span>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/contact">
                  Request Product Samples
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground mb-4">Recovery Rate</div>
                    <p className="text-muted-foreground text-sm">
                      Industry-leading recovery rate through advanced processing technology
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">100+</div>
                    <div className="text-sm text-muted-foreground mb-4">Quality Tests</div>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive testing protocol ensuring consistent product quality
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground mb-4">Quality Monitoring</div>
                    <p className="text-muted-foreground text-sm">
                      Continuous monitoring systems ensure consistent product excellence
                    </p>
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
              Need Custom Oil Products?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our technical team can develop custom formulations to meet your specific 
              application requirements. Contact us to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link to="/contact">Get Custom Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/gallery">View Our Facility</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;