import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Contact Info */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Кипарис 2000 – Международно Репатриране</h3>
            <p className="text-muted-foreground mb-6">
              Премиум траурни услуги и денонощно международно репатриране с уважение и достойнство.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Адрес:</p>
                  <p className="text-muted-foreground">1505 София, Район Оборище, ул. „Мърфи“ № 28, България</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Телефон:</p>
                  <a href="tel:028465524" className="text-muted-foreground hover:text-secondary transition-colors">
                    02 846 55 24 (Денонощно)
                  </a>
                  {/* TODO: Premium phone number placeholder – replace href and label when new number is provided */}
                  <a
                    href="tel:028465524"
                    aria-label="Премиум денонощна линия (скоро)"
                    className="block text-xs text-muted-foreground/60 italic"
                  >
                    Премиум линия: скоро
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
              src="https://maps.google.com/maps?q=ul.+Murfi+28,+Sofia&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Локация на Кипарис 2000 на ул. Мърфи 28, Район Оборище, София"
              aria-label="Карта с локацията на Кипарис 2000 на ул. Мърфи 28, Район Оборище, София"
            />
          </div>
        </div>
        
        {/* Company Details & Copyright */}
        <div className="pt-6 border-t border-border text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © 2025 Кипарис 2000 – Международно Репатриране. Всички права запазени.
          </p>
          <p className="text-xs text-muted-foreground">
            „ТРАУРНА АГЕНЦИЯ КИПАРИС" ЕООД | ЕИК: 203898716 | Адрес: 1505 София, Район Оборище, ул. „Мърфи“ № 28
          </p>
        </div>
      </div>
    </footer>
  );
};
