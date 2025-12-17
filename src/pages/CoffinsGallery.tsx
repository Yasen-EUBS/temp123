import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { coffinsData } from "@/data/coffinsData";
import { Phone } from "lucide-react";

const CoffinsGallery = () => {
  const categoryLabels: Record<string, string> = {
    economy: "Икономични",
    standard: "Стандартни",
    premium: "Премиум",
    luxury: "Луксозни",
  };

  return (
    <>
      <SEO
        title="Ковчези София - Луксозни и Икономични Модели | Траурна Агенция Кипарис"
        description="Богат избор на ковчези от масив и ПДЧ в София. Икономични, стандартни и луксозни модели. Доставка до всички гробища. Денонощен телефон 02 846 55 24."
        serviceName="Ковчези"
        breadcrumbs={[
          { name: "Начало", url: "/" },
          { name: "Траурни стоки", url: "/traurni-stoki" },
          { name: "Ковчези", url: "/traurni-stoki/kovchezi" },
        ]}
      />
      <Navigation />

      <main className="min-h-screen bg-coffin-bg">
        {/* Hero Section - Dark Green Theme */}
        <section className="relative py-16 md:py-24 bg-coffin-bg">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-coffin-text mb-4">
              Ковчези
            </h1>
            <p className="text-lg md:text-xl text-coffin-text/80 max-w-2xl mx-auto">
              Богат избор на ковчези от масив и ПДЧ - от икономични до луксозни модели
            </p>
            <p className="text-coffin-gold font-semibold mt-4">
              Крайна цена без скрити такси
            </p>
          </div>
        </section>

        {/* Coffins Grid */}
        <section className="py-12 md:py-16 bg-coffin-bg">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 max-w-7xl mx-auto">
              {coffinsData.map((coffin) => (
                <Link
                  key={coffin.id}
                  to={`/traurni-stoki/kovchezi/${coffin.id}`}
                  className="block group"
                >
                  <Card className="h-full overflow-hidden bg-coffin-bg border-coffin-gold/30 hover:border-coffin-gold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-coffin-gold/10">
                    {/* Image with Gold Border */}
                    <div className="aspect-[4/3] overflow-hidden border-b-2 border-coffin-gold/50 p-1">
                      <div className="w-full h-full overflow-hidden rounded-sm border border-coffin-gold/30">
                        <img
                          src={`/assets/coffins/${coffin.image}`}
                          alt={coffin.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <CardContent className="p-2 md:p-4">
                      {/* Category Badge */}
                      <span className="inline-block text-[10px] md:text-xs px-2 py-0.5 mb-1 md:mb-2 rounded bg-coffin-gold/20 text-coffin-gold border border-coffin-gold/30">
                        {categoryLabels[coffin.category]}
                      </span>
                      {/* Title */}
                      <h2 className="text-xs md:text-base font-semibold text-coffin-text mb-1 md:mb-2 line-clamp-2 group-hover:text-coffin-gold transition-colors">
                        {coffin.title}
                      </h2>
                      {/* Price */}
                      <p className="text-sm md:text-lg font-bold text-coffin-gold">
                        {coffin.priceEUR} EUR
                      </p>
                      {/* View Details */}
                      <p className="text-[10px] md:text-xs text-coffin-text/60 mt-1 md:mt-2 group-hover:text-coffin-gold/80 transition-colors">
                        Виж детайли →
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-coffin-bg border-t border-coffin-gold/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-coffin-text mb-4">
              Нуждаете се от консултация?
            </h2>
            <p className="text-coffin-text/70 mb-6 max-w-xl mx-auto">
              Нашият екип е на разположение денонощно, за да ви помогне с избора на подходящ ковчег.
            </p>
            <a
              href="tel:028465524"
              className="inline-flex items-center gap-2 bg-coffin-gold text-coffin-bg px-6 py-3 rounded-lg font-bold hover:bg-coffin-gold/90 transition-colors"
            >
              <Phone className="h-5 w-5" />
              ДЕНОНОЩНО: 02 846 55 24
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CoffinsGallery;
