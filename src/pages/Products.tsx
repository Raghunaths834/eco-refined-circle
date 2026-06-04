import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO/SEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import CountUp from "@/components/CountUp";
import { useInView } from "@/hooks/use-in-view";
import {
  Fuel,
  Wrench,
  Droplets,
  Recycle,
  CheckCircle,
  ArrowRight,
  Factory,
  Truck,
  FlaskConical,
  Barrel,
  Building2,
} from "lucide-react";

const WordReveal = ({ text, className = "" }: { text: string; className?: string }) => {
  const { ref, inView } = useInView<HTMLHeadingElement>();
  const words = text.split(" ");
  return (
    <h2
      ref={ref}
      className={`word-reveal ${inView ? "is-visible" : ""} ${className}`}
    >
      {words.map((w, i) => (
        <span key={i} style={{ transitionDelay: `${i * 80}ms` }}>
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </h2>
  );
};

const RevealCard = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal-up ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Products = () => {
  const products = [
    {
      icon: <Fuel className="h-9 w-9 text-primary" />,
      title: "Re-refined Base Oil",
      grade: "Premium Quality",
      badgeClass: "bg-eco-green/15 text-eco-green border border-eco-green/30",
      description:
        "BIS-compliant re-refined base oil produced from 1,000+ barrels of used oil per month, meeting Group I standards for automotive and industrial applications.",
      specifications: [
        "BIS IS 18722 compliant",
        "Group I base oil",
        "SAE viscosity grades",
        "Low sulfur content",
        "High oxidation stability",
      ],
      applications: [
        "Motor oil blending",
        "Industrial lubricants",
        "Hydraulic fluids",
        "Gear oils",
      ],
    },
    {
      icon: <Wrench className="h-9 w-9 text-secondary" />,
      title: "Industrial Lubricants",
      grade: "BIS Certified",
      badgeClass: "bg-secondary/10 text-secondary border border-secondary/30",
      description:
        "Re-refined lubricants for heavy industry, mining, and construction machinery. Formulated across ISO VG grades for anti-wear and corrosion protection.",
      specifications: [
        "ISO VG 32–680",
        "Anti-wear properties",
        "Corrosion protection",
        "Extended service life",
      ],
      applications: [
        "Mining equipment",
        "Construction machinery",
        "Manufacturing units",
        "Marine applications",
      ],
    },
    {
      icon: <Recycle className="h-9 w-9 text-accent" />,
      title: "Recovered Fullers Earth",
      grade: "Circular Economy",
      badgeClass: "bg-accent/15 text-accent-foreground border border-accent/40",
      description:
        "Activated clay recovered from our re-refining process, sold as an industrial material. A core part of our zero-waste circular production model.",
      specifications: [
        "Recovered activated clay",
        "High-volume monthly output",
        "Monetized byproduct",
        "Zero-waste process residue",
      ],
      applications: [
        "Industrial absorbents",
        "Soil conditioning",
        "Construction fill",
        "Recycled materials market",
      ],
    },
    {
      icon: <Droplets className="h-9 w-9 text-eco-green" />,
      title: "Specialty Lubricant Grades",
      grade: "Custom Solutions",
      badgeClass: "bg-primary/10 text-primary border border-primary/30",
      description:
        "Custom-formulated lubricant grades including hydraulic oils, gear oils, and transformer oils, developed to specific viscosity specifications for B2B industrial buyers.",
      specifications: [
        "Custom viscosity profiles",
        "Temperature stability",
        "Chemical compatibility",
        "Performance additives",
      ],
      applications: [
        "Transformer oil",
        "Metalworking fluids",
        "Process oils",
        "B2B bulk industrial supply",
      ],
    },
  ];

  const stats = [
    {
      icon: <Barrel className="h-5 w-5 text-eco-green" />,
      end: 1000,
      suffix: "+",
      label: "Barrels Processed Monthly",
    },
    {
      icon: <Recycle className="h-5 w-5 text-eco-green" />,
      end: 70,
      suffix: "%",
      label: "Material Recovery Rate",
    },
    {
      icon: <Building2 className="h-5 w-5 text-eco-green" />,
      end: 50,
      suffix: "+",
      label: "Industrial Clients across Odisha & Kolkata",
    },
  ];

  const processSteps = [
    { step: "1", title: "Collection", description: "Professional collection of used oil from customer facilities using specialized equipment.", icon: <Truck className="h-6 w-6" /> },
    { step: "2", title: "Filtering", description: "Initial filtration removes large contaminants and debris from the waste oil.", icon: <Factory className="h-6 w-6" /> },
    { step: "3", title: "Distillation", description: "Advanced distillation process separates oil components at precise temperatures.", icon: <Factory className="h-6 w-6" /> },
    { step: "4", title: "Purification", description: "Final purification removes remaining impurities to achieve premium quality.", icon: <Factory className="h-6 w-6" /> },
    { step: "5", title: "Quality Testing", description: "Comprehensive laboratory testing ensures products meet all specifications.", icon: <FlaskConical className="h-6 w-6" /> },
    { step: "6", title: "Distribution", description: "Finished products are packaged and distributed to customers nationwide.", icon: <Truck className="h-6 w-6" /> },
  ];

  const services = [
    { icon: <Truck className="h-6 w-6 text-primary" />, title: "Collection Services", description: "Professional collection of used oil from your facility with certified transportation." },
    { icon: <Factory className="h-6 w-6 text-secondary" />, title: "Processing & Refining", description: "Efficient processing using proven technology to deliver reliable, quality results." },
    { icon: <FlaskConical className="h-6 w-6 text-accent" />, title: "Quality Testing", description: "Comprehensive laboratory testing to ensure all products meet strict quality standards." },
    { icon: <Recycle className="h-6 w-6 text-eco-green" />, title: "Waste Management", description: "Complete waste oil management solutions with full compliance and documentation." },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "Product",
      position: index + 1,
      name: product.title,
      description: product.description,
      brand: { "@type": "Brand", name: "GS Lubricants" },
      offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "INR" },
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Recycled Oil Products & Services - Base Oils, Industrial Lubricants"
        description="Premium recycled oil products including re-refined base oils, industrial lubricants, recovered fullers earth, and specialty fluids. BIS-compliant processing, 70% recovery rate."
        keywords="recycled base oil, re-refined oil, industrial lubricants, fullers earth, specialty fluids, BIS certified oil, sustainable lubricants"
        canonical="https://www.gslubricants.com/products"
        schemaData={productSchema}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">Our Products & Services</Badge>
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

      {/* Products & Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Premium Products & Services</Badge>
            <WordReveal
              text="Complete Oil Recycling Solutions"
              className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
            />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of recycled oil products and end-to-end services
              that meet the highest industry standards.
            </p>
          </div>

          {/* Animated Stat Strip */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-14">
            {stats.map((s, i) => (
              <RevealCard key={i} delay={i * 200}>
                <div className="stat-pill rounded-full px-5 md:px-6 py-3 flex items-center gap-3 text-white">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-eco-green/15">
                    {s.icon}
                  </span>
                  <span className="font-bold text-lg md:text-xl">
                    <CountUp end={s.end} suffix={s.suffix} />
                  </span>
                  <span className="text-sm md:text-base text-white/80">{s.label}</span>
                </div>
              </RevealCard>
            ))}
          </div>

          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="products" className="text-base">Oil Products</TabsTrigger>
              <TabsTrigger value="services" className="text-base">Our Services</TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {products.map((product, index) => (
                  <RevealCard key={index} delay={index * 150}>
                    <Card className="product-card group bg-gradient-card border border-border/50 shadow-soft hover:shadow-strong h-full">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-4 rounded-xl bg-gradient-to-br from-eco-green/20 via-primary/10 to-transparent transition-transform duration-300 group-hover:scale-110">
                            {product.icon}
                          </div>
                          <span className={`text-xs font-semibold rounded-full px-3 py-1 ${product.badgeClass}`}>
                            {product.grade}
                          </span>
                        </div>
                        <CardTitle className="text-2xl text-foreground">{product.title}</CardTitle>
                        <p className="text-muted-foreground">{product.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
                            <div className="space-y-2">
                              {product.specifications.map((spec, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                  <span className="text-sm text-muted-foreground leading-snug">{spec}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Applications</h4>
                            <div className="space-y-2">
                              {product.applications.map((app, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 transition-transform duration-300 group-hover:translate-x-[3px]" />
                                  <span className="text-sm text-muted-foreground">{app}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-6">
                          <Button
                            asChild
                            className="bg-eco-green hover:bg-eco-green/90 text-white group/btn"
                          >
                            <Link to="/contact">
                              Request a Sample
                              <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </RevealCard>
                ))}
              </div>

              {/* Process */}
              <div className="mt-16">
                <div className="text-center mb-16">
                  <Badge variant="outline" className="mb-4">Our Process</Badge>
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
                          <div className="bg-muted p-3 rounded-lg text-primary">{step.icon}</div>
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
                      <div className="bg-muted p-4 rounded-lg w-fit mx-auto mb-4">{service.icon}</div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="bg-gradient-card rounded-2xl p-8 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Complete Service Integration</h3>
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
              <Badge variant="outline" className="mb-4">Quality Assurance</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Rigorous Testing & Quality Control
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every product undergoes comprehensive testing in our certified laboratory
                to ensure it meets or exceeds industry standards and customer specifications.
              </p>

              <div className="space-y-4 mb-8">
                {["ASTM and API standard compliance", "Multi-stage quality testing process", "Certified laboratory analysis", "Continuous improvement protocols"].map((t) => (
                  <div key={t} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-foreground">{t}</span>
                  </div>
                ))}
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
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">70%</div>
                  <div className="text-sm text-muted-foreground mb-4">Recovery Rate</div>
                  <p className="text-muted-foreground text-sm">
                    Industry-leading recovery rate through advanced processing technology
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground mb-4">Quality Tests</div>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive testing protocol ensuring consistent product quality
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground mb-4">Quality Monitoring</div>
                  <p className="text-muted-foreground text-sm">
                    Continuous monitoring systems ensure consistent product excellence
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Need Custom Oil Products?</h2>
            <p className="text-xl text-white/90 mb-8">
              Our technical team can develop custom formulations to meet your specific
              application requirements. Contact us to discuss your needs.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link to="/contact">Get Custom Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
