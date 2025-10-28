import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  Truck,
  Building,
  Users,
  AlertCircle
} from "lucide-react";

// Validation schema for contact form
const contactSchema = z.object({
  firstName: z.string()
    .trim()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Invalid characters in first name"),
  lastName: z.string()
    .trim()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Invalid characters in last name"),
  company: z.string()
    .trim()
    .min(1, "Company name is required")
    .max(100, "Company name must be less than 100 characters"),
  email: z.string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .trim()
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[+\d\s()-]*$/, "Invalid phone number format")
    .optional()
    .or(z.literal('')),
  service: z.string().max(50).optional().or(z.literal('')),
  volume: z.string().max(50).optional().or(z.literal('')),
  message: z.string()
    .trim()
    .max(2000, "Message must be less than 2000 characters")
    .optional()
    .or(z.literal(''))
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    volume: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data with Zod schema
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      toast({
        title: "Validation Error",
        description: validation.error.errors[0].message,
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const validatedData = validation.data;
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          first_name: validatedData.firstName,
          last_name: validatedData.lastName,
          company: validatedData.company,
          email: validatedData.email,
          phone: validatedData.phone || null,
          service: validatedData.service || null,
          volume: validatedData.volume || null,
          message: validatedData.message || null
        });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        volume: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: ["+918908094205"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="h-6 w-6 text-secondary" />,
      title: "Email", 
      details: ["gslubricantsodisha@gmail.com"],
      description: "Send us a message anytime"
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Address",
      details: ["Plot No. 3936, Gurujang Village", "Talcher Sadar, Anugul, Odisha, India, 759100"],
      description: "Visit our facility"
    },
    {
      icon: <Clock className="h-6 w-6 text-eco-green" />,
      title: "Business Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      description: "Emergency services available 24/7"
    }
  ];

  const services = [
    { icon: <Truck className="h-5 w-5" />, name: "Used Oil Collection" },
    { icon: <Building className="h-5 w-5" />, name: "Facility Services" },
    { icon: <Users className="h-5 w-5" />, name: "Consulting Services" },
    { icon: <AlertCircle className="h-5 w-5" />, name: "Emergency Response" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Contact Us
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get in Touch 
              <span className="text-primary block mt-2">Let's Start the Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to implement sustainable oil recycling solutions? Our team is here to help 
              you find the perfect solution for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="phone-section" className="py-16 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="bg-muted p-4 rounded-lg w-fit mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-foreground font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Badge variant="outline" className="mb-4">
                Send Us a Message
              </Badge>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Get Your Free Quote Today
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours 
                with a customized solution for your oil recycling needs.
              </p>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          className="bg-background"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Smith" 
                          className="bg-background"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input 
                        id="company" 
                        placeholder="Your Company Name" 
                        className="bg-background"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@company.com" 
                          className="bg-background"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+1 (555) 123-4567" 
                          className="bg-background"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="collection">Used Oil Collection</SelectItem>
                          <SelectItem value="processing">Oil Processing Services</SelectItem>
                          <SelectItem value="consulting">Environmental Consulting</SelectItem>
                          <SelectItem value="emergency">Emergency Response</SelectItem>
                          <SelectItem value="custom">Custom Solution</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="volume">Estimated Monthly Oil Volume</Label>
                      <Select value={formData.volume} onValueChange={(value) => handleInputChange("volume", value)}>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select volume range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Less than 100 gallons</SelectItem>
                          <SelectItem value="medium">100 - 500 gallons</SelectItem>
                          <SelectItem value="large">500 - 1,000 gallons</SelectItem>
                          <SelectItem value="enterprise">1,000+ gallons</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your specific needs and requirements..."
                        className="bg-background min-h-[120px]"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="mb-4">
                  Find Us
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Visit Our Facility
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our state-of-the-art facility is open for tours by appointment. 
                  Come see our advanced recycling technology in action.
                </p>
              </div>

              {/* Google Map */}
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-0">
                  <div className="w-full h-80 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.8!2d85.2269!3d20.9506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU3JzAyLjIiTiA4NcKwMTMnMzYuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="GS Lubricants Location"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Services Quick List */}
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>Our Services</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="bg-muted p-2 rounded-lg text-primary">
                          {service.icon}
                        </div>
                        <span className="text-sm text-foreground">{service.name}</span>
                      </div>
                    ))}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90">
              Join hundreds of businesses who trust us with their oil recycling needs. 
              Contact us today for a free consultation and custom quote.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;