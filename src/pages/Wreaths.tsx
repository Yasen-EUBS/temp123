import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import wreathTraditional from "@/assets/wreaths/wreath-white-traditional.jpg";
import wreathLuxury from "@/assets/wreaths/wreath-luxury.jpg";
import wreathHeart from "@/assets/wreaths/wreath-heart.jpg";
import wreathCross from "@/assets/wreaths/wreath-cross.jpg";
import wreathCrown from "@/assets/wreaths/wreath-crown.jpg";

const Wreaths = () => {
  const wreaths = [
    {
      name: "Венец Традиционен",
      sizes: [
        { size: "Малък (140см)", price: "80 лв" },
        { size: "Среден (170см)", price: "120 лв" },
        { size: "Голям (200см)", price: "160 лв" }
      ],
      description: "Класически траурен венец с бели хризантеми",
      image: wreathTraditional
    },
    {
      name: "Венец Луксозен",
      sizes: [
        { size: "Малък (140см)", price: "150 лв" },
        { size: "Среден (170см)", price: "200 лв" },
        { size: "Голям (200см)", price: "250 лв" }
      ],
      description: "Богато декориран венец с рози, лилиуми и сезонни цветя",
      image: wreathLuxury
    },
    {
      name: "Сърце от Цветя",
      sizes: [
        { size: "Малък (140см)", price: "140 лв" },
        { size: "Среден (170см)", price: "180 лв" },
        { size: "Голям (200см)", price: "220 лв" }
      ],
      description: "Нежно сърце от бели и червени рози",
      image: wreathHeart
    },
    {
      name: "Кръст от Цветя",
      sizes: [
        { size: "Малък (140см)", price: "120 лв" },
        { size: "Среден (170см)", price: "160 лв" },
        { size: "Голям (200см)", price: "200 лв" }
      ],
      description: "Траурен кръст изработен от свежи бели рози",
      image: wreathCross
    },
    {
      name: "Корона",
      sizes: [
        { size: "Малък (140см)", price: "100 лв" },
        { size: "Среден (170см)", price: "140 лв" },
        { size: "Голям (200см)", price: "180 лв" }
      ],
      description: "Елегантна корона с рози и сезонни цветя",
      image: wreathCrown
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Траурни венци в София | Траурна агенция Кипарис"
        description="Пълна организация на траурни венци в София. Денонощно: 02 846 55 24."
        serviceName="Траурни венци"
      />
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Траурни Венци</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Траурни венци, кръстове и аранжименти от свежи цветя за последно сбогом
            </p>
          </div>

          <div className="text-center mb-12 bg-card p-6 rounded-lg border border-border max-w-xl mx-auto">
            <h2 className="text-xl font-semibold mb-2">Размери</h2>
            <div className="flex justify-around text-muted-foreground">
              <span>Малък: 140см</span>
              <span>Среден: 170см</span>
              <span>Голям: 200см</span>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {wreaths.map((wreath, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 overflow-hidden border-border bg-card">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={wreath.image}
                    alt={wreath.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">{wreath.name}</CardTitle>
                  <div className="space-y-2">
                    {wreath.sizes.map((sizeOption, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{sizeOption.size}</span>
                        <span className="text-lg font-bold text-secondary">{sizeOption.price}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{wreath.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wreaths;
