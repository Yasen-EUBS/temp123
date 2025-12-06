import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Truck } from "lucide-react";

import coffinLuxury from "@/assets/coffin-luksozen.jpg";
import coffinEconomy from "@/assets/coffin-ekonomichen.jpg";
import urnImage from "@/assets/services/urn.png";
import wreathLuxury from "@/assets/wreaths/wreath-luxury.jpg";
import churchTable from "@/assets/church-table.png";
import monumentImage from "@/assets/monument.jpg";

const TraurniStoki = () => {
  const categories = [
    {
      title: "Ковчези",
      description: "Богат избор на ковчези от масив и ПДЧ - от икономични до луксозни модели.",
      image: coffinLuxury,
      link: null,
    },
    {
      title: "Драперии",
      description: "Луксозни сатенени и памучни драперии и комплекти за ковчег.",
      image: coffinEconomy,
      link: null,
    },
    {
      title: "Урни",
      description: "Висококачествени урни от керамика, метал, камък и дърво.",
      image: urnImage,
      link: null,
    },
    {
      title: "Венци и Пиафлори",
      description: "Траурни венци от естествени цветя, пиафлори и букети за изказване на съболезнования.",
      image: wreathLuxury,
      link: null,
    },
    {
      title: "Кетъринг",
      description: "Ритуални питки, жито, вино и индивидуални пакети за раздаване.",
      image: churchTable,
      link: null,
    },
    {
      title: "Паметници",
      description: "Проектиране и изработка на надгробни паметници от мрамор и гранит.",
      image: monumentImage,
      link: "/nadgrobni-pametnici",
    },
  ];

  const cemeteries = [
    "Централни Софийски гробища",
    "Гробищен парк Бояна",
    "Гробищен парк Малашевци",
    "Гробищен парк Горна Баня",
    "Гробищен парк Орландовци",
    "Гробищен парк Княжево",
  ];

  return (
    <>
      <SEO
        title="Траурни стоки София - Ковчези, Урни, Венци и Кетъринг | Кипарис"
        description="Магазин за траурни стоки в София. Предлагаме ковчези, драперии, урни, венци, пиафлори и организиране на кетъринг."
        serviceName="Траурни стоки"
        breadcrumbs={[
          { name: "Начало", url: "/" },
          { name: "Траурни стоки", url: "/traurni-stoki" },
        ]}
      />
      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          className="relative py-20 md:py-28"
          style={{
            background: "linear-gradient(to bottom, hsl(var(--primary)) 0%, hsl(var(--primary)/0.85) 100%)",
          }}
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Траурни стоки и атрибути
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Пълен каталог с всичко необходимо за достойно изпращане.
            </p>
          </div>
        </section>

        {/* Product Categories Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {categories.map((category, index) => {
                const cardContent = (
                  <Card className={`h-full overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 ${category.link ? "group-hover:border-secondary" : ""}`}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className={`w-full h-full object-cover ${category.link ? "group-hover:scale-105 transition-transform duration-500" : ""}`}
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className={`text-xl ${category.link ? "group-hover:text-secondary transition-colors" : ""}`}>
                        {category.title}
                        {category.link && (
                          <span className="ml-2 text-secondary">→</span>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-muted-foreground">
                        {category.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );

                return category.link ? (
                  <Link key={index} to={category.link} className="block group">
                    {cardContent}
                  </Link>
                ) : (
                  <div key={index} className="block">
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Delivery Information */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-8">
              <Truck className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Доставка до всички гробища в София</h2>
              <p className="text-muted-foreground">
                Осигуряваме безплатна доставка на всички траурни стоки до избрания гробищен парк.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="cemeteries" className="border-border">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-secondary" />
                    Обслужвани гробищни паркове
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pt-2">
                    {cemeteries.map((cemetery, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        {cemetery}
                      </li>
                    ))}
                    <li className="flex items-center gap-2 text-muted-foreground italic pt-2">
                      <span className="w-2 h-2 rounded-full bg-secondary/50" />
                      ...и всички други гробища в София и околността
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* CTA */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                За запитвания и поръчки се свържете с нас:
              </p>
              <a
                href="tel:028465524"
                className="inline-flex items-center gap-2 bg-cta text-cta-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                ДЕНОНОЩНО: 02 846 55 24
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TraurniStoki;
