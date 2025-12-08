import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStokiSubmenuOpen, setIsStokiSubmenuOpen] = useState(false);
  const { isVisible: isCookieBannerVisible } = useCookieConsent();

  const navItems = [
    { label: "Начало", href: "/" },
    { label: "Погребение", href: "/pogrebenie" },
    { label: "Кремация", href: "/kremacia" },
    { label: "Превоз на Покойник", href: "/transport-na-pokojnik" },
    { label: "Надгробни Паметници", href: "/nadgrobni-pametnici" },
    { label: "Траурни стоки", href: "/traurni-stoki", hasSubmenu: true },
    { label: "Полезно", href: "/polezno" },
    { label: "Контакти", href: "/kontakti" },
  ];

  const stokiSubItems = [
    { label: "Ковчези", href: "/traurni-stoki#kovchezi" },
    { label: "Драперии", href: "/traurni-stoki#draperii" },
    { label: "Урни", href: "/traurni-stoki#urni" },
    { label: "Венци и Пиафлори", href: "/traurni-stoki#venci" },
    { label: "Кетъринг", href: "/traurni-stoki#ketering" },
    { label: "Паметници", href: "/nadgrobni-pametnici" },
  ];

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
    setIsStokiSubmenuOpen(false);
  };

  return (
    <>
      {/* Fixed Call Button - Mobile Only */}
      <a
        href="tel:028465524"
        className={cn(
          "lg:hidden fixed right-4 z-50 flex items-center gap-2 bg-cta text-cta-foreground px-4 py-3 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95",
          isCookieBannerVisible ? "bottom-20" : "bottom-4"
        )}
        aria-label="Обадете се сега"
      >
        <Phone className="h-5 w-5" />
        <span className="font-bold text-xs">ДЕНОНОЩНО: 02 846 55 24</span>
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
            <div className="relative flex justify-center">
              <NavigationMenu>
              <NavigationMenuList className="gap-4">
                {navItems.map((item) => (
                  item.hasSubmenu ? (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-secondary data-[state=open]:bg-transparent text-sm font-medium px-0">
                        <Link 
                          to={item.href} 
                          className="hover:text-secondary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-48 gap-1 p-2 bg-card border border-border shadow-lg rounded-md">
                          {stokiSubItems.map((subItem) => (
                            <li key={subItem.label}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subItem.href}
                                  className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  {subItem.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.label}>
                      <Link
                        to={item.href}
                        className="text-sm font-medium hover:text-secondary transition-colors duration-300"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuItem>
                  )
                ))}
              </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
              isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="py-4 space-y-3">
              {navItems.map((item) => (
                item.hasSubmenu ? (
                  <div key={item.label}>
                    {/* Split Button Row */}
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.href}
                        className="text-sm font-medium hover:text-secondary transition-colors duration-300 flex-1"
                        onClick={handleMobileNavClick}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => setIsStokiSubmenuOpen(!isStokiSubmenuOpen)}
                        className="p-2 hover:bg-accent/20 rounded-md transition-colors"
                        aria-label="Отвори подменю"
                      >
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            isStokiSubmenuOpen && "rotate-180"
                          )} 
                        />
                      </button>
                    </div>
                    {/* Sub-links */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-200 ease-in-out",
                        isStokiSubmenuOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="pl-4 space-y-2 border-l-2 border-secondary/30">
                        {stokiSubItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block text-sm text-muted-foreground hover:text-secondary transition-colors duration-200"
                            onClick={handleMobileNavClick}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block text-sm font-medium hover:text-secondary transition-colors duration-300"
                    onClick={handleMobileNavClick}
                  >
                    {item.label}
                  </Link>
                )
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
