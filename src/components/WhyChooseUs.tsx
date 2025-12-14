import { Award, Clock, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export const WhyChooseUs = () => {
  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );

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

  const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
    const IconComponent = feature.icon;
    return (
      <Card className="text-center hover:shadow-xl transition-all duration-300 h-full">
        <CardHeader className="p-4 md:p-6">
          <div className="mx-auto mb-3 text-secondary" aria-hidden="true">
            <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <CardTitle className="text-base md:text-xl">
            {feature.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
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

        {/* Mobile Carousel with Peeking & Autoplay */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-2 basis-[85%]">
                  <FeatureCard feature={feature} />
                </CarouselItem>
              ))}
            </CarouselContent>
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
