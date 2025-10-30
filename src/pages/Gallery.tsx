import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Camera, 
  Play, 
  Factory,
  Truck,
  Users,
  ArrowRight,
  Eye,
  Download
} from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      type: "image",
      title: "Main Processing Facility",
      category: "Facility",
      description: "Our state-of-the-art oil recycling facility with advanced processing equipment.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: 2,
      type: "image", 
      title: "Collection Fleet",
      category: "Operations",
      description: "Our modern fleet of collection vehicles equipped with specialized tanks and safety equipment.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      featured: false
    },
    {
      id: 3,
      type: "image",
      title: "Quality Control Lab",
      category: "Quality",
      description: "Advanced laboratory facilities for comprehensive testing and quality assurance.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop",
      featured: false
    },
    {
      id: 4,
      type: "image",
      title: "Processing Equipment",
      category: "Technology",
      description: "High-tech distillation and purification systems that achieve 98% recovery rates.",
      image: "https://images.unsplash.com/photo-1565041816225-c832609b2d2b?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: 5,
      type: "image",
      title: "Environmental Controls",
      category: "Environment",
      description: "Advanced environmental monitoring and emission control systems.",
      image: "https://images.unsplash.com/photo-1574263867128-e9c4b999827c?w=800&h=600&fit=crop",
      featured: false
    },
    {
      id: 6,
      type: "image",
      title: "Team at Work", 
      category: "Team",
      description: "Our skilled technicians and operators ensuring safe and efficient operations.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
      featured: false
    },
    {
      id: 7,
      type: "image",
      title: "Before & After",
      category: "Process",
      description: "Visual comparison showing the transformation from waste oil to clean recycled product.",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: 8,
      type: "image",
      title: "Storage Facilities",
      category: "Infrastructure",
      description: "Secure storage tanks for both incoming waste oil and finished recycled products.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: galleryItems.length, active: true },
    { name: "Facility", count: galleryItems.filter(item => item.category === "Facility").length, active: false },
    { name: "Operations", count: galleryItems.filter(item => item.category === "Operations").length, active: false },
    { name: "Technology", count: galleryItems.filter(item => item.category === "Technology").length, active: false },
    { name: "Team", count: galleryItems.filter(item => item.category === "Team").length, active: false },
    { name: "Process", count: galleryItems.filter(item => item.category === "Process").length, active: false }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Gallery & Media
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              See Our 
              <span className="text-primary block mt-2">Operations in Action</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Take a behind-the-scenes look at our state-of-the-art facilities, advanced 
              technology, and the dedicated team that makes sustainable oil recycling possible.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                size="sm"
                className="flex items-center space-x-2"
              >
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <Card
                key={item.id}
                className={`bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 ${
                  item.featured ? "lg:col-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30">
                      <Eye className="h-4 w-4 mr-2" />
                      View Full Size
                    </Button>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-black/60 text-white border-0"
                  >
                    {item.category}
                  </Badge>
                  {item.type === "video" && (
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-primary p-2 rounded-full">
                        <Play className="h-4 w-4 text-primary-foreground" />
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Virtual Experience
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Experience Our Facility Virtually
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Can't visit in person? Take our virtual tour to see our advanced recycling 
                technology, quality control processes, and environmental safety measures up close.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Camera className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">360° facility walkthrough</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Play className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Interactive process demonstrations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Meet our expert team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Download className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Downloadable facility brochure</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  <Play className="h-4 w-4 mr-2" />
                  Start Virtual Tour
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">
                    Schedule Site Visit
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>  
                </Button>
              </div>
            </div>
            
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                    alt="Facility Overview"
                    className="w-full h-80 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button size="lg" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      <Play className="h-6 w-6 mr-2" />
                      Watch Facility Tour
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Facility Highlights</h3>
                  <p className="text-muted-foreground mb-4">
                    Get an inside look at our cutting-edge technology and see how we maintain 
                    the highest standards of quality and environmental responsibility.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-secondary">98%</div>
                      <div className="text-sm text-muted-foreground">Recovery Rate</div>
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
              See the Future of Oil Recycling
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience firsthand how we're revolutionizing oil recycling with advanced 
              technology and unwavering commitment to environmental sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link to="/contact">Schedule Facility Tour</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;