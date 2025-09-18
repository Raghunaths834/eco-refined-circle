import { Link } from "react-router-dom";
import { Recycle, Phone, Mail, MapPin, Clock, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-industrial-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-lg">
                <Recycle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">GS Lubricants</h3>
                <p className="text-sm text-primary-foreground/70">M/S Gouri Shankar Lubricants</p>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Leading the way in sustainable oil recycling with advanced technology and 
              environmental responsibility for a cleaner future.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="h-4 w-4 text-success" />
              <span className="text-primary-foreground/80">ISO 14001 Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Our Products
              </Link>
              <Link to="/customers" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Customer Stories
              </Link>
              <Link to="/gallery" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Gallery
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>• Used Oil Collection</li>
              <li>• Oil Recycling & Refining</li>
              <li>• Waste Oil Management</li>
              <li>• Environmental Consulting</li>
              <li>• Bulk Oil Processing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <p>123 Industrial Drive</p>
                  <p>Green Valley, ST 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">info@gslubricants.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60">
              © 2024 GS Lubricants. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;