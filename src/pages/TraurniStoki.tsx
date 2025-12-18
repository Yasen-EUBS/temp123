import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Truck, Award, ShieldCheck, Leaf } from "lucide-react";

import coffinLuxury from "@/assets/coffin-luksozen.jpg";
import coffinEconomy from "@/assets/coffin-ekonomichen.jpg";
import urnImage from "@/assets/services/urn.png";
import wreathLuxury from "@/assets/wreaths/wreath-luxury.jpg";
import churchTable from "@/assets/church-table.png";
import monumentImage from "@/assets/monument.jpg";

const TraurniStoki = () => {
  const categories = [
    {
      id: "kovchezi",
      title: "Ковчези",
      description: "Богат избор на ковчези от масив и ПДЧ - партньор на завод 'Осогово' и италиански вносители.",
      image: coffinLuxury,
      link: "/traurni-stoki/kovchezi",
    },
    {
      id: "draperii",
      title: "Драперии",
      description: "Луксозни сатенени и памучни драперии и комплекти за ковчег.",
      image: coffinEconomy,
      link: null,
    },
    {
      id: "urni",
      title: "Урни",
      description: "Висококачествени урни от керамика, метал, камък и дърво.",
      image: urnImage,
      link: "/kremacia",
    },
    {
      id: "venci",
      title: "Венци и Пиафлори",
      description: "Траурни венци от естествени цветя, пиафлори и букети за изказване на съболезнования.",
      image: wreathLuxury,
      link: null,
    },
    {
      id: "ketering",
      title: "Кетъринг",
      description: "Ритуални питки, жито, вино и индивидуални пакети за раздаване.",
      image: churchTable,
      link: null,
    },
    {
      id: "pametnici",
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
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 rounded-full px-4 py-2 mb-6">
              <ShieldCheck className="h-4 w-4 text-secondary" />
              <span className="text-sm text-primary-foreground/90">
                Гарантиран произход и качество
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Траурни стоки и атрибути
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Пълен каталог с всичко необходимо за достойно изпращане.
            </p>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="py-6 bg-muted/50 border-b border-border">
          <div className="container mx-auto px-4">
            <p className="text-center text-xs text-muted-foreground mb-3 uppercase tracking-wider">
              Партньори и стандарти
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Award className="h-5 w-5 text-secondary" />
                Ковчези "Осогово" (БГ Стандарт)
              </div>
              <div className="hidden md:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <ShieldCheck className="h-5 w-5 text-secondary" />
                Италиански дизайн и обков
              </div>
              <div className="hidden md:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Leaf className="h-5 w-5 text-secondary" />
                Екологични материали
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto">
              {categories.map((category, index) => {
                const cardContent = (
                  <Card 
                    id={category.id}
                    className={`h-full overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 ${category.link ? "group-hover:border-secondary" : ""}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={category.image}
                        alt={category.title}
                        className={`w-full h-full object-cover ${category.link ? "group-hover:scale-105 transition-transform duration-500" : ""}`}
                      />
                      {/* "Виж моделите" label for clickable cards */}
                      {category.link && (
                        <div className="absolute bottom-2 right-2 bg-secondary/90 text-secondary-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          Виж моделите
                        </div>
                      )}
                    </div>
                    <CardHeader className="p-2 md:p-6 pb-1 md:pb-2">
                      <CardTitle className={`text-sm md:text-xl ${category.link ? "group-hover:text-secondary transition-colors" : ""}`}>
                        {category.title}
                        {category.link && (
                          <span className="ml-1 md:ml-2 text-secondary">→</span>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 md:p-6 pt-0 md:pt-0">
                      <CardDescription className="text-xs md:text-base text-muted-foreground line-clamp-3 md:line-clamp-none">
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

            {/* SEO Text Block */}
            <div className="mt-10 pt-8 border-t border-border text-sm text-muted-foreground space-y-4">
              <h3 className="text-base font-semibold text-foreground">Защо е важно качеството на траурните стоки?</h3>
              <p>
                Изборът на ковчег и траурни атрибути е важна част от ритуала. Траурна агенция Кипарис работи директно с утвърдени производители като 
                <strong className="text-foreground"> завод "Осогово"</strong>, за да гарантира, че продуктите отговарят на държавните стандарти за здравина и екологичност. 
                Това е от съществено значение при полагане в гробни места в натоварени паркове като Малашевци и Бакърена фабрика.
              </p>
              <p>
                Независимо дали търсите икономичен вариант от фазер или луксозен модел от масивно дърво (дъб, махагон), 
                ние предлагаме прозрачни цени без скрити такси.
              </p>
            </div>

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
