import { Flower2, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Flower2 className="h-8 w-8" />
              <span className="font-serif text-2xl font-semibold">BloomCraft</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Creating beautiful flower arrangements with the power of AI. 
              Discover the perfect bouquet for every moment.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Heart className="h-4 w-4 text-accent-floral" />
              <span>Made with love for flower enthusiasts</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#arrange" className="hover:text-primary-foreground transition-colors">AI Bouquet Design</a></li>
              <li><a href="#identify" className="hover:text-primary-foreground transition-colors">Flower Recognition</a></li>
              <li><a href="#learn" className="hover:text-primary-foreground transition-colors">Flower Library</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Custom Arrangements</a></li>
            </ul>
          </div>

          {/* Learn More */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Learn More</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Flower Meanings</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Care Guides</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Seasonal Flowers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Arrangement Tips</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@bloomcraft.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-BLOOM</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Virtual Flower Studio</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 BloomCraft. Bringing the beauty of flowers to your digital world.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;