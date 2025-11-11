import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, FileText, Heart, Package } from "lucide-react";
import { SEO } from "@/components/SEO";

const Kremacia = () => {
  const services = [
    {
      icon: <Flame className="w-12 h-12" />,
      title: "Кремация",
      description: "Професионална организация на кремация с пълно спазване на законодателството и достойно отношение."
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Документи",
      description: "Оформяне на всички необходими документи за кремация - разрешително, удостоверения и други."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Церемония",
      description: "Организация на траурна церемония преди кремацията според желанията на семейството."
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Урни",
      description: "Широк избор от урни в различни ценови категории и дизайни."
    }
  ];

  const urns = [
    {
      name: "Урна Стандарт",
      price: "от 50 лв",
      description: "Качествена урна от дърво или метал"
    },
    {
      name: "Урна Луксозна",
      price: "от 150 лв",
      description: "Изискана урна с декорация"
    },
    {
      name: "Урна Мраморна",
      price: "от 250 лв",
      description: "Представителна урна от естествен мрамор"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Кремация в София | Траурна агенция Кипарис"
        description="Пълна организация на кремация в София. Денонощно: 02 846 55 24."
        serviceName="Кремация"
      />
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Кремация</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Професионална организация на кремация с уважение и достойнство
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-20">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Урни</h2>
              <p className="text-lg text-muted-foreground">
                Предлагаме широк избор от урни в различни стилове и материали
              </p>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
              {urns.map((urn, index) => (
                <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">{urn.name}</CardTitle>
                    <div className="text-3xl font-bold text-secondary mt-4">{urn.price}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{urn.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4">Информация за Кремация</h2>
            <p className="text-muted-foreground mb-4">
              Кремацията е съвременна алтернатива на традиционното погребение. 
              Осигуряваме пълна организация на процеса, включително всички необходими документи и разрешителни.
            </p>
            <p className="text-lg font-semibold text-secondary">
              За консултация: 02 846 55 24 (денонощно)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kremacia;
