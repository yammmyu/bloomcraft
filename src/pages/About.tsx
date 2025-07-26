import { Heart, Users, Target, Award, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
              About FlowerAI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Making flower selection easy and accessible for everyone, through the power of AI and botanical knowledge.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-primary" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                FlowerAI was created with a simple yet powerful vision: to make the beautiful world of flowers accessible to everyone. 
                Whether you're selecting flowers for a special occasion, finding the perfect gift, or simply wanting to learn about 
                botanical beauty, our AI-powered platform guides you every step of the way.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every flower tells a story, carries meaning, and has the power to express emotions that words sometimes cannot. 
                Our platform combines cutting-edge AI technology with centuries of floral tradition and symbolism to help you make the perfect choice.
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span>Personalized Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI analyzes your preferences, occasion, and recipient to suggest the perfect floral arrangements 
                  that match your specific needs and style.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Educational Library</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn about different flowers, their meanings, symbolism, care instructions, and cultural significance 
                  through our comprehensive botanical database.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>AI Visualization</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  See your perfect arrangement come to life with AI-generated images that help you visualize 
                  the final result before making your selection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Smart Recognition</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upload an image of flowers you love, and our AI will identify them and help you create 
                  similar arrangements or find complementary flowers.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Story */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                FlowerAI was born from a simple observation: choosing the right flowers shouldn't be overwhelming. 
                Too often, people feel uncertain about which flowers to select for different occasions, what meanings 
                they carry, or how to create beautiful arrangements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of AI specialists, botanists, and design experts came together to create a platform that 
                democratizes floral knowledge. We combine traditional floristry wisdom with modern technology to 
                provide personalized, educational, and accessible flower selection experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're planning a wedding, expressing sympathy, celebrating achievements, or simply decorating 
                your home, FlowerAI ensures you make choices that are both beautiful and meaningful.
              </p>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                We'd love to hear from you. Reach out with questions, feedback, or just to share your floral stories.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">hello@flowerai.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">San Francisco, CA</span>
                  </div>
                </div>
                <div>
                  <Button className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;