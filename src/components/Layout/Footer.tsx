import { Link } from "react-router-dom";
import { Recycle, Phone, Mail, MapPin, Clock, Shield, ExternalLink } from "lucide-react";
import { getSensitiveInfo, isPrivacyModeActive } from "@/lib/privacy";

const Footer = () => {
  const sensitiveInfo = getSensitiveInfo();
  
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
                <p className="text-sm text-primary-foreground/70">{sensitiveInfo.companyFullName}</p>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Leading the way in sustainable oil recycling with advanced technology and 
              environmental responsibility for a cleaner future.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-success" />
                <span className="text-primary-foreground/80">ISO 14001 Certified</span>
              </div>
              {sensitiveInfo.gstin && (
                <a 
                  href="https://services.gst.gov.in/services/searchtp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  GSTIN: {sensitiveInfo.gstin}
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
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
                  <p>{sensitiveInfo.addressLine1}</p>
                  {sensitiveInfo.addressLine2 && <p>{sensitiveInfo.addressLine2}</p>}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">{sensitiveInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">{sensitiveInfo.email}</span>
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
            <div className="flex items-center gap-2">
              <p className="text-sm text-primary-foreground/60">
                © 2024 GS Lubricants. All rights reserved.
              </p>
              {isPrivacyModeActive() && (
                <span className="text-xs text-primary-foreground/40 bg-primary-foreground/10 px-2 py-1 rounded">
                  Privacy Mode Active
                </span>
              )}
            </div>
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