import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Flower2, Menu, Camera, BookOpen, Palette } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Arrange", href: "#arrange", icon: Palette },
    { name: "Identify", href: "#identify", icon: Camera },
    { name: "Learn", href: "#learn", icon: BookOpen },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Flower2 className="h-8 w-8 text-primary" />
            <span className="font-serif text-xl font-semibold text-foreground">
              BloomCraft
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </a>
                    );
                  })}
                  <Button variant="default" className="w-full mt-8">
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;