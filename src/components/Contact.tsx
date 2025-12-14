import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Телефон",
      content: "02 846 55 24",
      link: "tel:028465524",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Работно време",
      content: "Денонощно 24/7",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Адрес",
      content: 'ул. "Професор Асен Златаров" №8, София',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Имейл",
      content: "kiparis2000@abv.bg",
      link: "mailto:kiparis2000@abv.bg",
    },
  ];

  return (
    <section id="contacts" className="py-12 md:py-20 bg-primary/50 pb-24 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Контакти</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Винаги сме на разположение да ви помогнем
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 max-w-6xl mx-auto mb-8 md:mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-3 md:p-6">
                <div className="mx-auto mb-1 md:mb-2 text-secondary">{info.icon}</div>
                <CardTitle className="text-sm md:text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0 md:p-6 md:pt-0">
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-foreground hover:text-secondary transition-colors duration-300 font-medium text-xs md:text-base break-all"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-foreground font-medium text-xs md:text-base">{info.content}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Google Maps */}
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-xl border border-border">
            <iframe
              src="https://maps.google.com/maps?q=ul.+Profesor+Asen+Zlatarov+8,+Sofia&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Локация на Траурна Агенция Кипарис"
              aria-label="Карта с локацията на Траурна Агенция Кипарис"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
