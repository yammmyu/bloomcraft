import { Database, Shield, Upload, Brain, Trash2, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DataPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
              Data Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-muted-foreground mt-2">
              Learn how we collect, process, store, and protect your data at FlowerAI.
            </p>
          </div>

          <div className="space-y-8">
            {/* Data Collection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-primary" />
                  <span>Data Collection Practices</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Account Data</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>Email address (required for account creation and communication)</li>
                    <li>Display name (optional, for personalization)</li>
                    <li>Profile avatar (optional)</li>
                    <li>Account creation timestamp and last login</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Preference Data</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>Flower preferences and search queries</li>
                    <li>Style choices (minimalistic, romantic, classic, etc.)</li>
                    <li>Occasion selections (wedding, birthday, sympathy, etc.)</li>
                    <li>Color preferences and arrangement density settings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Generated Content</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>AI-generated bouquet arrangements and images</li>
                    <li>Saved arrangements and favorite designs</li>
                    <li>Custom arrangement modifications and edits</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Image Processing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="h-5 w-5 text-primary" />
                  <span>Image Upload and Processing</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Flower Recognition</h4>
                  <p className="text-muted-foreground">
                    When you upload images for flower recognition, we process them using our AI models to identify 
                    flower types, colors, and arrangement styles. Images are:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc mt-2">
                    <li>Processed immediately upon upload</li>
                    <li>Temporarily stored for analysis (deleted within 24 hours)</li>
                    <li>Not used for training our models without explicit consent</li>
                    <li>Never shared with third parties</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Generated Images</h4>
                  <p className="text-muted-foreground">
                    AI-generated bouquet images are created based on your preferences and stored in your account. 
                    You can download, share, or delete these images at any time.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* AI Training */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <span>AI Model Training and Improvement</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Anonymized Usage Data</h4>
                  <p className="text-muted-foreground">
                    We use anonymized, aggregated data to improve our AI recommendations:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc mt-2">
                    <li>Popular flower combinations and color preferences</li>
                    <li>Seasonal trends and occasion patterns</li>
                    <li>General user interaction patterns (not linked to individual accounts)</li>
                    <li>Success rates of recommendations and user satisfaction</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Opt-Out Options</h4>
                  <p className="text-muted-foreground">
                    You can opt out of contributing to AI improvement by contacting our support team. 
                    This will not affect your ability to use the service.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Storage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Data Storage and Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Storage Infrastructure</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>Data stored in secure, encrypted databases hosted by Supabase</li>
                    <li>Geographic data centers in the United States with SOC 2 compliance</li>
                    <li>Regular automated backups with point-in-time recovery</li>
                    <li>End-to-end encryption for data in transit and at rest</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Access Controls</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>Role-based access with minimum necessary permissions</li>
                    <li>Multi-factor authentication for all admin accounts</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Monitoring and logging of all data access</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Data Retention</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>Account data retained until account deletion</li>
                    <li>Generated arrangements saved indefinitely (unless user deletes)</li>
                    <li>Uploaded images for recognition deleted within 24 hours</li>
                    <li>Analytics data anonymized and aggregated after 90 days</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Download className="h-5 w-5 text-primary" />
                  <span>Your Data Rights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Access and Portability</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>View all data associated with your account in your profile</li>
                    <li>Export your data in JSON format upon request</li>
                    <li>Download all your generated arrangements and images</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Correction and Deletion</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>Update your profile information at any time</li>
                    <li>Delete individual saved arrangements or images</li>
                    <li>Request complete account and data deletion</li>
                    <li>Data deletion is permanent and cannot be reversed</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Third Parties */}
            <Card>
              <CardHeader>
                <CardTitle>Third-Party Data Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Providers</h4>
                  <p className="text-muted-foreground">
                    We work with trusted partners who help us provide our service:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc mt-2">
                    <li>Supabase (database hosting and authentication)</li>
                    <li>Stripe (payment processing for subscriptions)</li>
                    <li>Email service providers (for account communications)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">No Data Sales</h4>
                  <p className="text-muted-foreground">
                    We never sell, rent, or trade your personal data to third parties for marketing 
                    or any other commercial purposes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Deletion */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trash2 className="h-5 w-5 text-primary" />
                  <span>Account and Data Deletion</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Deletion Process</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>Account deletion can be initiated from your profile settings</li>
                    <li>All personal data is permanently deleted within 30 days</li>
                    <li>Generated images and arrangements are removed immediately</li>
                    <li>Some analytics data may be retained in anonymized form</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What Remains</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>Financial records (required for legal compliance)</li>
                    <li>Anonymized usage statistics (not linkable to you)</li>
                    <li>Public content you may have shared (if any)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Data Protection Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For questions about this Data Policy, data requests, or privacy concerns:
                </p>
                <div className="text-muted-foreground">
                  <p>Email: data@flowerai.com</p>
                  <p>Subject line: "Data Policy Inquiry"</p>
                  <p>Response time: Within 72 hours</p>
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

export default DataPolicy;