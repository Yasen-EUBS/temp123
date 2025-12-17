import { useParams, Navigate, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { getCoffinById } from "@/data/coffinsData";
import { Phone, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const CoffinDetail = () => {
  const { id } = useParams<{ id: string }>();
  const coffin = id ? getCoffinById(id) : undefined;

  if (!coffin) {
    return <Navigate to="/traurni-stoki/kovchezi" replace />;
  }

  const specLabels: Record<string, string> = {
    material: "Материал",
    color: "Цвят",
    handles: "Дръжки",
    lining: "Тапицерия",
    dimensions: "Размери",
  };

  const categoryLabels: Record<string, string> = {
    economy: "Икономичен",
    standard: "Стандартен",
    premium: "Премиум",
    luxury: "Луксозен",
  };

  return (
    <>
      <SEO
        title={coffin.seoTitle}
        description={coffin.metaDescription}
        serviceName={coffin.title}
        breadcrumbs={[
          { name: "Начало", url: "/" },
          { name: "Траурни стоки", url: "/traurni-stoki" },
          { name: "Ковчези", url: "/traurni-stoki/kovchezi" },
          { name: coffin.title, url: `/traurni-stoki/kovchezi/${coffin.id}` },
        ]}
      />
      <Navigation />

      <main className="min-h-screen bg-coffin-bg">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 pt-6">
          <Link
            to="/traurni-stoki/kovchezi"
            className="inline-flex items-center gap-2 text-coffin-text/70 hover:text-coffin-gold transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Обратно към Ковчези
          </Link>
        </div>

        {/* Product Detail */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10">
              {/* Image */}
              <div className="aspect-[4/3] md:aspect-square overflow-hidden rounded-lg border-2 border-coffin-gold/50 p-2 bg-coffin-bg">
                <img
                  src={`/assets/coffins/${coffin.image}`}
                  alt={coffin.alt}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col">
                {/* Category Badge */}
                <span className="inline-block self-start text-xs px-3 py-1 mb-3 rounded bg-coffin-gold/20 text-coffin-gold border border-coffin-gold/30">
                  {categoryLabels[coffin.category]}
                </span>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-coffin-text mb-4">
                  {coffin.title}
                </h1>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-3xl md:text-4xl font-bold text-coffin-gold">
                    {coffin.priceEUR} EUR
                  </p>
                  <p className="text-sm text-coffin-text/60 mt-1">
                    Крайна цена без скрити такси
                  </p>
                </div>

                {/* Description */}
                <p className="text-coffin-text/80 mb-6 leading-relaxed">
                  {coffin.description}
                </p>

                {/* Specs */}
                <div className="bg-coffin-bg border border-coffin-gold/30 rounded-lg p-4 mb-6">
                  <h2 className="text-lg font-semibold text-coffin-text mb-3">
                    Технически характеристики
                  </h2>
                  <ul className="space-y-2">
                    {Object.entries(coffin.specs).map(([key, value]) => (
                      value && (
                        <li key={key} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-coffin-gold mt-0.5 flex-shrink-0" />
                          <span className="text-coffin-text/80">
                            <span className="font-medium text-coffin-text">
                              {specLabels[key]}:
                            </span>{" "}
                            {value}
                          </span>
                        </li>
                      )
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  size="lg"
                  className="bg-coffin-gold text-coffin-bg hover:bg-coffin-gold/90 font-bold text-base"
                >
                  <a href="tel:028465524" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Обадете се сега: 02 846 55 24
                  </a>
                </Button>

                <p className="text-xs text-coffin-text/50 mt-3 text-center">
                  Работим денонощно, 7 дни в седмицата
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CoffinDetail;
