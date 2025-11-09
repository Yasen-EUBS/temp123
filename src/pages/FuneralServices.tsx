import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Car, Flower2, FileText, Users, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";

const FuneralServices = () => {
  const services = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Превоз на Покойник",
      description: "Професионален превоз на покойници с дискретност и уважение. Осигуряваме превоз на територията на цялата страна и в чужбина с специализирани траурни автомобили."
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Траурен Автомобил",
      description: "Луксозни траурни автомобили за достойно изпращане. Включва транспорт на семейството и близките до последния път."
    },
    {
      icon: <Flower2 className="w-12 h-12" />,
      title: "Погребална Церемония",
      description: "Пълна организация на погребални церемонии според традициите и желанията на семейството. Съдействие при избор на място и време."
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Документи и Формалности",
      description: "Помощ при оформянето на всички необходими документи - констативен протокол, разрешително за погребение, удостоверения."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Гробокопачи",
      description: "Осигуряване на професионални гробокопачи за подготовка на гробното място. Цялостна организация на процеса."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "24/7 Денонощна Линия",
      description: "Винаги на разположение за спешни случаи. Професионална консултация и незабавна реакция във всеки момент."
    }
  ];

  const coffins = [
    {
      name: "Ковчег Стандарт",
      price: "от 150 лв",
      description: "Качествен дървен ковчег с тапицерия"
    },
    {
      name: "Ковчег Луксозен",
      price: "от 300 лв",
      description: "Висококачествен ковчег с богата декорация"
    },
    {
      name: "Ковчег Премиум",
      price: "от 500 лв",
      description: "Ексклузивен ковчег с изискана изработка"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Погребални услуги в София | Траурна агенция Кипарис"
        description="Пълна организация на погребални услуги. Денонощно: 02 846 55 24."
        serviceName="Погребални услуги"
      />
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Погребални Услуги</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Пълен спектър от професионални погребални услуги с уважение и съпричастност
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ковчези</h2>
              <p className="text-lg text-muted-foreground">
                Предлагаме висококачествени ковчези в различни ценови категории
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {coffins.map((coffin, index) => (
                <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">{coffin.name}</CardTitle>
                    <div className="text-3xl font-bold text-secondary mt-4">{coffin.price}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{coffin.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FuneralServices;
