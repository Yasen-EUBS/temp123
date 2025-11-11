import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import monumentImage from "@/assets/monument.jpg";

const Monuments = () => {
  const monuments = [
    {
      name: "Гранитен Паметник Стандарт",
      price: "от 800 лв",
      description: "Качествен гранитен паметник с гравиране и монтаж",
      image: monumentImage
    },
    {
      name: "Мраморен Паметник",
      price: "от 1200 лв",
      description: "Елегантен мраморен паметник с индивидуален дизайн",
      image: monumentImage
    },
    {
      name: "Гранитен Паметник Луксозен",
      price: "от 1500 лв",
      description: "Представителен паметник от висококачествен гранит",
      image: monumentImage
    },
    {
      name: "Двоен Паметник",
      price: "от 2000 лв",
      description: "Двоен паметник за семейно гробно място",
      image: monumentImage
    },
    {
      name: "Паметник с Портрет",
      price: "от 1800 лв",
      description: "Паметник с гравиран портрет и декорация",
      image: monumentImage
    },
    {
      name: "Ексклузивен Дизайн",
      price: "по договаряне",
      description: "Уникален паметник според вашия проект",
      image: monumentImage
    }
  ];

  const services = [
    "Изработка от гранит и мрамор",
    "Гравиране на надписи и портрети",
    "Професионален монтаж",
    "Доставка до гробищата",
    "Консултация и измерване на място",
    "Гаранция за качество"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Надгробни паметници в София | Траурна агенция Кипарис"
        description="Пълна организация на надгробни паметници в София. Денонощно: 02 846 55 24."
        serviceName="Надгробни паметници"
      />
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Надгробни Паметници</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Изработка и монтаж на качествени надгробни паметници от гранит и мрамор
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16">
            {monuments.map((monument, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 overflow-hidden border-border bg-card">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={monument.image}
                    alt={monument.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{monument.name}</CardTitle>
                  <div className="text-2xl font-bold text-secondary">{monument.price}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{monument.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg border border-border">
            <h2 className="text-3xl font-bold mb-6 text-center">Нашите Услуги</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <p className="text-lg">{service}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg mb-2">За консултация и оглед на образци:</p>
              <p className="text-2xl font-bold text-secondary">02 846 55 24</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Monuments;
