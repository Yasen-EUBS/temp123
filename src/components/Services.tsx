import { Heart, Flower, Building2, Phone } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import wreathImage from "@/assets/wreath.jpg";
import monumentImage from "@/assets/monument.jpg";

export const Services = () => {
  const services = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Превоз на Покойник",
      description: "Професионален превоз на покойници с дискретност и уважение. Осигуряваме превоз на територията на цялата страна и в чужбина.",
    },
    {
      icon: <Flower className="w-12 h-12" />,
      title: "Погребения",
      description: "Пълна организация на погребални церемонии според традициите и желанията на семейството. Всички необходими документи и услуги.",
      image: wreathImage,
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Кремация",
      description: "Организиране на кремация с професионализъм и уважение. Съдействие за всички формалности и церемонии.",
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Надгробни Паметници",
      description: "Изработка и монтаж на качествени надгробни паметници от гранит и мрамор. Индивидуален дизайн според вашите желания.",
      image: monumentImage,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Нашите Услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Предлагаме пълен спектър от траурни услуги с професионализъм и съпричастност
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
