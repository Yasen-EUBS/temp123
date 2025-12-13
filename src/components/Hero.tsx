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
            Траурна Агенция Кипарис
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Траурна Агенция с дългогодишни традиции, която предлага качествени{" "}
            <span className="text-secondary font-semibold">погребални и траурни услуги</span> и необходимото уважение.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-4 md:pt-6 px-4">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto sm:min-w-[200px]">
              Нашите Услуги
            </Button>
            <Button variant="elegant" size="lg" className="w-full sm:w-auto sm:min-w-[200px]">
              Свържете се с нас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
