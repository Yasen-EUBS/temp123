import heroImage from "@/assets/hero-sunset.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Кипарис траурна агенция"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-12 md:py-0">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
            Кипарис 2000 | Денонощно Международно Репатриране и Траурни Услуги
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Траурна агенция в София – Район Оборище, ул. „Мърфи“ 28. Обслужваме София Център, Подуяне, Гробищен парк Малашевци, Бакърена фабрика и Централни софийски гробища. Денонощно международно репатриране и{" "}
            <span className="text-secondary font-semibold">достойни траурни услуги</span> с уважение към всяко семейство.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-4 md:pt-6 px-4">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto sm:min-w-[200px]"
              asChild
            >
              <a href="/transport-na-pokojnik" aria-label="Разгледайте цени за международно репатриране и превоз на покойник">
                Разгледайте цени за репатриране
              </a>
            </Button>
            <Button
              variant="elegant"
              size="lg"
              className="w-full sm:w-auto sm:min-w-[200px]"
              asChild
            >
              <a href="tel:028465524" aria-label="Свържете се с денонощен агент на телефон 02 846 55 24">
                Свържете се с денонощен агент
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
