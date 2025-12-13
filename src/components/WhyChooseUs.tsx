import { Award, Clock, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Над 20 години опит",
      description: "Познаваме процедурите в София и организираме всичко бързо и точно, с уважение към семейството.",
    },
    {
      icon: Clock,
      title: "Денонощно обслужване",
      description: "Отговаряме 24/7 и съдействаме веднага при спешни случаи.",
    },
    {
      icon: Plane,
      title: "Международен транспорт",
      description: "Осигуряваме превоз на покойник от всички европейски държави и извън Европа. Получавате точна оферта и пълна организация.",
    },
  ];

  const FeatureCard = ({ feature, isMobile = false }: { feature: typeof features[0]; isMobile?: boolean }) => {
    const IconComponent = feature.icon;
    return (
      <Card className={`text-center hover:shadow-xl transition-all duration-300 h-full ${isMobile ? 'mx-2' : ''}`}>
        <CardHeader className={isMobile ? "p-6" : "p-2 md:p-6"}>
          <div className="mx-auto mb-3 text-secondary" aria-hidden="true">
            <IconComponent className={isMobile ? "w-10 h-10" : "w-6 h-6 md:w-10 md:h-10"} />
          </div>
          <CardTitle className={isMobile ? "text-xl" : "text-[0.65rem] leading-tight md:text-xl"}>
            {feature.title}
          </CardTitle>
        </CardHeader>
        <CardContent className={isMobile ? "p-6 pt-0" : "p-1 md:p-6 pt-0"}>
          <p className={`text-muted-foreground leading-relaxed ${isMobile ? 'text-base' : 'hidden md:block text-sm md:text-base'}`}>
            {feature.description}
          </p>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-6 md:py-12 bg-primary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-12">
          <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">Защо да изберете нас</h2>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index}>
                  <FeatureCard feature={feature} isMobile />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
