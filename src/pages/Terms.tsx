import { ArrowLeft, FileText, Scale, AlertTriangle, UserCheck, Package, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/Layout/PageTransition";
import SEO from "@/components/SEO/SEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";

const Terms = () => {
  return (
    <PageTransition>
      <SEO 
        title="Terms & Conditions - Service Agreement"
        description="Read GS Lubricants' terms and conditions. Understand our service agreements, policies, and guidelines for waste oil recycling services."
        keywords="terms and conditions, service agreement, oil recycling terms, business policies"
        canonical="https://www.gslubricants.com/terms"
      />
      <Breadcrumbs />
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
              <Scale className="h-10 w-10" />
              <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
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
                  Welcome to M/S Gouri Shankar Lubricants ("GS Lubricants," "we," "us," or "our"). These Terms of Service 
                  ("Terms") govern your use of our website and services related to lubricant manufacturing, oil recycling, 
                  and waste oil management. By accessing our website or using our services, you agree to be bound by these Terms.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">Acceptance of Terms</h2>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    By using our services, you confirm that you have read, understood, and agree to these Terms. If you do not 
                    agree with any part of these Terms, you must not use our services. We reserve the right to modify these 
                    Terms at any time, and continued use constitutes acceptance of the modified Terms.
                  </p>
                </div>
              </div>

              {/* Services Description */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Package className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">Services Description</h2>
                </div>
                <div className="bg-card p-6 rounded-lg border space-y-4">
                  <p className="text-muted-foreground">GS Lubricants provides the following services:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Used oil collection and transportation</li>
                    <li>Oil recycling and refining</li>
                    <li>Waste oil management and environmental consulting</li>
                    <li>Production and supply of recycled lubricants and base oils</li>
                    <li>Bulk oil processing services</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Service availability, specifications, and pricing are subject to change. We reserve the right to modify 
                    or discontinue services with reasonable notice.
                  </p>
                </div>
              </div>

              {/* Eligibility */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <UserCheck className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">Eligibility</h2>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    Our services are intended for businesses, industrial clients, and authorized representatives. You must be 
                    at least 18 years old and have the authority to enter into binding agreements on behalf of your organization. 
                    By using our services, you represent and warrant that you meet these eligibility requirements.
                  </p>
                </div>
              </div>

              {/* Service Agreement */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Service Agreement and Orders</h2>
                <div className="bg-card p-6 rounded-lg border space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Order Placement</h3>
                    <p className="text-muted-foreground">
                      Service requests submitted through our website or contact forms constitute an inquiry, not a binding order. 
                      Services are confirmed upon mutual agreement of terms, pricing, and scheduling.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Pricing and Payment</h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>All prices are subject to confirmation and may vary based on volume, location, and market conditions</li>
                      <li>Prices are exclusive of applicable taxes, GST, and transportation charges unless otherwise stated</li>
                      <li>Payment terms will be agreed upon in individual service contracts</li>
                      <li>We reserve the right to suspend services for non-payment</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Cancellation</h3>
                    <p className="text-muted-foreground">
                      Cancellation policies vary by service type and will be specified in individual agreements. Cancellations 
                      may be subject to fees for scheduled collections or deliveries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Waste Oil Collection */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">Waste Oil Collection Requirements</h2>
                </div>
                <div className="bg-card p-6 rounded-lg border space-y-4">
                  <p className="text-muted-foreground">Clients using our waste oil collection services must:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Store waste oil in appropriate containers meeting safety standards</li>
                    <li>Provide safe and accessible collection points</li>
                    <li>Ensure waste oil is not contaminated with prohibited substances</li>
                    <li>Comply with all applicable environmental and safety regulations</li>
                    <li>Maintain necessary permits and documentation for waste oil generation and disposal</li>
                    <li>Provide accurate information about oil type, volume, and contamination levels</li>
                  </ul>
                  <p className="text-muted-foreground">
                    We reserve the right to refuse collection of materials that do not meet safety or quality standards.
                  </p>
                </div>
              </div>

              {/* Quality Assurance */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Product Quality and Specifications</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    Our recycled lubricants and base oils meet industry standards and specifications. However, we recommend 
                    conducting your own suitability testing for specific applications. Products are sold "as is" with quality 
                    certifications provided. Any quality concerns must be reported within 7 days of delivery with supporting 
                    documentation and product samples.
                  </p>
                </div>
              </div>

              {/* Environmental Compliance */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Environmental Compliance</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    GS Lubricants operates in compliance with environmental regulations including ISO 14001 standards. Both 
                    parties agree to comply with all applicable environmental laws and regulations. Clients are responsible 
                    for maintaining proper documentation and permits for waste oil generation and handling.
                  </p>
                </div>
              </div>

              {/* Liability */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">Limitation of Liability</h2>
                </div>
                <div className="bg-card p-6 rounded-lg border space-y-4">
                  <p className="text-muted-foreground">
                    To the maximum extent permitted by law, GS Lubricants shall not be liable for:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Indirect, incidental, special, or consequential damages</li>
                    <li>Loss of profits, revenue, or business opportunities</li>
                    <li>Damages resulting from improper use or handling of products</li>
                    <li>Claims arising from client's non-compliance with regulations</li>
                    <li>Force majeure events beyond our reasonable control</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Our total liability for any claim shall not exceed the amount paid by the client for the specific 
                    service giving rise to the claim.
                  </p>
                </div>
              </div>

              {/* Indemnification */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Indemnification</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    You agree to indemnify and hold harmless GS Lubricants, its officers, directors, employees, and agents 
                    from any claims, damages, losses, or expenses arising from your breach of these Terms, violation of laws, 
                    or misuse of our services.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Intellectual Property</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    All content on our website, including text, graphics, logos, and software, is the property of GS Lubricants 
                    and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works 
                    without our express written permission.
                  </p>
                </div>
              </div>

              {/* Confidentiality */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Confidentiality</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    Both parties agree to maintain confidentiality of proprietary information, trade secrets, and business 
                    practices disclosed during the course of business relationship. This obligation survives termination of 
                    the service relationship.
                  </p>
                </div>
              </div>

              {/* Dispute Resolution */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Dispute Resolution</h2>
                <div className="bg-card p-6 rounded-lg border space-y-4">
                  <p className="text-muted-foreground">
                    Any disputes arising from these Terms or our services shall be resolved through:
                  </p>
                  <ol className="list-decimal pl-6 text-muted-foreground space-y-1">
                    <li>Good faith negotiations between the parties</li>
                    <li>Mediation by a mutually agreed mediator</li>
                    <li>Arbitration under the Arbitration and Conciliation Act, 1996</li>
                  </ol>
                  <p className="text-muted-foreground">
                    These Terms shall be governed by the laws of India. The courts of Anugul, Odisha shall have exclusive 
                    jurisdiction over any disputes.
                  </p>
                </div>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Termination</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    We reserve the right to terminate or suspend services immediately, without prior notice, for conduct 
                    that violates these Terms, applicable laws, or is harmful to our operations or reputation. Upon termination, 
                    your right to use our services ceases immediately.
                  </p>
                </div>
              </div>

              {/* Severability */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Severability</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited 
                    or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p className="text-muted-foreground mb-3">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>M/S Gouri Shankar Lubricants</strong></p>
                    <p>Plot No. 3936, Gurujang Village</p>
                    <p>Talcher Sadar, Anugul, Odisha, India, 759100</p>
                    <p>Phone: +918908094205</p>
                    <p>Email: gslubricantsodisha@gmail.com</p>
                    <p>GSTIN: 21AAJFG6323M1ZE</p>
                  </div>
                </div>
              </div>

              {/* Acknowledgment */}
              <div className="bg-accent/10 p-6 rounded-lg border border-accent">
                <p className="text-foreground font-semibold">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these 
                  Terms of Service.
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Terms;
