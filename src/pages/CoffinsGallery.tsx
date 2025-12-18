import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { coffinsData, Coffin } from "@/data/coffinsData";
import { Phone, X, Check, ChevronLeft, ChevronRight, Filter } from "lucide-react";
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

// Helper to extract unique materials from data
const getUniqueMaterials = (data: Coffin[]) => {
  const materials = new Set<string>();
  data.forEach((coffin) => {
    if (coffin.specs.material) {
      // Simplify material names for filtering
      const material = coffin.specs.material;
      if (material.toLowerCase().includes("масив")) materials.add("Масивно дърво");
      else if (material.toLowerCase().includes("mdf") || material.toLowerCase().includes("фазер")) materials.add("Фазер / MDF");
      else if (material.toLowerCase().includes("пдч")) materials.add("ПДЧ");
      else if (material.toLowerCase().includes("метал")) materials.add("Метал");
      else if (material.toLowerCase().includes("месинг")) materials.add("Месинг");
      else materials.add(material.split(" ")[0]); // First word as fallback
    }
  });
  return Array.from(materials);
};

// Helper to get origin display name
const getOriginLabel = (origin: string | undefined) => {
  if (!origin) return "Български";
  return origin === "BG" ? "Български" : "Италиански";
};

// Filter options types
type FilterCategory = "material" | "origin" | "class";
type ActiveFilters = {
  material: string[];
  origin: string[];
  class: string[];
};

const CoffinsGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    material: [],
    origin: [],
    class: [],
  });
  const [showFilters, setShowFilters] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Calculate filter options with counts
  const filterOptions = useMemo(() => {
    // Material filters
    const materialCounts: Record<string, number> = {};
    coffinsData.forEach((coffin) => {
      const material = coffin.specs.material.toLowerCase();
      let key = "";
      if (material.includes("масив")) key = "Масивно дърво";
      else if (material.includes("mdf") || material.includes("фазер")) key = "Фазер / MDF";
      else if (material.includes("пдч")) key = "ПДЧ";
      else if (material.includes("метал")) key = "Метал";
      else if (material.includes("месинг")) key = "Месинг";
      else key = "Друг";
      
      materialCounts[key] = (materialCounts[key] || 0) + 1;
    });

    // Origin filters
    const originCounts: Record<string, number> = { "Български": 0, "Италиански": 0 };
    coffinsData.forEach((coffin) => {
      const origin = getOriginLabel(coffin.brand?.origin);
      originCounts[origin] = (originCounts[origin] || 0) + 1;
    });

    // Class filters (category mapping)
    const classCounts: Record<string, number> = {
      "Икономичен": 0,
      "Стандартен": 0,
      "Луксозен": 0,
    };
    coffinsData.forEach((coffin) => {
      if (coffin.category === "economy") classCounts["Икономичен"]++;
      else if (coffin.category === "standard") classCounts["Стандартен"]++;
      else if (["luxury", "premium", "italian"].includes(coffin.category)) classCounts["Луксозен"]++;
    });

    return {
      material: Object.entries(materialCounts).filter(([_, count]) => count > 0),
      origin: Object.entries(originCounts).filter(([_, count]) => count > 0),
      class: Object.entries(classCounts).filter(([_, count]) => count > 0),
    };
  }, []);

  // Apply filters to products
  const filteredProducts = useMemo(() => {
    return coffinsData.filter((coffin) => {
      // Material filter
      if (activeFilters.material.length > 0) {
        const material = coffin.specs.material.toLowerCase();
        const matchesMaterial = activeFilters.material.some((filter) => {
          if (filter === "Масивно дърво") return material.includes("масив");
          if (filter === "Фазер / MDF") return material.includes("mdf") || material.includes("фазер");
          if (filter === "ПДЧ") return material.includes("пдч");
          if (filter === "Метал") return material.includes("метал");
          if (filter === "Месинг") return material.includes("месинг");
          return false;
        });
        if (!matchesMaterial) return false;
      }

      // Origin filter
      if (activeFilters.origin.length > 0) {
        const origin = getOriginLabel(coffin.brand?.origin);
        if (!activeFilters.origin.includes(origin)) return false;
      }

      // Class filter (category mapping)
      if (activeFilters.class.length > 0) {
        const matchesClass = activeFilters.class.some((filter) => {
          if (filter === "Икономичен") return coffin.category === "economy";
          if (filter === "Стандартен") return coffin.category === "standard";
          if (filter === "Луксозен") return ["luxury", "premium", "italian"].includes(coffin.category);
          return false;
        });
        if (!matchesClass) return false;
      }

      return true;
    });
  }, [activeFilters]);

  const selectedCoffin = selectedIndex !== null ? filteredProducts[selectedIndex] : null;

  // Toggle filter
  const toggleFilter = (category: FilterCategory, value: string) => {
    setActiveFilters((prev) => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
    setSelectedIndex(null); // Reset selection when filters change
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveFilters({ material: [], origin: [], class: [] });
    setSelectedIndex(null);
  };

  const hasActiveFilters = Object.values(activeFilters).some((arr) => arr.length > 0);

  const getTier = (price: number | string) => {
    if (typeof price === "string") return { label: "Италиански", color: "italian" };
    if (price < 300) return { label: "Икономичен", color: "gray" };
    if (price < 1100) return { label: "Стандартен", color: "blue" };
    if (price < 2000) return { label: "Премиум", color: "gold" };
    return { label: "Елитен", color: "purple" };
  };

  const tierColors: Record<string, string> = {
    gray: "bg-gray-500/20 text-gray-300 border-gray-500/30",
    blue: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    gold: "bg-coffin-gold/20 text-coffin-gold border-coffin-gold/30",
    purple: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    italian: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  };

  const specLabels: Record<string, string> = {
    material: "Материал",
    color: "Цвят",
    handles: "Дръжки",
    lining: "Тапицерия",
    dimensions: "Размери",
    finish: "Завършек",
  };

  const handleCardClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedIndex(index);
  };

  const goToNext = useCallback(() => {
    if (selectedIndex !== null && selectedIndex < filteredProducts.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (selectedIndex === filteredProducts.length - 1) {
      setSelectedIndex(0);
    }
  }, [selectedIndex, filteredProducts.length]);

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (selectedIndex === 0) {
      setSelectedIndex(filteredProducts.length - 1);
    }
  }, [selectedIndex, filteredProducts.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToNext, goToPrevious]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrevious();
    }

    touchStartX.current = null;
    touchEndX.current = null;
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
        <section className="relative py-12 md:py-20 bg-coffin-bg">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat" />
          <div className="container mx-auto px-4 relative z-10 text-left md:text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-coffin-text mb-4">
              Ковчези
            </h1>
            {/* SEO Intro */}
            <p className="text-base md:text-lg text-coffin-text/90 max-w-3xl md:mx-auto leading-relaxed">
              Траурна агенция Кипарис предлага богата гама от висококачествени български ковчези с марка{" "}
              <span className="text-[#E3C86B] font-semibold">ОСОГОВО</span> и луксозни{" "}
              <span className="text-[#E3C86B] font-semibold">ИТАЛИАНСКИ</span> модели.
            </p>
            {/* Materials SEO Block */}
            <p className="text-sm md:text-base text-coffin-text/70 max-w-3xl md:mx-auto mt-3 leading-relaxed">
              Изработка от масивно дърво (бук, чам), MDF, ПДЧ, фазер и талашит. Всеки модел включва специфичен обков и възможност за избор на вътрешна драперия.
            </p>
            <p className="text-coffin-gold font-semibold mt-4">
              Крайна цена без скрити такси
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-6 md:py-8 bg-coffin-bg border-b border-coffin-gold/20">
          <div className="container mx-auto px-4">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 text-coffin-text mb-4 px-3 py-2 border border-coffin-gold/30 rounded-lg hover:border-coffin-gold/60 transition-colors"
            >
              <Filter className="h-4 w-4 text-coffin-gold" />
              <span>Филтри</span>
              {hasActiveFilters && (
                <span className="ml-2 px-2 py-0.5 text-xs bg-coffin-gold text-coffin-bg rounded-full">
                  {Object.values(activeFilters).flat().length}
                </span>
              )}
            </button>

            {/* Filter Groups */}
            <div className={`${showFilters ? "block" : "hidden"} md:block space-y-4`}>
              {/* Material Filters */}
              <div>
                <h3 className="text-sm font-semibold text-coffin-text/80 mb-2">Материал</h3>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.material.map(([label, count]) => (
                    <button
                      key={label}
                      onClick={() => toggleFilter("material", label)}
                      className={`px-3 py-1.5 text-xs md:text-sm rounded-full border transition-all duration-200 ${
                        activeFilters.material.includes(label)
                          ? "bg-[#E3C86B] text-[#1A2F1E] border-[#E3C86B] font-semibold"
                          : "border-coffin-gold/30 text-coffin-text/80 hover:border-coffin-gold/60 hover:text-coffin-text"
                      }`}
                    >
                      {label} ({count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Origin Filters */}
              <div>
                <h3 className="text-sm font-semibold text-coffin-text/80 mb-2">Произход</h3>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.origin.map(([label, count]) => (
                    <button
                      key={label}
                      onClick={() => toggleFilter("origin", label)}
                      className={`px-3 py-1.5 text-xs md:text-sm rounded-full border transition-all duration-200 ${
                        activeFilters.origin.includes(label)
                          ? "bg-[#E3C86B] text-[#1A2F1E] border-[#E3C86B] font-semibold"
                          : "border-coffin-gold/30 text-coffin-text/80 hover:border-coffin-gold/60 hover:text-coffin-text"
                      }`}
                    >
                      {label} ({count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Class Filters */}
              <div>
                <h3 className="text-sm font-semibold text-coffin-text/80 mb-2">Клас</h3>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.class.map(([label, count]) => (
                    <button
                      key={label}
                      onClick={() => toggleFilter("class", label)}
                      className={`px-3 py-1.5 text-xs md:text-sm rounded-full border transition-all duration-200 ${
                        activeFilters.class.includes(label)
                          ? "bg-[#E3C86B] text-[#1A2F1E] border-[#E3C86B] font-semibold"
                          : "border-coffin-gold/30 text-coffin-text/80 hover:border-coffin-gold/60 hover:text-coffin-text"
                      }`}
                    >
                      {label} ({count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters & Results Count */}
              <div className="flex items-center justify-between pt-2">
                <p className="text-sm text-coffin-text/60">
                  Показани: <span className="text-coffin-gold font-semibold">{filteredProducts.length}</span> от {coffinsData.length} продукта
                </p>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-coffin-gold hover:underline"
                  >
                    Изчисти филтрите
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Coffins Grid */}
        <section className="py-12 md:py-16 bg-coffin-bg">
          <div className="container mx-auto px-4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-coffin-text/60 text-lg mb-4">Няма намерени продукти с избраните филтри.</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-coffin-gold text-coffin-bg rounded-lg font-semibold hover:bg-coffin-gold/90 transition-colors"
                >
                  Изчисти филтрите
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 max-w-7xl mx-auto">
              {filteredProducts.map((coffin, index) => (
                <div
                  key={coffin.id}
                  onClick={(e) => handleCardClick(index, e)}
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
                    {/* Category & Origin Badges */}
                      <div className="flex items-center gap-2 mb-1 md:mb-2">
                        {(() => {
                          const tier = getTier(coffin.priceEUR);
                          return (
                            <span className={`inline-block text-[10px] md:text-xs px-2 py-0.5 rounded border ${tierColors[tier.color]}`}>
                              {tier.label}
                            </span>
                          );
                        })()}
                        {/* Italian Origin Badge */}
                        {coffin.brand?.origin === "IT" && (
                          <span className="inline-flex items-center gap-1 text-[10px] md:text-xs text-[#F0F0F0]">
                            <span className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full overflow-hidden flex-shrink-0 border border-white/20">
                              <svg viewBox="0 0 3 2" className="w-full h-full">
                                <rect width="1" height="2" x="0" fill="#009246"/>
                                <rect width="1" height="2" x="1" fill="#FFFFFF"/>
                                <rect width="1" height="2" x="2" fill="#CE2B37"/>
                              </svg>
                            </span>
                            Италия
                          </span>
                        )}
                      </div>
                      {/* Title */}
                      <h2 className="text-xs md:text-base font-semibold text-coffin-text mb-0.5 md:mb-1 line-clamp-2 group-hover:text-coffin-gold transition-colors">
                        {coffin.title}
                      </h2>
                      {/* Material Badge */}
                      <p className="text-[9px] md:text-xs text-[#E3C86B] underline underline-offset-2 mb-1 md:mb-2 truncate">
                        {coffin.specs.material}
                      </p>
                      {/* Price */}
                      <p className="text-sm md:text-lg font-bold text-coffin-gold">
                        {typeof coffin.priceEUR === "number" ? `${coffin.priceEUR} EUR` : coffin.priceEUR}
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
            )}
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

      {/* Product Modal with Gallery Navigation */}
      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent 
          className="max-w-[98vw] md:max-w-6xl max-h-[95vh] p-0 overflow-hidden border border-[#E3C86B]"
          style={{ backgroundColor: "#1A2F1E" }}
        >
          {selectedCoffin && (
            <div className="relative flex flex-col md:flex-row h-full max-h-[95vh]">
              {/* Close button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-2 right-2 md:top-4 md:right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                aria-label="Затвори"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </button>

              {/* Desktop: Navigation arrows on sides */}
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/40 hover:bg-black/60 transition-colors items-center justify-center"
                aria-label="Предишен"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/40 hover:bg-black/60 transition-colors items-center justify-center"
                aria-label="Следващ"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>

              {/* Left: Image Section */}
              <div 
                className="relative flex-shrink-0 w-full md:w-[65%] bg-black flex items-center justify-center"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  key={selectedCoffin.id}
                  src={`/assets/coffins/${selectedCoffin.image}`}
                  alt={selectedCoffin.alt}
                  className="w-full h-full max-h-[50vh] md:max-h-[85vh] object-contain"
                />

                {/* Counter overlay */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded-full">
                  <span className="text-white/80 text-sm">
                    {selectedIndex !== null ? selectedIndex + 1 : 0} / {filteredProducts.length}
                  </span>
                </div>

                {/* Mobile: Navigation arrows at bottom */}
                <div className="md:hidden absolute bottom-10 left-0 right-0 flex justify-between px-4">
                  <button
                    onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                    className="p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    aria-label="Предишен"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); goToNext(); }}
                    className="p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    aria-label="Следващ"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Right: Details Sidebar */}
              <div className="flex-1 overflow-y-auto p-4 md:p-5 flex flex-col">
                <DialogTitle className="sr-only">{selectedCoffin.title}</DialogTitle>
                
                {/* Category Badge */}
                {(() => {
                  const tier = getTier(selectedCoffin.priceEUR);
                  return (
                    <span className={`inline-block self-start text-xs px-3 py-1 mb-3 rounded border ${tierColors[tier.color]}`}>
                      {tier.label}
                    </span>
                  );
                })()}

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {selectedCoffin.title}
                </h2>
                {/* Material Badge */}
                <p className="text-sm text-[#E3C86B] underline underline-offset-2 mb-4">
                  {selectedCoffin.specs.material}
                </p>

                {/* Price Section */}
                <div className="mb-4 p-3 rounded-lg bg-black/20 border border-[#E3C86B]/30">
                  <p className="text-2xl md:text-3xl font-bold text-[#E3C86B]">
                    {typeof selectedCoffin.priceEUR === "number" ? `${selectedCoffin.priceEUR} EUR` : selectedCoffin.priceEUR}
                  </p>
                  <p className="text-xs text-white/60 mt-1 flex items-center gap-1">
                    <Check className="h-3 w-3 text-[#E3C86B]" />
                    {typeof selectedCoffin.priceEUR === "number" ? "Крайна цена без скрити такси" : "Обадете се за персонална оферта"}
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
