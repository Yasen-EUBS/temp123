import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Contact Info */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Траурна Агенция Кипарис</h3>
            <p className="text-muted-foreground mb-6">
              Професионални траурни услуги с уважение и съпричастност
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Адрес:</p>
                  <p className="text-muted-foreground">ул. "Професор Асен Златаров" №8, София</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Телефон:</p>
                  <a href="tel:028465524" className="text-muted-foreground hover:text-secondary transition-colors">
                    02 846 55 24 (Денонощно)
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Имейл:</p>
                  <a href="mailto:kiparis2000@abv.bg" className="text-muted-foreground hover:text-secondary transition-colors">
                    kiparis2000@abv.bg
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Услуги</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/pogrebenie" className="text-muted-foreground hover:text-secondary transition-colors">
                Погребение
              </Link>
              <Link to="/kremacia" className="text-muted-foreground hover:text-secondary transition-colors">
                Кремация
              </Link>
              <Link to="/transport-na-pokojnik" className="text-muted-foreground hover:text-secondary transition-colors">
                Превоз на покойник
              </Link>
              <Link to="/nadgrobni-pametnici" className="text-muted-foreground hover:text-secondary transition-colors">
                Надгробни паметници
              </Link>
            </nav>
          </div>

          {/* Legal Info Column */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Правна информация</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-secondary transition-colors">
                Политика за поверителност
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-secondary transition-colors">
                Общи условия
              </Link>
            </nav>
          </div>
          
          {/* Google Maps */}
          <div className="w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-lg md:col-span-2 lg:col-span-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.506821!2d23.318432!3d42.6954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8576f96dc15%3A0xb6c9c7a8e2f3d4a5!2z0YPQuy4g4oCe0J_RgNC-0YTQtdGB0L7RgCDQkNGB0LXQvSDQl9C70LDRgtCw0YDQvtCy4oCcIOKEljgsINCh0L7RhNC40Y8!5e0!3m2!1sbg!2sbg!4v1699999999999!5m2!1sbg!2sbg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Локация на Траурна Агенция Кипарис на ул. Професор Асен Златаров 8, София"
              aria-label="Карта с локацията на Траурна Агенция Кипарис на ул. Професор Асен Златаров 8, София"
            />
          </div>
        </div>
        
        {/* Company Details & Copyright */}
        <div className="pt-6 border-t border-border text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © 2025 Траурна агенция Кипарис. Всички права запазени.
          </p>
          <p className="text-xs text-muted-foreground">
            „ТРАУРНА АГЕНЦИЯ КИПАРИС" ЕООД | ЕИК: 203898716 | Адрес: София 1504, ул. проф. Асен Златаров 8
          </p>
        </div>
      </div>
    </footer>
  );
};
