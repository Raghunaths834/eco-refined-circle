import { ArrowLeft, Shield, Lock, Eye, Database, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/Layout/PageTransition";

const Privacy = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <Link to="/">
              <Button variant="ghost" className="mb-6 text-primary-foreground hover:text-primary-foreground/80">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-10 w-10" />
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-lg text-primary-foreground/90">
              Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-8">
              
              {/* Introduction */}
              <div className="bg-card p-6 rounded-lg border">
                <p className="text-foreground">
                  M/S Gouri Shankar Lubricants ("GS Lubricants," "we," "us," or "our") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                  website and use our services related to lubricant manufacturing, oil recycling, and waste oil management.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Database className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">Information We Collect</h2>
                </div>
                <div className="bg-card p-6 rounded-lg border space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Personal Information</h3>
                    <p className="text-muted-foreground">
                      When you contact us or request our services, we may collect:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Company name and business details</li>
                      <li>Service requirements and volume needs</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Business Information</h3>
                    <p className="text-muted-foreground">
                      For our B2B services, we may collect business-related information including GST details, 
                      waste oil volumes, collection schedules, and operational requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>IP address and device information</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referring website addresses</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">How We Use Your Information</h2>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground mb-3">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Provide and maintain our oil recycling and lubricant services</li>
                    <li>Process your service requests and inquiries</li>
                    <li>Schedule waste oil collection and deliveries</li>
                    <li>Send you service updates and important notifications</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Maintain safety and environmental compliance records</li>
                    <li>Send marketing communications (with your consent)</li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">Information Sharing and Disclosure</h2>
                </div>
                <div className="bg-card p-6 rounded-lg border space-y-4">
                  <p className="text-muted-foreground">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations (logistics, IT services)</li>
                    <li><strong>Regulatory Authorities:</strong> When required by law or to comply with environmental regulations</li>
                    <li><strong>Business Partners:</strong> With your consent, for collaborative service delivery</li>
                    <li><strong>Legal Requirements:</strong> To protect our rights, comply with legal processes, or respond to government requests</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">Data Security</h2>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                    the Internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Data Retention</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                    comply with legal obligations, resolve disputes, and enforce our agreements. Business records related to oil 
                    collection and recycling may be retained longer to meet regulatory requirements.
                  </p>
                </div>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground mb-3">You have the right to:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Access and receive a copy of your personal information</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information (subject to legal requirements)</li>
                    <li>Withdraw consent for marketing communications</li>
                    <li>Object to processing of your personal information</li>
                  </ul>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Cookies and Tracking</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    Our website may use cookies and similar tracking technologies to enhance user experience. You can control 
                    cookies through your browser settings. Refusing cookies may limit website functionality.
                  </p>
                </div>
              </div>

              {/* Third-Party Links */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Third-Party Links</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                    of these external sites. We encourage you to review their privacy policies.
                  </p>
                </div>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Children's Privacy</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    Our services are not directed to individuals under 18 years of age. We do not knowingly collect 
                    personal information from children.
                  </p>
                </div>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Changes to This Privacy Policy</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy periodically. We will notify you of any changes by posting the new 
                    Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">Contact Us</h2>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground mb-3">
                    If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>M/S Gouri Shankar Lubricants</strong></p>
                    <p>Plot No. 3936, Gurujang Village</p>
                    <p>Talcher Sadar, Anugul, Odisha, India, 759100</p>
                    <p>Phone: +917008262039</p>
                    <p>Email: info@gslubricants.com</p>
                    <p>GSTIN: 21AAJFG6323M1ZE</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Privacy;
