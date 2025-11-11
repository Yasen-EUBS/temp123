import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Car, FileText, Clock, Globe, Shield } from "lucide-react";
import { SEO } from "@/components/SEO";

const TransportNaPokojnik = () => {
  const services = [
    {
      icon: <Plane className="w-12 h-12" />,
      title: "Международен Превоз",
      description: "Организираме транспорт на покойник от и към всички европейски държави и извън Европа."
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Вътрешен Превоз",
      description: "Превоз на покойник в рамките на България със специализирани траурни автомобили."
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Документи",
      description: "Оформяне на всички необходими документи за международен и вътрешен транспорт."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Бърза Реакция",
      description: "Денонощна готовност и бърза организация при спешни случаи."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Цялостна Организация",
      description: "Пълна координация с всички институции и органи в България и чужбина."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Застраховка",
      description: "Осигуряваме необходимата застраховка за международен транспорт."
    }
  ];

  const destinations = [
    {
      region: "Западна Европа",
      countries: "Германия, Франция, Белгия, Холандия, Швейцария, Австрия",
      price: "по договаряне"
    },
    {
      region: "Южна Европа",
      countries: "Гърция, Италия, Испания, Португалия",
      price: "по договаряне"
    },
    {
      region: "Северна Европа",
      countries: "Великобритания, Скандинавски страни",
      price: "по договаряне"
    },
    {
      region: "Източна Европа",
      countries: "Румъния, Унгария, Полша, Чехия",
      price: "по договаряне"
    },
    {
      region: "Турция и Близък Изток",
      countries: "Турция, Израел и други",
      price: "по договаряне"
    },
    {
      region: "Други държави",
      countries: "САЩ, Канада, Австралия и други",
      price: "по договаряне"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Превоз на покойник в София | Траурна агенция Кипарис"
        description="Пълна организация на превоз на покойник в София. Денонощно: 02 846 55 24."
        serviceName="Превоз на покойник"
      />
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Превоз на Покойник</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Международен и вътрешен транспорт с пълна организация и уважение
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-border bg-card">
                <CardHeader>
                  <div className="mb-4 text-secondary">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Дестинации</h2>
              <p className="text-lg text-muted-foreground">
                Осигуряваме превоз до всички европейски държави и извън Европа
              </p>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
              {destinations.map((dest, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">{dest.region}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{dest.countries}</CardDescription>
                    <div className="text-xl font-bold text-secondary">{dest.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4">Получете Точна Оферта</h2>
            <p className="text-muted-foreground mb-4">
              Всяка ситуация е индивидуална. Свържете се с нас за точна оферта и пълна информация 
              относно необходимите документи и процедури за конкретната дестинация.
            </p>
            <p className="text-lg font-semibold text-secondary">
              Денонощна линия: 02 846 55 24
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TransportNaPokojnik;
