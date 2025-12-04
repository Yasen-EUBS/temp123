import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useCookieConsent } from "@/hooks/useCookieConsent";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isVisible: isCookieBannerVisible } = useCookieConsent();

  const navItems = [
    { label: "Начало", href: "/" },
    { label: "Погребение", href: "/pogrebenie" },
    { label: "Кремация", href: "/kremacia" },
    { label: "Превоз на Покойник", href: "/transport-na-pokojnik" },
    { label: "Надгробни Паметници", href: "/nadgrobni-pametnici" },
    { label: "Венци", href: "/wreaths" },
    { label: "Цветя и Букети", href: "/flowers" },
    { label: "Полезно", href: "/polezno" },
    { label: "Контакти", href: "/contact" },
    { label: "Блог", href: "/blog" },
  ];

  return (
    <>
      {/* Fixed Call Button - Mobile Only */}
      <a
        href="tel:028465524"
        className={cn(
          "lg:hidden fixed right-4 z-50 flex items-center gap-2 bg-cta text-cta-foreground px-5 py-3 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95",
          isCookieBannerVisible ? "bottom-20" : "bottom-4"
        )}
        aria-label="Обадете се сега"
      >
        <Phone className="h-5 w-5" />
        <span className="font-bold text-xs">02 846 55 24</span>
      </a>

      <nav className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur-sm border-b border-border shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity py-1">
              <div className="bg-transparent rounded">
                <img src={logo} alt="Кипарис Траурна Агенция" className="h-12 w-auto max-h-[50px] rounded" />
              </div>
            </Link>

            {/* Phone - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <Phone className="h-5 w-5 text-secondary" />
              <a href="tel:028465524" className="text-lg font-semibold hover:text-secondary transition-colors">
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
              <a href="tel:028465524" className="flex items-center gap-2 text-secondary font-semibold">
                <Phone className="h-4 w-4" />
                ДЕНОНОЩНО: 02 846 55 24
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};
