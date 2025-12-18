import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { coffinsData, Coffin } from "@/data/coffinsData";
import { Phone, X, Check, ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const CoffinsGallery = () => {
  const [selectedCoffin, setSelectedCoffin] = useState<Coffin | null>(null);

  const categoryLabels: Record<string, string> = {
    economy: "Икономични",
    standard: "Стандартни",
    premium: "Премиум",
    luxury: "Луксозни",
  };

  const specLabels: Record<string, string> = {
    material: "Материал",
    color: "Цвят",
    handles: "Дръжки",
    lining: "Тапицерия",
    dimensions: "Размери",
    finish: "Завършек",
  };

  const handleCardClick = (coffin: Coffin, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedCoffin(coffin);
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
                <div
                  key={coffin.id}
                  onClick={(e) => handleCardClick(coffin, e)}
                  className="block group cursor-pointer"
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
                </div>
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

      {/* Product Modal */}
      <Dialog open={!!selectedCoffin} onOpenChange={(open) => !open && setSelectedCoffin(null)}>
        <DialogContent 
          className="w-[95vw] md:max-w-5xl p-0 overflow-hidden border border-[#E3C86B]"
          style={{ backgroundColor: "#1A2F1E" }}
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedCoffin(null)}
            className="absolute right-3 top-3 z-50 rounded-full p-1.5 bg-black/50 hover:bg-black/70 transition-colors"
          >
            <X className="h-5 w-5 text-white" />
          </button>

          {selectedCoffin && (
            <div className="flex flex-col md:flex-row">
              {/* Image Container - No fixed height, adapts to image */}
              <div 
                className="w-full md:w-3/5 overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none bg-black/5"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={`/assets/coffins/${selectedCoffin.image}`}
                  alt={selectedCoffin.alt}
                  className="w-full h-auto block object-contain"
                />
              </div>

              {/* Details Panel */}
              <div className="w-full md:w-2/5 p-4 md:p-6 flex flex-col">
                <DialogTitle className="sr-only">{selectedCoffin.title}</DialogTitle>
                
                {/* Category Badge */}
                <span className="inline-block self-start text-xs px-3 py-1 mb-3 rounded bg-[#E3C86B]/20 text-[#E3C86B] border border-[#E3C86B]/30">
                  {categoryLabels[selectedCoffin.category]}
                </span>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {selectedCoffin.title}
                </h2>

                {/* Price Section */}
                <div className="mb-4 p-3 rounded-lg bg-black/20 border border-[#E3C86B]/30">
                  <p className="text-2xl md:text-3xl font-bold text-[#E3C86B]">
                    {selectedCoffin.priceEUR} EUR
                  </p>
                  <p className="text-xs text-white/60 mt-1 flex items-center gap-1">
                    <Check className="h-3 w-3 text-[#E3C86B]" />
                    Крайна цена без скрити такси
                  </p>
                </div>

                {/* Description */}
                <p className="text-white/80 text-sm mb-4 leading-relaxed line-clamp-3 md:line-clamp-none">
                  {selectedCoffin.description}
                </p>

                {/* Specs Accordion */}
                <Accordion type="single" collapsible className="w-full mb-4">
                  <AccordionItem value="specs" className="border-[#E3C86B]/30">
                    <AccordionTrigger className="text-sm text-white hover:text-[#E3C86B] hover:no-underline py-2">
                      <span className="flex items-center gap-2">
                        Технически характеристики
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pt-2">
                        {Object.entries(selectedCoffin.specs).map(([key, value]) => (
                          value && (
                            <li key={key} className="flex items-start gap-2 text-sm">
                              <Check className="h-4 w-4 text-[#E3C86B] mt-0.5 flex-shrink-0" />
                              <span className="text-white/80">
                                <span className="font-medium text-white">
                                  {specLabels[key]}:
                                </span>{" "}
                                {value}
                              </span>
                            </li>
                          )
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-[#E3C86B] text-[#1A2F1E] hover:bg-[#E3C86B]/90 font-bold"
                  >
                    <a href="tel:028465524" className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      02 846 55 24
                    </a>
                  </Button>
                  <p className="text-xs text-white/50 mt-2 text-center">
                    Денонощно, 7 дни в седмицата
                  </p>
                </div>

                {/* Link to Full Page */}
                <Link
                  to={`/traurni-stoki/kovchezi/${selectedCoffin.id}`}
                  className="text-xs text-center text-[#E3C86B]/70 hover:text-[#E3C86B] mt-3 underline"
                >
                  Виж пълна страница →
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default CoffinsGallery;
