import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Траурна Агенция Кипарис</h3>
            <p className="text-muted-foreground mb-6">
              Професионални траурни услуги с уважение и съпричастност
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Адрес:</p>
                  <p className="text-muted-foreground">София, България</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Телефон:</p>
                  <a href="tel:0028465524" className="text-muted-foreground hover:text-secondary transition-colors">
                    02 846 55 24 (Денонощно)
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Имейл:</p>
                  <a href="mailto:info@kiparisbg.com" className="text-muted-foreground hover:text-secondary transition-colors">
                    info@kiparisbg.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Google Maps */}
          <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186429.89199167983!2d23.199208!3d42.697866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia%2C%20Bulgaria!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Локация на Траурна Агенция Кипарис"
            />
          </div>
        </div>
        
        <div className="pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Траурна Агенция Кипарис. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
};
