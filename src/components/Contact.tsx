import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Телефон",
      content: "02 846 55 24",
      link: "tel:0028465524",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Работно време",
      content: "Денонощно 24/7",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Адрес",
      content: "София, България",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Имейл",
      content: "info@kiparisbg.com",
      link: "mailto:info@kiparisbg.com",
    },
  ];

  return (
    <section id="contacts" className="py-20 bg-primary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Контакти</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Винаги сме на разположение да ви помогнем
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-2 text-secondary">{info.icon}</div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-foreground hover:text-secondary transition-colors duration-300 font-medium"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{info.content}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Google Maps */}
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-xl border border-border">
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
      </div>
    </section>
  );
};
