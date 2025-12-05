import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Truck, Plane, MapPin, Phone, FileText, Snowflake, Clock, Shield, Building } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import hearseImage from "@/assets/hearse-transport.png";

const TransportNaPokojnik = () => {
  const serviceCards = [
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Сухопътен транспорт от Европа",
      description: "Специализирани хладилни автомобили за репатриране на тленни останки от всички държави в ЕС.",
      features: [
        { icon: <Shield className="w-4 h-4" />, text: "Лицензиран транспорт" },
        { icon: <Clock className="w-4 h-4" />, text: "24/7 Логистика" },
        { icon: <Snowflake className="w-4 h-4" />, text: "Хладилна камера" }
      ]
    },
    {
      icon: <Plane className="w-10 h-10" />,
      title: "Въздушен транспорт (Светът)",
      description: "Организация на карго полети и репатриране от далечни дестинации (САЩ, Канада, Близък Изток).",
      features: [
        { icon: <Building className="w-4 h-4" />, text: "Митническо обслужване" },
        { icon: <FileText className="w-4 h-4" />, text: "Цинков ковчег (Специален)" },
        { icon: <MapPin className="w-4 h-4" />, text: "Посрещане на летище София" }
      ]
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Вътрешен транспорт (България)",
      description: "Превоз на покойник в рамките на страната – от болница/дом до гробищен парк във всяка точка на България.",
      features: [
        { icon: <Truck className="w-4 h-4" />, text: "Специализиран автомобил" },
        { icon: <Clock className="w-4 h-4" />, text: "Бърза реакция" },
        { icon: <Shield className="w-4 h-4" />, text: "Професионално обслужване" }
      ]
    }
  ];

  const destinations = [
    "Германия", "Великобритания (Англия)", "Италия", "Испания", "Гърция", 
    "Франция", "Белгия", "Холандия (Нидерландия)", "Австрия", "Швейцария", 
    "Чехия", "Полша", "Турция", "Кипър"
  ];

  const documents = [
    "Смъртен акт (Многоезичен)",
    "Паспорт на починалия",
    "Разрешително за превоз (Laissez-passer)",
    "Епидемиологично разрешително (ХЕИ)"
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Какви документи са необходими за международен превоз на покойник?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "За международен превоз на покойник са необходими: многоезичен смъртен акт, паспорт на починалия, разрешително за превоз (Laissez-passer) и епидемиологично разрешително от ХЕИ."
        }
      },
      {
        "@type": "Question",
        "name": "Извършвате ли транспорт на покойник от Германия до България?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, Агенция Кипарис извършва специализиран сухопътен транспорт на покойник от Германия до България с хладилни автомобили и пълно съдействие с документите."
        }
      },
      {
        "@type": "Question",
        "name": "Колко струва репатриране на покойник от чужбина?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Цената за репатриране зависи от държавата, разстоянието и вида на транспорт (сухопътен или въздушен). Свържете се с нас на 02 846 55 24 за точна оферта."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Международен превоз на покойник",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Траурна агенция Кипарис",
      "telephone": "+35928465524",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. проф. Асен Златаров 8",
        "addressLocality": "София",
        "postalCode": "1504",
        "addressCountry": "BG"
      }
    },
    "areaServed": ["България", "Германия", "Великобритания", "Италия", "Испания", "Гърция", "Франция", "Белгия", "Холандия", "Австрия", "Швейцария", "Чехия", "Полша", "Турция", "Кипър"],
    "description": "Международен и вътрешен превоз на покойник. Лицензиран специализиран транспорт от Европа и цял свят с пълно съдействие за документи и митническо обслужване."
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Превоз на покойник от чужбина | Транспорт от Германия, Англия | Кипарис</title>
        <meta name="description" content="Международен превоз на покойник от Германия, Англия, Италия, Гърция до България. Лицензиран транспорт с хладилни автомобили. Денонощно: 02 846 55 24." />
        <meta name="keywords" content="превоз на покойник, транспорт на покойник, репатриране, транспорт от Германия, транспорт от Англия, международен превоз" />
        <link rel="canonical" href="https://kiparis-sofia.bg/transport-na-pokojnik" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Международен и вътрешен транспорт на покойник
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Лицензиран специализиран превоз от Европа и цял свят. Пълно съдействие с документи и митническо обслужване.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <a href="tel:028465524" className="inline-flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Денонощно: 02 846 55 24
                </a>
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src={hearseImage} 
                alt="Специализиран траурен автомобил за международен превоз на покойник" 
                className="max-w-full h-auto max-h-[300px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Видове транспорт</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map((card, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-border bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 text-secondary">{card.icon}</div>
                  <CardTitle className="text-xl md:text-2xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{card.description}</CardDescription>
                  <div className="space-y-2 mb-6">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-secondary">{feature.icon}</span>
                        {feature.text}
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/kontakti">Попитайте за цена</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Destinations Block */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Обслужвани международни дестинации</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Извършваме репатриране и транспорт на покойник от следните държави до България:
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {destinations.map((country, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-background rounded-full text-sm md:text-base border border-border hover:border-secondary transition-colors"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Accordion */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Необходими документи</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="documents" className="border-border">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                <span className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-secondary" />
                  Документи за репатриране
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 py-2">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-secondary mt-1">•</span>
                      {doc}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  * Агенция Кипарис съдейства за набавянето на всички документи от чужбина.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Получете точна оферта</h2>
          <p className="text-muted-foreground mb-6">
            Свържете се с нас за точна оферта според километрите и дестинацията. Работим денонощно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <a href="tel:028465524" className="inline-flex items-center gap-2">
                <Phone className="h-5 w-5" />
                02 846 55 24
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/kontakti">Към контакти</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Крайна цена без скрити такси
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TransportNaPokojnik;
