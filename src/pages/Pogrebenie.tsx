import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, FileCheck, MapPin, TruckIcon, Church, Heart, ChevronDown } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import churchBackground from "@/assets/church-background.png";
import coffinEkonomichen from "@/assets/coffin-ekonomichen.jpg";
import coffinLuksozen from "@/assets/coffin-luksozen.jpg";
import churchTable from "@/assets/church-table.png";

const Pogrebenie = () => {
  const [openPackage1, setOpenPackage1] = useState(false);
  const [openPackage2, setOpenPackage2] = useState(false);

  const offers = [
    { name: "Икономичен пакет", price: "773", priceCurrency: "EUR" },
    { name: "Луксозен пакет", price: "1415", priceCurrency: "EUR" }
  ];

  const productSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Икономичен пакет Погребение",
      "description": "Пълна организация на погребение в София - икономичен пакет.",
      "offers": {
        "@type": "Offer",
        "price": "773",
        "priceCurrency": "EUR"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Луксозен пакет Погребение",
      "description": "Пълна организация на погребение в София - луксозен пакет.",
      "offers": {
        "@type": "Offer",
        "price": "1415",
        "priceCurrency": "EUR"
      }
    }
  ];

  const breadcrumbs = [
    { name: "Начало", url: "/" },
    { name: "Погребални услуги", url: "/pogrebalni-uslugi" },
    { name: "Погребение", url: "/pogrebenie" }
  ];

  const steps = [
    {
      icon: Phone,
      title: "Обаждане 24/7",
      description: "Денонощна линия за спешни случаи и консултации"
    },
    {
      icon: FileCheck,
      title: "Изваждане на акт за смърт и документи",
      description: "Оформяме всички необходими документи и удостоверения"
    },
    {
      icon: MapPin,
      title: "Резервиране на ден и час и гробно място",
      description: "Организираме дата, час и гробно място според желанията"
    },
    {
      icon: TruckIcon,
      title: "Подготовка и транспорт",
      description: "Професионална подготовка и превоз до гробищен парк"
    },
    {
      icon: Church,
      title: "Церемония и опело при желание",
      description: "Организация на опело и церемония според традициите"
    },
    {
      icon: Heart,
      title: "Подкрепа след ритуала",
      description: "Съдействие и консултации и след приключване на церемонията"
    }
  ];


  return (
    <div className="min-h-screen">
      <SEO 
        title="Погребение в София | Траурна агенция Кипарис"
        description="Пълна организация на погребение в София. Реални крайни цени. Денонощно обслужване."
        serviceName="Погребение"
        offers={offers}
        breadcrumbs={breadcrumbs}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Погребение в София</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Поемаме пълната организация с уважение и точност. Предлагаме денонощна консултация и съдействие на близките в трудния момент.
            </p>
          </div>

          {/* Mobile-first: Flex container for reordering - Prices first on mobile */}
          <div className="flex flex-col">
            {/* SEO Article Section - order-2 on mobile (appears second), order-1 on desktop (appears first) */}
            <article className="max-w-[1200px] mx-auto mb-16 px-4 order-2 md:order-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="text-left flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground">Пълна организация на погребение в София</h2>
                  <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4">
                    Траурна агенция Кипарис предлага пълно денонощно съдействие: от констатиране на смърт и издаване на смъртен акт до организацията на ритуала. Работим с всички гробищни паркове в София (Централни софийски гробища, Малашевци, Бакърена фабрика, Бояна и др.).
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                    Нашият екип поема цялата грижа за транспорта, избора на ковчег и заплащането на общинските такси, за да можете да изпратите близкия си с достойнство и спокойствие, без административни тежести.
                  </p>
                </div>
                <div className="hidden md:flex justify-center lg:justify-end">
                  <img 
                    src={churchTable} 
                    alt="Ритуална трапеза в църква - погребение София" 
                    className="rounded-lg w-full max-w-md lg:max-w-lg object-cover"
                    style={{
                      border: '1px solid hsl(var(--accent))',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            </article>

            {/* Package Cards - order-1 on mobile (appears first), order-2 on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8 order-1 md:order-2">
              {/* Package 1 - Икономичен */}
            <Card 
              className="border-border bg-card hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url(${coffinEkonomichen})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">Икономичен пакет</CardTitle>
                <div className="text-3xl md:text-4xl font-bold text-secondary mt-4">773 EUR</div>
                <p className="text-xs md:text-sm text-secondary/80 font-medium mt-2">Крайна цена без скрити такси</p>
                <p className="text-sm text-muted-foreground mt-2">При нов гроб се изисква дървена каса.</p>
              </CardHeader>
              <CardContent>
                <Collapsible open={openPackage1} onOpenChange={setOpenPackage1}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left font-medium hover:text-secondary transition-colors">
                    Виж всичко включено
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openPackage1 ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Административно обслужване и общински такси</li>
                      <li>• Изваждане на акт за смърт</li>
                      <li>• Оформяне на документи и вписване в регистър</li>
                      <li>• Организационна такса</li>
                      <li>• Катафалка в гробищен парк</li>
                      <li>• Изкопаване и зариване на ново гробно място</li>
                      <li>• Ковчег и покров, подготовка и украса на ковчега</li>
                      <li>• 5 бр. некролози и 10 бр. траурни ленти</li>
                      <li>• Надгробен знак</li>
                      <li>• Съхранение в хладилна камера 24 ч.</li>
                      <li>• Извозване от адрес/болница до камера и от камера до гробищен парк</li>
                      <li>• Товаро-разтоварна дейност</li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

            {/* Package 2 - Луксозен */}
            <Card 
              className="border-border bg-card hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url(${coffinLuksozen})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">Луксозен пакет</CardTitle>
                <div className="text-3xl md:text-4xl font-bold text-secondary mt-4">1415 EUR</div>
                <p className="text-xs md:text-sm text-secondary/80 font-medium mt-2">Крайна цена без скрити такси</p>
                <p className="text-sm text-muted-foreground mt-2">Включва опело в църква и осигуряване на безплатно ново гробно място.</p>
              </CardHeader>
              <CardContent>
                <Collapsible open={openPackage2} onOpenChange={setOpenPackage2}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left font-medium hover:text-secondary transition-colors">
                    Виж всичко включено
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openPackage2 ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Административни дейности и организация на агенцията за целия процес</li>
                      <li>• Резервация ден и час и гробно място, вписване в регистъра</li>
                      <li>• Катафалка и вътрешен транспорт по изискване на парковете</li>
                      <li>• Взимане от адрес/болница, подготовка на ковчег</li>
                      <li>• Товаро-разтоварителни дейности</li>
                      <li>• Съхранение в хладилна камера</li>
                      <li>• Обличане, къпане, бръснене/грим</li>
                      <li>• Драпиране и аранжиране</li>
                      <li>• Ковчег масив (каталог №8), драперия от сатен</li>
                      <li>• Кръст дървен с изписани имена</li>
                      <li>• Портрет с рамка А4</li>
                      <li>• Цветя върху пиафлора</li>
                      <li>• Комплекти за раздаване, ритуално жито и погача</li>
                      <li>• Свещи за опело</li>
                      <li>• Забележка: Таксата за опело се заплаща в съответния храм.</li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
            </div>
          </div>

          <p className="text-center text-lg font-semibold text-foreground mb-12">
            Реална крайна цена, без скрити такси.
          </p>

          {/* Necessary Documents Section */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-foreground">Необходими документи за погребение</h2>
            <ul className="space-y-3 text-base md:text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>Съобщение за смърт (издава се от личния лекар или спешна помощ).</span>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>Лична карта на починалия.</span>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>Лична карта на заявителя на погребението.</span>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>Ако починалият е в болница – медицинско свидетелство за смърт.</span>
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
              Обслужваме София и района Оборище. Вижте контактите и картата.
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

export default Pogrebenie;
