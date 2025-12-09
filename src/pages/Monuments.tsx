import { useState, useEffect, useCallback } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Monument {
  id: string;
  title: string;
  seoTitle: string;
  category: "mramor" | "granit";
  image: string;
  alt: string;
  description: string;
}

const monumentsData: Monument[] = [
  {
    id: 'mramoren-pametnik-model-krast-koloni',
    title: 'Луксозен паметник от бял мрамор с колони и кръст',
    seoTitle: 'Надгробен паметник от бял мрамор с колони и кръст | Траурна агенция Кипарис',
    category: 'mramor',
    image: '/assets/monuments/nadgroben-pametnik-byal-mramor-koloni-krast-snimka.webp',
    alt: 'Луксозен надгробен паметник от бял мрамор с две масивни колони и голям кръст отгоре - изработка на Траурна агенция Кипарис',
    description: 'Изящен модел от висококачествен бял мрамор. Композицията включва две странични колони, поддържащи арка с масивен кръст – символ на вярата. Включва мраморни вази и фенер.'
  },
  {
    id: 'mramoren-pametnik-asimetrien-krast-klonka',
    title: 'Мраморен паметник с асиметричен връх, кръст и клонка',
    seoTitle: 'Надгробен паметник от бял мрамор с кръст и клонка | Траурна агенция Кипарис',
    category: 'mramor',
    image: '/assets/monuments/nadgroben-pametnik-byal-mramor-asimetrien-s-krast-i-listo.webp',
    alt: 'Надгробен паметник от бял мрамор с релефен кръст, декоративна клонка и фенер - Траурна агенция Кипарис',
    description: 'Красив паметник от бял мрамор с асиметричен дизайн. Декориран с дълбоко изрязан кръст върху бучарда (грапав фон) и изящна растителна орнаментика в дясната част.'
  },
  {
    id: 'siv-mramor-sartse',
    title: "Модел Ангелска Обич",
    seoTitle: "Надгробен паметник от сив мрамор - форма Сърце",
    category: "mramor",
    image: "/assets/monuments/nadgroben-pametnik-siv-mramor-sartse-forma-s-krast-i-snimka.webp",
    alt: "Надгробен паметник от сив мрамор с форма на сърце, стилизирани криле и кръст",
    description: "Трогателен дизайн от сив мрамор с форма на сърце и артистични релефни елементи, символизиращ неугасваща любов."
  },
  {
    id: 'mramor-arka-kotva',
    title: "Модел Надежда",
    seoTitle: "Надгробен паметник от бял мрамор тип Арка с Котва",
    category: "mramor",
    image: "/assets/monuments/nadgroben-pametnik-byal-mramor-arka-kotva.webp",
    alt: "Надгробен паметник тип арка от бял мрамор с гравиран златен символ котва",
    description: "Символичен модел с форма на арка и златен гравир на котва, олицетворяващ вярата и надеждата."
  },
  {
    id: 'mramor-asim-list',
    title: "Модел Хармония",
    seoTitle: "Асиметричен надгробен паметник от бял мрамор с Кръст",
    category: "mramor",
    image: "/assets/monuments/nadgroben-pametnik-byal-mramor-asimetrichen-s-krast-i-lista.webp",
    alt: "Асиметричен мраморен паметник с релефна украса от лаврови листа и каменен кръст",
    description: "Артистичен асиметричен дизайн, съчетаващ природни мотиви и духовна символика в бял мрамор."
  },
  {
    id: 'mramor-rozarium',
    title: "Модел Розариум",
    seoTitle: "Луксозен паметник от бял мрамор с релефни рози",
    category: "mramor",
    image: "/assets/monuments/nadgroben-pametnik-byal-mramor-zaoblen-s-relefni-rozi-i-krast.webp",
    alt: "Луксозен паметник от бял мрамор със заоблен връх, релефни рози и златен надпис",
    description: "Нежен и класически дизайн от бял мрамор с богато орнаментирани рози, изразяващи любов и почит."
  },
  {
    id: 'granit-siv-edinstvo',
    title: "Модел Единство",
    seoTitle: "Двоен семеен паметник от сив гранит с Кръст",
    category: "granit",
    image: "/assets/monuments/nadgroben-pametnik-siv-granit-dvoin-s-razrez-tri-snimki.webp",
    alt: "Двоен семеен паметник от светъл сив гранит с дизайн на пресечен кръст",
    description: "Масивен семеен модел от висококачествен сив гранит, символизиращ вечната връзка чрез централен кръст."
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

const Monuments = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredMonuments = selectedCategory === "all" 
    ? monumentsData 
    : monumentsData.filter(m => m.category === selectedCategory);

  const selectedMonument = selectedIndex !== null ? filteredMonuments[selectedIndex] : null;

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (selectedIndex === 0) {
      setSelectedIndex(filteredMonuments.length - 1);
    }
  }, [selectedIndex, filteredMonuments.length]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null && selectedIndex < filteredMonuments.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (selectedIndex === filteredMonuments.length - 1) {
      setSelectedIndex(0);
    }
  }, [selectedIndex, filteredMonuments.length]);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          closeLightbox();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext, closeLightbox]);

  const openLightbox = (monumentId: string) => {
    const index = filteredMonuments.findIndex(m => m.id === monumentId);
    if (index !== -1) {
      setSelectedIndex(index);
    }
  };

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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Надгробни Паметници</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Изработка и монтаж на качествени надгробни паметници от гранит и мрамор
            </p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-10">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">Всички</TabsTrigger>
              <TabsTrigger value="mramor">Мрамор</TabsTrigger>
              <TabsTrigger value="granit">Гранит</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Mobile: 1 column, Desktop: 2-3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16">
            {filteredMonuments.map((monument) => (
              <Card 
                key={monument.id} 
                className="md:hover:shadow-2xl transition-all duration-300 overflow-hidden border-border bg-card cursor-pointer group"
                onClick={() => openLightbox(monument.id)}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={monument.image}
                    alt={monument.alt}
                    className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient only at bottom - 20% height */}
                  <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  {/* Text overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-base md:text-lg font-semibold text-white">{monument.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Lightbox Modal */}
          <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
            <DialogContent className="max-w-[95vw] md:max-w-5xl h-[90vh] md:h-auto p-0 overflow-hidden bg-black/95 border-none">
              {selectedMonument && (
                <div className="relative flex flex-col h-full">
                  {/* Close button - large for touch */}
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Затвори"
                  >
                    <X className="w-6 h-6 md:w-5 md:h-5 text-white" />
                  </button>

                  {/* Navigation arrows */}
                  <button
                    onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 p-3 md:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Предишен"
                  >
                    <ChevronLeft className="w-8 h-8 md:w-6 md:h-6 text-white" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); goToNext(); }}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 p-3 md:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Следващ"
                  >
                    <ChevronRight className="w-8 h-8 md:w-6 md:h-6 text-white" />
                  </button>

                  {/* Image container */}
                  <div className="flex-1 flex items-center justify-center p-4 pt-16">
                    <img
                      src={selectedMonument.image}
                      alt={selectedMonument.alt}
                      className="max-h-[60vh] md:max-h-[70vh] w-auto object-contain"
                    />
                  </div>

                  {/* Info section */}
                  <div className="p-4 md:p-6 bg-black/80 text-white">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">{selectedMonument.title}</h2>
                    <p className="text-white/80 text-sm md:text-base mb-3">{selectedMonument.description}</p>
                    <p className="text-base md:text-lg">
                      За повече информация: <span className="font-bold text-secondary">02 846 55 24</span>
                    </p>
                    {/* Counter */}
                    <p className="text-white/50 text-sm mt-2">
                      {selectedIndex !== null ? selectedIndex + 1 : 0} / {filteredMonuments.length}
                    </p>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

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
