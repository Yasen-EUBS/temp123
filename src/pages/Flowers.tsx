import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import piaflorClassic from "@/assets/flowers/piaflor-classic.jpg";
import piaflorLuxury from "@/assets/flowers/piaflor-luxury.jpg";
import bouquetElegant from "@/assets/flowers/bouquet-elegant.jpg";
import bouquetRoses from "@/assets/flowers/bouquet-roses.jpg";
import basketComposition from "@/assets/flowers/basket-composition.jpg";

const Flowers = () => {
  const arrangements = [
    {
      name: "Пиафлор Класик",
      sizes: [
        { size: "Малък", price: "60 лв" },
        { size: "Среден", price: "90 лв" },
        { size: "Голям", price: "120 лв" }
      ],
      description: "Традиционен пиафлор с бели хризантеми",
      image: piaflorClassic
    },
    {
      name: "Пиафлор Луксозен",
      sizes: [
        { size: "Малък", price: "120 лв" },
        { size: "Среден", price: "160 лв" },
        { size: "Голям", price: "200 лв" }
      ],
      description: "Богат пиафлор с микс от сезонни цветя",
      image: piaflorLuxury
    },
    {
      name: "Траурен Букет Елегант",
      sizes: [
        { size: "Стандарт", price: "70 лв" }
      ],
      description: "Елегантен букет с бели рози и лилиуми",
      image: bouquetElegant
    },
    {
      name: "Букет от 25 Рози",
      sizes: [
        { size: "Бели рози", price: "90 лв" },
        { size: "Червени рози", price: "90 лв" }
      ],
      description: "Класически букет от 25 свежи рози",
      image: bouquetRoses
    },
    {
      name: "Композиция Кошница",
      sizes: [
        { size: "Малка", price: "80 лв" },
        { size: "Средна", price: "120 лв" },
        { size: "Голяма", price: "160 лв" }
      ],
      description: "Кошница с разнообразни свежи цветя",
      image: basketComposition
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Траурни Венци, Пиафлори и Букети</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свежи цветя и аранжименти за изразяване на вашата скръб и уважение
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {arrangements.map((item, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 overflow-hidden border-border bg-card">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">{item.name}</CardTitle>
                  <div className="space-y-2">
                    {item.sizes.map((sizeOption, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{sizeOption.size}</span>
                        <span className="text-lg font-bold text-secondary">{sizeOption.price}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4">Поръчка и Доставка</h2>
            <p className="text-muted-foreground mb-4">
              Всички наши цветни аранжименти се изработват от свежи цветя. 
              Осигуряваме доставка до гробищата в София и региона.
            </p>
            <p className="text-lg font-semibold text-secondary">
              За поръчки: 02 846 55 24 (денонощно)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Flowers;
