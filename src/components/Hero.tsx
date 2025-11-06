import heroImage from "@/assets/hero-image.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Peaceful sunset over cemetery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fade-in">
            Траурна Агенция Кипарис
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Траурна Агенция с дългогодишни традиции, която предлага качествени{" "}
            <span className="text-secondary font-semibold">погребални и траурни услуги</span> и необходимото уважение.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button variant="secondary" size="lg" className="min-w-[200px]">
              Нашите Услуги
            </Button>
            <Button variant="elegant" size="lg" className="min-w-[200px]">
              Свържете се с нас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
