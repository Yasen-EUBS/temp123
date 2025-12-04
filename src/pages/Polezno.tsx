import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Polezno = () => {
  const scenarioFaqs = [
    {
      question: "Какво се прави при смъртен случай в дома?",
      answer: "Първо се свържете с личния лекар за издаване на Съобщение за смърт. Ако е нощ или празник, позвънете на 112. След получаване на документа, обадете се на Траурна агенция Кипарис (02 846 55 24) за транспорт."
    },
    {
      question: "Каква е процедурата при смърт в болница?",
      answer: "Болничното заведение издава съобщението за смърт. Близките трябва да вземат документа и личните вещи, след което траурната агенция организира транспорта от болничната морга."
    },
    {
      question: "Предлагате ли репатриране на починал от чужбина?",
      answer: "Да, Агенция Кипарис извършва международен транспорт и оформяне на документи за репатриране на тленни останки от Европа до България."
    }
  ];

  const additionalFaqs = [
    {
      question: "Как се определя цената на погребението?",
      answer: "Цената зависи от избрания пакет (Икономичен или Луксозен), вида на ковчега и допълнителните аксесоари. В Агенция Кипарис всички цени са крайни, без скрити такси за 'административни услуги' в последния момент."
    },
    {
      question: "Имам ли право на помощ от държавата при смъртен случай?",
      answer: "Да, близките имат право на еднократна помощ при смърт от НОИ. Агенция Кипарис съдейства безплатно с консултация за необходимите документи, за да получите тази помощ."
    },
    {
      question: "Кога най-рано или най-късно може да се извърши погребението?",
      answer: "По закон погребението трябва да се извърши не по-рано от 24 часа след констатиране на смъртта. Няма краен срок, но ако се налага отлагане (напр. чакате близки от чужбина), ние осигуряваме хладилна камера за съхранение."
    },
    {
      question: "Какви дрехи са необходими за покойника?",
      answer: "Необходими са дрехи, с които искате да изпратите близкия си – бельо, чорапи/чорапогащник, риза/блуза, панталон/пола, сако и обувки. Ние ще се погрижим за обличането и тоалета."
    },
    {
      question: "Мога ли да запазят гробно място предварително?",
      answer: "В София запазването на 'гробно място за бъдеще време' е силно ограничено и зависи от конкретния гробищен парк и семейното положение. Свържете се с нас за актуална справка според вашия район."
    }
  ];

  const allFaqs = [...scenarioFaqs, ...additionalFaqs];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <html lang="bg" />
        <title>Какво да правим при смъртен случай? | Траурна агенция Кипарис</title>
        <meta 
          name="description" 
          content="Наръчник при смъртен случай: Какво се прави при смърт в дома, в болница или в чужбина. Необходими документи и стъпки. Денонощна помощ от Агенция Кипарис." 
        />
        <meta property="og:locale" content="bg_BG" />
        <meta property="og:title" content="Какво да правим при смъртен случай? | Траурна агенция Кипарис" />
        <meta property="og:description" content="Наръчник при смъртен случай: Какво се прави при смърт в дома, в болница или в чужбина." />
        <link rel="canonical" href="https://kiparisbg.com/polezno" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
              Какво да правим при смъртен случай?
            </h1>
            <p className="text-center text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Стъпка по стъпка наръчник за действие в трудни моменти
            </p>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-cta py-4">
          <div className="container mx-auto px-4 text-center">
            <a 
              href="tel:028465524" 
              className="inline-flex items-center gap-2 text-cta-foreground font-bold text-lg hover:opacity-80 transition-opacity"
            >
              <Phone className="h-5 w-5" />
              Денонощна помощ: 02 846 55 24
            </a>
          </div>
        </section>

        {/* Main Content with Accordions */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {/* Scenario A */}
              <AccordionItem value="home" className="bg-card rounded-lg border border-border overflow-hidden">
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                  <span className="text-left font-semibold text-base md:text-lg">
                    Смъртен случай в дома
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <ol className="space-y-3 text-sm md:text-base text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="font-bold text-secondary min-w-[24px]">1.</span>
                      <span>Незабавно се свържете с личния лекар на починалия за констатация на смъртта и издаване на "Съобщение за смърт".</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-secondary min-w-[24px]">2.</span>
                      <span>Ако смъртта е настъпила в почивен ден или през нощта, позвънете на спешна помощ (112) или на дежурен лекар.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-secondary min-w-[24px]">3.</span>
                      <span>След издаване на документа, свържете се с Траурна агенция Кипарис (02 846 55 24) за организиране на транспорт и хладилна камера.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-secondary min-w-[24px]">4.</span>
                      <span>Не предприемайте други действия преди идването на траурен агент.</span>
                    </li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              {/* Scenario B */}
              <AccordionItem value="hospital" className="bg-card rounded-lg border border-border overflow-hidden">
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                  <span className="text-left font-semibold text-base md:text-lg">
                    Смъртен случай в болница
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <ol className="space-y-3 text-sm md:text-base text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="font-bold text-secondary min-w-[24px]">1.</span>
                      <span>Лекуващият лекар в болничното заведение издава "Съобщение за смърт".</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-secondary min-w-[24px]">2.</span>
                      <span>Близките трябва да отидат в болницата за получаване на личните вещи и документа.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-secondary min-w-[24px]">3.</span>
                      <span>Свържете се с нас, за да организираме транспорта от болничната морга до гробищния парк или наша хладилна камера.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-secondary min-w-[24px]">4.</span>
                      <span>Заплащането на престоя в болнична морга се уточнява на място.</span>
                    </li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              {/* Scenario C */}
              <AccordionItem value="abroad" className="bg-card rounded-lg border border-border overflow-hidden">
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                  <span className="text-left font-semibold text-base md:text-lg">
                    Смърт в чужбина (Репатриране)
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <ol className="space-y-3 text-sm md:text-base text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="font-bold text-secondary min-w-[24px]">1.</span>
                      <span>Това е сложен процес, изискващ международни документи и специален транспорт (линейка или въздушен).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-secondary min-w-[24px]">2.</span>
                      <span>Първата стъпка е връзка с българското консулство в съответната държава.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-secondary min-w-[24px]">3.</span>
                      <span>Агенция Кипарис съдейства за целия процес по оформяне на документите и специализиран превоз на тленните останки до България.</span>
                    </li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
                Често задавани въпроси
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {additionalFaqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`} 
                    className="bg-card rounded-lg border border-border overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50 text-left">
                      <span className="font-semibold text-sm md:text-base pr-2">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p className="text-sm md:text-base text-muted-foreground">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Additional CTA */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4 text-sm">
                Нуждаете се от помощ? Ние сме на разположение денонощно.
              </p>
              <a 
                href="tel:028465524"
                className="inline-flex items-center gap-2 bg-cta text-cta-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                <Phone className="h-5 w-5" />
                ДЕНОНОЩНО: 02 846 55 24
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Polezno;
