import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, FileCheck, Flame, TruckIcon, Package, Heart, ChevronDown } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import churchBackground from "@/assets/church-background.png";

const Kremacia = () => {
  const [economyExpanded, setEconomyExpanded] = useState(false);
  const [luxuryExpanded, setLuxuryExpanded] = useState(false);

  const offers = [
    { name: "Икономичен пакет", price: "822", priceCurrency: "EUR" },
    { name: "Луксозен пакет", price: "1779", priceCurrency: "EUR" }
  ];

  const breadcrumbs = [
    { name: "Начало", url: "/" },
    { name: "Погребални услуги", url: "/pogrebalni-uslugi" },
    { name: "Кремация", url: "/kremacia" }
  ];

  const steps = [
    {
      icon: Phone,
      title: "Обаждане 24/7",
      description: "Денонощна линия за спешни случаи и консултации"
    },
    {
      icon: FileCheck,
      title: "Документи и разрешително",
      description: "Оформяме всички документи и разрешително за кремация"
    },
    {
      icon: TruckIcon,
      title: "Транспорт и съхранение",
      description: "Превоз до хладилна камера и до крематориума"
    },
    {
      icon: Flame,
      title: "Кремация",
      description: "Професионална кремация в Софийския крематориум"
    },
    {
      icon: Package,
      title: "Урнополагане",
      description: "Полагане на урната в гроб или колумбарийна ниша"
    },
    {
      icon: Heart,
      title: "Подкрепа след ритуала",
      description: "Съдействие и консултации след приключване на церемонията"
    }
  ];

  const economyItems = {
    visible: [
      "Пълно административно обслужване (Смъртен акт, такси, документи)",
      "Такса за Кремация (Крематориум София)",
      "Стандартен ковчег с подготовка"
    ],
    hidden: [
      "Транспорт (Катафалка в гробищен парк)",
      "Извозване от адрес/болница и съхранение в камера (24 ч.)",
      "Урна с табелка",
      "Комплект траурни аксесоари (5 некролога, 10 ленти)"
    ]
  };

  const luxuryItems = {
    visible: [
      "Всички административни и кремационни такси",
      "Ритуал в Голяма ритуална зала (Централни гробища)",
      "Ритуалчик / Свещеник + Професионално озвучаване"
    ],
    hidden: [
      "Луксозен ковчег (Масив ПДЧ) с драперия и аранжировка",
      "Урна от черен гранит + Урнова табела",
      "Кетъринг за 30 души (Меню №4) + Салон за раздаване",
      "Пълна санитарна подготовка (Къпане, грим, обличане)",
      "Цветна аранжировка (Рози, лилиум, гербер върху пиафлора)",
      "Кръст с изписани имена и Портрет с рамка",
      "Пълен транспорт и присъствие на траурен агент"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Кремация в София | Траурна агенция Кипарис"
        description="Пълна организация на кремация в София. Реални крайни цени от 822 EUR. Денонощно: 02 846 55 24."
        serviceName="Кремация"
        offers={offers}
        breadcrumbs={breadcrumbs}
        schemaType="Product"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="py-16 md:py-24 relative bg-background"
        style={{
          backgroundImage: `linear-gradient(to bottom, #1b2b1b 0%, rgba(27, 43, 27, 0.85) 30%, rgba(27, 43, 27, 0.4) 70%, transparent 100%), linear-gradient(rgba(0, 20, 0, 0.65), rgba(0, 20, 0, 0.65)), url(${churchBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundAttachment: window.innerWidth >= 768 ? 'fixed' : 'scroll',
          backgroundBlendMode: 'normal, overlay, normal'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Кремация в София</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Професионална организация на кремация с уважение и достойнство. Денонощна консултация и пълно съдействие.
            </p>
          </div>

          {/* Mobile-first: Flex container for reordering - Prices first on mobile */}
          <div className="flex flex-col">
            {/* SEO Article Section - order-2 on mobile (appears second), order-1 on desktop (appears first) */}
            <article className="max-w-[1200px] mx-auto mb-16 px-4 order-2 md:order-1">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground">Организация на кремация в София</h2>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Траурна агенция Кипарис предлага пълно съдействие при организиране на кремация в Софийския крематориум. 
                  Ние поемаме грижата за всички документи, запазване на час и урнополагане в съществуващ гроб или колумбарийна стена.
                </p>
              </div>
            </article>

            {/* Package Cards - order-1 on mobile (appears first), order-2 on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8 order-1 md:order-2">
              {/* Package 1 - Икономичен */}
              <Card className="border-border bg-card/95 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl md:text-3xl">Икономичен пакет</CardTitle>
                  <div className="text-2xl md:text-4xl font-bold text-secondary mt-2">822 EUR</div>
                  <p className="text-xs text-secondary/80 font-medium mt-1">Крайна цена без скрити такси</p>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="space-y-1.5 text-xs md:text-sm text-muted-foreground">
                    {economyItems.visible.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                  {/* Hidden content for SEO - collapsible */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    economyExpanded ? "max-h-96 opacity-100 mt-1.5" : "max-h-0 opacity-0"
                  )}>
                    <ul className="space-y-1.5 text-xs md:text-sm text-muted-foreground">
                      {economyItems.hidden.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => setEconomyExpanded(!economyExpanded)}
                    className="flex items-center gap-1 text-xs text-secondary hover:text-secondary/80 mt-3 transition-colors"
                  >
                    <span>{economyExpanded ? "Скрий описанието" : "Виж пълното описание"}</span>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      economyExpanded && "rotate-180"
                    )} />
                  </button>
                </CardContent>
              </Card>

              {/* Package 2 - Луксозен */}
              <Card className="border-border bg-card/95 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl md:text-3xl">Луксозен пакет</CardTitle>
                  <div className="text-2xl md:text-4xl font-bold text-secondary mt-2">1779 EUR</div>
                  <p className="text-xs text-secondary/80 font-medium mt-1">Крайна цена без скрити такси</p>
                  <p className="text-xs md:text-sm text-accent font-medium mt-2">Включва граждански/църковен ритуал и кетъринг</p>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="space-y-1.5 text-xs md:text-sm text-muted-foreground">
                    {luxuryItems.visible.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                  {/* Hidden content for SEO - collapsible */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    luxuryExpanded ? "max-h-96 opacity-100 mt-1.5" : "max-h-0 opacity-0"
                  )}>
                    <ul className="space-y-1.5 text-xs md:text-sm text-muted-foreground">
                      {luxuryItems.hidden.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => setLuxuryExpanded(!luxuryExpanded)}
                    className="flex items-center gap-1 text-xs text-secondary hover:text-secondary/80 mt-3 transition-colors"
                  >
                    <span>{luxuryExpanded ? "Скрий описанието" : "Виж пълното описание"}</span>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      luxuryExpanded && "rotate-180"
                    )} />
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>

          <p className="text-center text-lg font-semibold text-foreground mb-12">
            Реална крайна цена, без скрити такси.
          </p>

          {/* Necessary Documents Section */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-foreground">Необходими документи за кремация</h2>
            <ul className="space-y-3 text-base md:text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>Съобщение за смърт.</span>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>Разрешително за кремация (Талон от лекар).</span>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>Лична карта на починалия.</span>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>Лична карта на заявителя (родствена връзка).</span>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>Декларация за идентичност (попълва се в офиса).</span>
              </li>
            </ul>
          </section>

          {/* Steps Section */}
          <div className="mt-20 max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Как протича процесът</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="border-border bg-card hover:shadow-xl transition-all duration-300 p-2 md:p-0">
                    <CardHeader className="p-2 md:p-6 pb-1 md:pb-2">
                      <div className="mb-1 md:mb-4 text-secondary">
                        <IconComponent className="w-6 h-6 md:w-10 md:h-10" />
                      </div>
                      <CardTitle className="text-[0.8rem] leading-tight md:text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-1 pt-0 md:p-6 md:pt-0">
                      <CardDescription className="text-[10px] leading-tight md:text-base">{step.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>


          {/* Local SEO Block */}
          <div className="mt-20 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Обслужваме София и района Оборище</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Софийският крематориум се намира в Централни софийски гробища. Свържете се с нас за повече информация.
            </p>
            <Button variant="secondary" asChild size="lg">
              <Link to="/kontakti">Вижте нашите контакти</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kremacia;
