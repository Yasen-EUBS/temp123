import { Link } from "react-router-dom";
import hearse from "@/assets/services/hearse.png";
import cemetery from "@/assets/services/cemetery.png";
import urn from "@/assets/services/urn.png";
import monuments from "@/assets/services/monuments.png";

export const Services = () => {
  const services = [
    {
      image: hearse,
      title: "Превоз на покойник",
      description: "Дискретен и професионален превоз на покойник",
      link: "/funeral-services"
    },
    {
      image: cemetery,
      title: "Погребения",
      description: "Пълна организация на погребението с внимание към всеки детайл",
      link: "/funeral-services"
    },
    {
      image: urn,
      title: "Кремация",
      description: "Организация на кремация с пълно съдействие",
      link: "/funeral-services"
    },
    {
      image: monuments,
      title: "Надгробни паметници",
      description: "Изработка и монтаж на качествени паметници",
      link: "/monuments"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Нашите Услуги</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Предлагаме пълен спектър от траурни услуги с професионализъм и съпричастност
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 items-stretch">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="group flex h-full"
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 border border-border flex flex-col w-full">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                    <span className="ml-1 md:ml-2 text-secondary">→</span>
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};