import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Начало", href: "/" },
    { label: "Погребални Услуги", href: "/funeral-services" },
    { label: "Венци", href: "/wreaths" },
    { label: "Траурни Венци, Пиафлори И Букети", href: "/flowers" },
    { label: "Надгробни Паметници", href: "/monuments" },
    { label: "Контакти", href: "/contact" },
    { label: "Блог", href: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur-sm border-b border-border shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="p-2 bg-background rounded-lg border-2 border-border shadow-sm">
              <img src={logo} alt="Кипарис Траурна Агенция" className="h-10 w-auto" />
            </div>
          </Link>

          {/* Phone - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <Phone className="h-5 w-5 text-secondary" />
            <a href="tel:0028465524" className="text-lg font-semibold hover:text-secondary transition-colors">
              ДЕНОНОЩНО: 02 846 55 24
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium hover:text-secondary transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block text-sm font-medium hover:text-secondary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border">
              <a href="tel:0028465524" className="flex items-center gap-2 text-secondary font-semibold">
                <Phone className="h-4 w-4" />
                ДЕНОНОЩНО: 02 846 55 24
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
