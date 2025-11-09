import { Award, Clock, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Над 20 години опит",
      description: "Познаваме процедурите в София и организираме всичко бързо и точно, с уважение към семейството.",
    },
    {
      icon: <Clock className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Денонощно обслужване",
      description: "Отговаряме 24/7 и съдействаме веднага при спешни случаи.",
    },
    {
      icon: <Plane className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Международен транспорт",
      description: "Осигуряваме превоз на покойник от всички европейски държави и извън Европа. Получавате точна оферта и пълна организация.",
    },
  ];

  return (
    <section className="py-6 md:py-12 bg-primary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Защо да изберете нас</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-3 text-secondary" aria-hidden="true">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
