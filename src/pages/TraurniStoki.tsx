import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Truck, Award, ShieldCheck, Leaf, X, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import coffinLuxury from "@/assets/coffin-luksozen.jpg";
import coffinEconomy from "@/assets/coffin-ekonomichen.jpg";
import urnImage from "@/assets/services/urn.png";
import wreathLuxury from "@/assets/wreaths/wreath-luxury.jpg";
import churchTable from "@/assets/church-table.png";
import monumentImage from "@/assets/monument.jpg";

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string | null;
}

const TraurniStoki = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories: Category[] = [
    {
      id: "kovchezi",
      title: "Ковчези",
      description: "Богат избор на ковчези от масив и ПДЧ - партньор на завод 'Осогово' и италиански вносители.",
      image: coffinLuxury,
      link: "/traurni-stoki/kovchezi",
    },
    {
      id: "draperii",
      title: "Драперии",
      description: "Луксозни сатенени и памучни драперии и комплекти за ковчег.",
      image: coffinEconomy,
      link: null,
    },
    {
      id: "urni",
      title: "Урни",
      description: "Висококачествени урни от керамика, метал, камък и дърво.",
      image: urnImage,
      link: "/kremacia",
    },
    {
      id: "venci",
      title: "Венци и Пиафлори",
      description: "Траурни венци от естествени цветя, пиафлори и букети за изказване на съболезнования.",
      image: wreathLuxury,
      link: null,
    },
    {
      id: "ketering",
      title: "Кетъринг",
      description: "Ритуални питки, жито, вино и индивидуални пакети за раздаване.",
      image: churchTable,
      link: null,
    },
    {
      id: "pametnici",
      title: "Паметници",
      description: "Проектиране и изработка на надгробни паметници от мрамор и гранит.",
      image: monumentImage,
      link: "/nadgrobni-pametnici",
    },
  ];

  const cemeteries = [
    "Централни Софийски гробища",
    "Гробищен парк Бояна",
    "Гробищен парк Малашевци",
    "Гробищен парк Горна Баня",
    "Гробищен парк Орландовци",
    "Гробищен парк Княжево",
  ];

  const handleCardClick = (index: number, hasLink: boolean) => {
    if (!hasLink) {
      setStartIndex(index);
      setCurrentSlide(index);
      setModalOpen(true);
    }
  };

  // Update current slide when carousel changes
  const onSelect = () => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
  };

  // Set initial slide when modal opens
  const handleCarouselInit = (carouselApi: CarouselApi) => {
    setApi(carouselApi);
    if (carouselApi) {
      carouselApi.scrollTo(startIndex, true);
      carouselApi.on("select", onSelect);
    }
  };

  const currentCategory = categories[currentSlide];

  return (
    <>
      <SEO
        title="Траурни стоки София - Ковчези, Урни, Венци и Кетъринг | Кипарис"
        description="Магазин за траурни стоки в София. Предлагаме ковчези, драперии, урни, венци, пиафлори и организиране на кетъринг."
        serviceName="Траурни стоки"
        breadcrumbs={[
          { name: "Начало", url: "/" },
          { name: "Траурни стоки", url: "/traurni-stoki" },
        ]}
      />
      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          className="relative py-20 md:py-28"
          style={{
            background: "linear-gradient(to bottom, hsl(var(--primary)) 0%, hsl(var(--primary)/0.85) 100%)",
          }}
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 rounded-full px-4 py-2 mb-6">
              <ShieldCheck className="h-4 w-4 text-secondary" />
              <span className="text-sm text-primary-foreground/90">
                Гарантиран произход и качество
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Траурни стоки и атрибути
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Пълен каталог с всичко необходимо за достойно изпращане.
            </p>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="py-6 bg-muted/50 border-b border-border">
          <div className="container mx-auto px-4">
            <p className="text-center text-xs text-muted-foreground mb-3 uppercase tracking-wider">
              Партньори и стандарти
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Award className="h-5 w-5 text-secondary" />
                Ковчези "Осогово" (БГ Стандарт)
              </div>
              <div className="hidden md:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <ShieldCheck className="h-5 w-5 text-secondary" />
                Италиански дизайн и обков
              </div>
              <div className="hidden md:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Leaf className="h-5 w-5 text-secondary" />
                Екологични материали
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto">
              {categories.map((category, index) => {
                const cardContent = (
                  <Card 
                    id={category.id}
                    className={`h-full overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 ${category.link ? "group-hover:border-secondary" : "cursor-pointer hover:border-secondary"}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={category.image}
                        alt={category.title}
                        className={`w-full h-full object-cover ${category.link || !category.link ? "group-hover:scale-105 transition-transform duration-500" : ""}`}
                      />
                      {/* Label for clickable cards */}
                      {category.link && (
                        <div className="absolute bottom-2 right-2 bg-secondary/90 text-secondary-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          Виж моделите
                        </div>
                      )}
                      {!category.link && (
                        <div className="absolute bottom-2 right-2 bg-secondary/90 text-secondary-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          Виж детайли
                        </div>
                      )}
                    </div>
                    <CardHeader className="p-2 md:p-6 pb-1 md:pb-2">
                      <CardTitle className={`text-sm md:text-xl group-hover:text-secondary transition-colors`}>
                        {category.title}
                        <span className="ml-1 md:ml-2 text-secondary">→</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 md:p-6 pt-0 md:pt-0">
                      <CardDescription className="text-xs md:text-base text-muted-foreground line-clamp-3 md:line-clamp-none">
                        {category.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );

                return category.link ? (
                  <Link key={index} to={category.link} className="block group">
                    {cardContent}
                  </Link>
                ) : (
                  <div 
                    key={index} 
                    className="block group"
                    onClick={() => handleCardClick(index, false)}
                  >
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Delivery Information */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-8">
              <Truck className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Доставка до всички гробища в София</h2>
              <p className="text-muted-foreground">
                Осигуряваме безплатна доставка на всички траурни стоки до избрания гробищен парк.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="cemeteries" className="border-border">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-secondary" />
                    Обслужвани гробищни паркове
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pt-2">
                    {cemeteries.map((cemetery, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        {cemetery}
                      </li>
                    ))}
                    <li className="flex items-center gap-2 text-muted-foreground italic pt-2">
                      <span className="w-2 h-2 rounded-full bg-secondary/50" />
                      ...и всички други гробища в София и околността
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* SEO Text Block */}
            <div className="mt-10 pt-8 border-t border-border text-sm text-muted-foreground space-y-4">
              <h3 className="text-base font-semibold text-foreground">Защо е важно качеството на траурните стоки?</h3>
              <p>
                Изборът на ковчег и траурни атрибути е важна част от ритуала. Траурна агенция Кипарис работи директно с утвърдени производители като 
                <strong className="text-foreground"> завод "Осогово"</strong>, за да гарантира, че продуктите отговарят на държавните стандарти за здравина и екологичност. 
                Това е от съществено значение при полагане в гробни места в натоварени паркове като Малашевци и Бакърена фабрика.
              </p>
              <p>
                Независимо дали търсите икономичен вариант от фазер или луксозен модел от масивно дърво (дъб, махагон), 
                ние предлагаме прозрачни цени без скрити такси.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                За запитвания и поръчки се свържете с нас:
              </p>
              <a
                href="tel:028465524"
                className="inline-flex items-center gap-2 bg-cta text-cta-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                ДЕНОНОЩНО: 02 846 55 24
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Gallery Modal with Carousel */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent 
          className="w-[98vw] md:max-w-6xl p-0 overflow-hidden border border-[#E3C86B] bg-[#1A2F1E]"
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          {/* Close Button */}
          <button
            onClick={() => setModalOpen(false)}
            className="absolute right-3 top-3 z-50 rounded-full p-2 bg-black/50 hover:bg-black/70 transition-colors"
          >
            <X className="h-5 w-5 text-white" />
          </button>

          <DialogTitle className="sr-only">
            {currentCategory?.title || "Траурни стоки"}
          </DialogTitle>

          <div className="flex flex-col md:flex-row">
            {/* Carousel Section */}
            <div className="w-full md:w-3/5 relative">
              <Carousel 
                setApi={handleCarouselInit}
                opts={{
                  loop: true,
                  startIndex: startIndex,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {categories.map((category, index) => (
                    <CarouselItem key={category.id} className="w-full">
                      <div 
                        className="w-full h-auto overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none bg-black/5"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-auto block object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Navigation Arrows - Gold styled */}
                <CarouselPrevious 
                  className="left-2 md:left-4 bg-[#1A2F1E]/80 border-[#E3C86B] text-[#E3C86B] hover:bg-[#E3C86B] hover:text-[#1A2F1E] h-10 w-10 md:h-12 md:w-12"
                />
                <CarouselNext 
                  className="right-2 md:right-4 bg-[#1A2F1E]/80 border-[#E3C86B] text-[#E3C86B] hover:bg-[#E3C86B] hover:text-[#1A2F1E] h-10 w-10 md:h-12 md:w-12"
                />
              </Carousel>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {categories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index 
                        ? "bg-[#E3C86B] w-6" 
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Details Panel */}
            <div className="w-full md:w-2/5 p-4 md:p-6 flex flex-col">
              {/* Title */}
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                {currentCategory?.title}
              </h2>

              {/* Description */}
              <p className="text-white/80 text-sm md:text-base mb-6 leading-relaxed">
                {currentCategory?.description}
              </p>

              {/* Info Box */}
              <div className="p-4 rounded-lg bg-black/20 border border-[#E3C86B]/30 mb-6">
                <p className="text-white/70 text-sm">
                  За повече информация и актуални цени, моля свържете се с нас. 
                  Предлагаме индивидуални консултации и помощ при избора.
                </p>
              </div>

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

              {/* Link to category page if available */}
              {currentCategory?.link && (
                <Link
                  to={currentCategory.link}
                  className="text-sm text-center text-[#E3C86B]/70 hover:text-[#E3C86B] mt-4 underline"
                  onClick={() => setModalOpen(false)}
                >
                  Виж всички модели →
                </Link>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default TraurniStoki;
