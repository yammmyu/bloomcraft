import { FileText, Shield, CreditCard, AlertTriangle, Mail, Scale } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-muted-foreground mt-2">
              Please read these terms carefully before using FlowerAI.
            </p>
          </div>

          <div className="space-y-8">
            {/* Acceptance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Acceptance of Terms</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using FlowerAI ("the Service"), you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            {/* Service Description */}
            <Card>
              <CardHeader>
                <CardTitle>Service Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  FlowerAI provides AI-powered flower recommendation, arrangement visualization, and educational services including:
                </p>
                <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                  <li>Personalized bouquet recommendations based on occasion, style, and preferences</li>
                  <li>AI-generated arrangement visualizations</li>
                  <li>Flower recognition from uploaded images</li>
                  <li>Educational content about flowers, their meanings, and care instructions</li>
                  <li>Pricing estimates for flower arrangements</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Accounts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>User Accounts and Responsibilities</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Account Creation</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>You must provide accurate and complete information when creating an account</li>
                    <li>You are responsible for maintaining the security of your account credentials</li>
                    <li>You must be at least 13 years old to create an account</li>
                    <li>One person may not create multiple accounts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Acceptable Use</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>Use the service only for lawful purposes</li>
                    <li>Do not upload inappropriate, offensive, or copyrighted images</li>
                    <li>Do not attempt to reverse engineer or exploit our AI systems</li>
                    <li>Do not use the service to spam or harass others</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Subscription and Billing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <span>Subscription and Billing</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Free and Premium Plans</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>Free accounts receive 5 credits for AI-generated content</li>
                    <li>Premium subscriptions provide unlimited access to all features</li>
                    <li>Subscription fees are billed monthly and are non-refundable</li>
                    <li>You may cancel your subscription at any time through your account settings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Payment Terms</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>All fees are charged in advance on a monthly basis</li>
                    <li>Failure to pay fees may result in service suspension</li>
                    <li>Price changes will be communicated 30 days in advance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle>Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Our Content</h4>
                  <p className="text-muted-foreground">
                    FlowerAI owns all rights to our platform, AI models, flower database, educational content, 
                    and generated images. Users receive a limited license to use our service for personal, non-commercial purposes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">User Content</h4>
                  <p className="text-muted-foreground">
                    You retain ownership of images you upload. By uploading content, you grant us permission to 
                    process and analyze it to provide our services. We do not use your uploaded images for any other purpose.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Limitations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  <span>Service Limitations and Disclaimers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">AI-Generated Content</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>AI recommendations are suggestions only and may not be perfect</li>
                    <li>Flower recognition accuracy may vary based on image quality</li>
                    <li>Price estimates are approximate and may not reflect actual market prices</li>
                    <li>We are not responsible for the quality or availability of flowers from third-party vendors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Availability</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>We strive for 99% uptime but cannot guarantee uninterrupted service</li>
                    <li>Maintenance periods may temporarily limit service availability</li>
                    <li>We reserve the right to modify or discontinue features with notice</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Scale className="h-5 w-5 text-primary" />
                  <span>Limitation of Liability</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  FlowerAI provides the service "as is" without warranties of any kind. We are not liable for any 
                  indirect, incidental, special, or consequential damages arising from your use of the service. 
                  Our total liability shall not exceed the amount you paid for the service in the 12 months preceding the claim.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <CardTitle>Account Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate this agreement at any time. You may delete your account through your 
                  account settings. We may suspend or terminate accounts that violate these terms. Upon termination, 
                  your access to the service will cease, but these terms will continue to apply to any prior use.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card>
              <CardHeader>
                <CardTitle>Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We may modify these terms from time to time. Changes will be posted on this page with an updated 
                  "last modified" date. Continued use of the service after changes constitutes acceptance of the new terms.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="text-muted-foreground">
                  <p>Email: legal@flowerai.com</p>
                  <p>Address: San Francisco, CA</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;