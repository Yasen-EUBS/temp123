import { useState, useEffect, useCallback } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Phone } from "lucide-react";

type MonumentCategory = "mramor" | "granit" | "oformlenie" | "both";

interface MonumentSpecs {
  material: string;
  color: string;
  features?: string[];
  availability?: string;
}

interface Monument {
  id: string;
  title: string;
  seoTitle: string;
  category: MonumentCategory;
  image: string;
  alt: string;
  description: string;
  specs: MonumentSpecs;
}

const monumentsData: Monument[] = [
  // === REAL MARBLE MONUMENTS ===
  {
    id: 'mramoren-pametnik-model-krast-koloni',
    title: 'Луксозен паметник от бял мрамор с колони и кръст',
    seoTitle: 'Надгробен паметник от бял мрамор с колони и кръст | Траурна агенция Кипарис',
    category: 'mramor',
    image: '/assets/monuments/nadgroben-pametnik-byal-mramor-koloni-krast-snimka.webp',
    alt: 'Луксозен надгробен паметник от бял мрамор с две масивни колони и голям кръст отгоре - изработка на Траурна агенция Кипарис',
    description: 'Изящен модел от висококачествен бял мрамор. Композицията включва две странични колони, поддържащи арка с масивен кръст – символ на вярата. Включва мраморни вази и фенер.',
    specs: { material: 'Бял мрамор', color: 'Бял', features: ['Колони', 'Кръст', 'Вази', 'Фенер'] }
  },
  {
    id: 'byal-mramor-skulptura-krast-lista',
    title: 'Скулптурен паметник от бял мрамор с кръст и листа',
    seoTitle: 'Луксозен паметник от бял мрамор с релеф | Кипарис',
    category: 'mramor',
    image: '/assets/monuments/nadgroben-pametnik-byal-mramor-skulptura-krast-snimka.webp',
    alt: 'Скулптурен надгробен паметник от бял мрамор с кръст и релефни листа',
    description: 'Този изключителен модел е изработен от висококачествен бял мрамор, отличаващ се с детайлна ръчна обработка. Дизайнът обединява християнската символика чрез ясно изразен кръст в горната част и богата орнаментика от скулптирани лаврови листа.',
    specs: { material: 'Бял мрамор', color: 'Бял', features: ['Ръчна изработка', 'Релефни листа', 'Кръст'] }
  },
  {
    id: 'siv-mramor-asimetrichen-krast-bucharda',
    title: 'Паметник от сив мрамор с асиметричен кръст и бучарда',
    seoTitle: 'Асиметричен паметник от сив мрамор с бучарда | Кипарис',
    category: 'mramor',
    image: '/assets/monuments/nadgroben-pametnik-siv-mramor-asimetrichen-s-krast-i-snimka.webp',
    alt: 'Надгробен паметник от сив мрамор с бучарда и гравиран венец',
    description: 'Класически модел от сив мрамор, който впечатлява с интересната си игра на текстури. Дизайнът залага на контраста между идеално полираното лице за надписите и рамката тип „бучарда".',
    specs: { material: 'Сив мрамор', color: 'Сив', features: ['Бучарда', 'Асиметричен', 'Кръст'] }
  },
  {
    id: 'byal-mramor-asimetrichen-krast-topka',
    title: 'Паметник от бял мрамор с кръст и футболна топка',
    seoTitle: 'Мраморен паметник с футболна топка и кръст | Кипарис',
    category: 'mramor',
    image: '/assets/monuments/nadgroben-pametnik-byal-mramor-asimetrichen-s-krast-snimka-i-topka.webp',
    alt: 'Надгробен паметник от бял мрамор с релефна футболна топка и кръст',
    description: 'Този модел е отличен пример за персонализиран мемориален дизайн, изработен от бял мрамор. Основният акцент е детайлно скулптираната футболна топка в основата, символизираща любимото занимание на покойника.',
    specs: { material: 'Бял мрамор', color: 'Бял', features: ['Персонализиран', 'Футболна топка', 'Кръст'] }
  },
  {
    id: 'byal-mramor-arkhitekturen-kolona-vaza',
    title: 'Архитектурен паметник от бял мрамор с колона и ваза',
    seoTitle: 'Мраморен паметник с колона и ваза - Архитектурен модел | Кипарис',
    category: 'mramor',
    image: '/assets/monuments/nadgroben-pametnik-byal-mramor-asimetrichen-s-kolona-i-vaza.webp',
    alt: 'Луксозен надгробен паметник от бял мрамор с колона и каменна ваза',
    description: 'Изящен паметник с архитектурен стил, изработен от бял мрамор с характерни сиви жилки. Дизайнът включва масивна колона в дорийски стил от лявата страна и елегантна мраморна ваза върху специален постамент.',
    specs: { material: 'Бял мрамор', color: 'Бял', features: ['Колона', 'Ваза', 'Архитектурен стил'] }
  },
  {
    id: 'mramoren-pametnik-asimetrien-krast-klonka',
    title: 'Мраморен паметник с асиметричен връх, кръст и клонка',
    seoTitle: 'Надгробен паметник от бял мрамор с кръст и клонка | Траурна агенция Кипарис',
    category: 'mramor',
    image: '/assets/monuments/nadgroben-pametnik-byal-mramor-asimetrien-s-krast-i-listo.webp',
    alt: 'Надгробен паметник от бял мрамор с релефен кръст, декоративна клонка и фенер - Траурна агенция Кипарис',
    description: 'Красив паметник от бял мрамор с асиметричен дизайн. Декориран с дълбоко изрязан кръст върху бучарда (грапав фон) и изящна растителна орнаментика в дясната част.',
    specs: { material: 'Бял мрамор', color: 'Бял', features: ['Асиметричен', 'Клонка', 'Бучарда'] }
  },
  {
    id: 'siv-mramor-sartse',
    title: "Модел Ангелска Обич",
    seoTitle: "Надгробен паметник от сив мрамор - форма Сърце",
    category: "mramor",
    image: "/assets/monuments/nadgroben-pametnik-siv-mramor-sartse-forma-s-krast-i-snimka.webp",
    alt: "Надгробен паметник от сив мрамор с форма на сърце, стилизирани криле и кръст",
    description: "Трогателен дизайн от сив мрамор с форма на сърце и артистични релефни елементи, символизиращ неугасваща любов.",
    specs: { material: 'Сив мрамор', color: 'Сив', features: ['Форма сърце', 'Криле', 'Кръст'] }
  },
  {
    id: 'mramor-arka-kotva',
    title: "Модел Надежда",
    seoTitle: "Надгробен паметник от бял мрамор тип Арка с Котва",
    category: "mramor",
    image: "/assets/monuments/nadgroben-pametnik-byal-mramor-arka-kotva.webp",
    alt: "Надгробен паметник тип арка от бял мрамор с гравиран златен символ котва",
    description: "Символичен модел с форма на арка и златен гравир на котва, олицетворяващ вярата и надеждата.",
    specs: { material: 'Бял мрамор', color: 'Бял', features: ['Арка', 'Златен гравир', 'Котва'] }
  },
  {
    id: 'mramor-asim-list',
    title: "Модел Хармония",
    seoTitle: "Асиметричен надгробен паметник от бял мрамор с Кръст",
    category: "mramor",
    image: "/assets/monuments/nadgroben-pametnik-byal-mramor-asimetrichen-s-krast-i-lista.webp",
    alt: "Асиметричен мраморен паметник с релефна украса от лаврови листа и каменен кръст",
    description: "Артистичен асиметричен дизайн, съчетаващ природни мотиви и духовна символика в бял мрамор.",
    specs: { material: 'Бял мрамор', color: 'Бял', features: ['Асиметричен', 'Лаврови листа', 'Кръст'] }
  },
  {
    id: 'mramor-rozarium',
    title: "Модел Розариум",
    seoTitle: "Луксозен паметник от бял мрамор с релефни рози",
    category: "mramor",
    image: "/assets/monuments/nadgroben-pametnik-byal-mramor-zaoblen-s-relefni-rozi-i-krast.webp",
    alt: "Луксозен паметник от бял мрамор със заоблен връх, релефни рози и златен надпис",
    description: "Нежен и класически дизайн от бял мрамор с богато орнаментирани рози, изразяващи любов и почит.",
    specs: { material: 'Бял мрамор', color: 'Бял', features: ['Заоблен връх', 'Релефни рози', 'Златен надпис'] }
  },
  {
    id: 'grey-marble-double-family',
    title: "Двоен паметник от сив мрамор с вертикален разрез",
    seoTitle: "Двоен надгробен паметник от сив мрамор | Кипарис",
    category: "mramor",
    image: "/assets/monuments/nadgroben-pametnik-siv-mramor-dvoin-s-razrez-tri-snimki.webp",
    alt: "Двоен надгробен паметник от сив мрамор с три порцеланови снимки",
    description: "Класически двоен паметник, изработен от висококачествен сив мрамор. Дизайнът се състои от две симетрични вертикални плочи, монтирани така, че празното пространство помежду им очертава формата на кръст.",
    specs: { material: 'Сив мрамор', color: 'Сив', features: ['Двоен', 'Фамилен', 'Място за 3+ снимки'] }
  },
  {
    id: 'black-white-cross',
    title: "Паметник тип Кръст от черен гранит и бял мрамор",
    seoTitle: "Паметник Кръст - черен гранит и мрамор | Кипарис",
    category: "both",
    image: "/assets/monuments/nadgroben-pametnik-cheren-granit-byal-mramor-forma-krast.webp",
    alt: "Надгробен паметник във форма на кръст от черен гранит и бял мрамор",
    description: "Този модел се отличава със силния контраст между двата използвани материала. Централната част е от черен гранит, позволяващ прецизно лазерно гравиране на портрета, докато масивната рамка от бял мрамор очертава формата на стилизиран кръст.",
    specs: { material: 'Черен гранит & Бял мрамор', color: 'Черно-бял', features: ['Форма кръст', 'Комбинирани материали', 'Лазерно гравиране'] }
  },
  
  // === REAL GRANITE MONUMENTS ===
  {
    id: 'black-granite-monument-arch-side-cross',
    title: 'Паметник от черен гранит с овал и страничен кръст',
    seoTitle: 'Паметник от черен гранит с кръст и овал | Кипарис',
    category: 'granit',
    image: '/assets/monuments/nadgroben-pametnik-cheren-granit-zaoblen-s-krast-i-fener.webp',
    alt: 'Елегантен надгробен паметник от полиран черен гранит с овална горна част и страничен кръст върху бучардирана повърхност',
    description: 'Този елегантен модел съчетава класическата строгост на черния гранит с деликатен, модернистичен дизайн. Основната плоча е завършена с плавна овална дъга (арка), символизираща небесния свод, и предлага обширно полирано пространство за висококачествено лазерно гравиране на портрет и възпоменателни надписи. Отличителният акцент на композицията е страничният елемент с "бучарда" (грапава) обработка, която създава красив текстурен контраст с гладкия камък. Върху тази текстура изпъква изчистен християнски кръст, подчертаващ духовността на мемориала.',
    specs: { material: 'Cheren Granit', color: 'Black', features: ['Овална форма', 'Страничен кръст', 'Бучарда ефект', 'Фенер'], availability: 'PreOrder' }
  },
  {
    id: 'dark-granite-monument-carved-flame-edge',
    title: 'Паметник от тъмен гранит с резбован страничен кант',
    seoTitle: 'Надгробен паметник от тъмен гранит с декоративна резба | Кипарис',
    category: 'granit',
    image: '/assets/monuments/nadgroben-pametnik-granit-tamen-siv-rezbovan-kant-krast.webp',
    alt: 'Надгробен паметник от тъмен пъстър гранит с декоративно изрязан ляв ръб тип пламък и прикрепена черна портретна плоча',
    description: 'Този модел се отличава със своята артистична асиметрия и внимание към детайла. Изработен от висококачествен тъмен гранит с пъстра структура, паметникът привлича погледа с левия си страничен кант, който е художествено резбован във форма, наподобяваща стилизирани пламъци или листа. Тази обработка създава красив контраст между по-светлата, матирана повърхност на релефа и дълбокия гланц на лицевата част. Моделът включва класически гравиран кръст и позволява поставянето на допълнителна плоча от черен гранит за портрет, което осигурява максимална яснота и детайлност на образа.',
    specs: { material: 'Tamen Granit', color: 'Dark Grey', features: ['Резбован кант', 'Неправилна форма', 'Кръст', 'Портретна плоча'], availability: 'PreOrder' }
  },
  {
    id: 'combined-granite-monument-grey-arch-black-plate',
    title: 'Комбиниран паметник от сив и черен гранит с арка',
    seoTitle: 'Надгробен паметник от сив и черен гранит с кръст | Кипарис',
    category: 'granit',
    image: '/assets/monuments/nadgroben-pametnik-siv-i-cheren-granit-kombiniran-arka-krast.webp',
    alt: 'Комбиниран надгробен паметник с рамка от светлосив гранит, черна плоча за портрет и метален кръст',
    description: 'Този модел предлага балансирано съчетание между традиция и функционалност, използвайки два вида естествен камък. Външната рамка е изработена от устойчив светлосив гранит с пъстра структура, завършваща с класическа арка (купол) в горната част. В центъра е вградена правоъгълна плоча от висококачествен черен гранит, която служи като идеално платно за детайлно лазерно гравиране на портрета и имената. Композицията е увенчана с релефен метален кръст, който добавя обем и тържественост към цялостната визия на паметника.',
    specs: { material: 'Siv i Cheren Granit', color: 'Grey / Black', features: ['Комбиниран камък', 'Арка', 'Метален кръст', 'Вградена плоча'], availability: 'PreOrder' }
  },

  // === OFORMLENIE (DESIGNS/ARRANGEMENTS) PLACEHOLDERS ===
  {
    id: 'oformlenie-palno-mramor',
    title: "Пълно оформление от бял мрамор",
    seoTitle: "Цялостно гробно оформление от мрамор | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/nadgroben-pametnik-byal-mramor-asimetrichen-s-kolona-i-vaza.webp",
    alt: "Цялостно оформление на гроб от бял мрамор",
    description: "Комплексно решение включващо паметник, бордюри, плоча и декоративни елементи от бял мрамор.",
    specs: { material: 'Бял мрамор', color: 'Бял', features: ['Комплексно', 'Бордюри', 'Плоча'] }
  },
  {
    id: 'oformlenie-bordyuri-granit',
    title: "Гранитни бордюри и плочи",
    seoTitle: "Гранитни бордюри за гроб | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/nadgroben-pametnik-cheren-granit-byal-mramor-forma-krast.webp",
    alt: "Гранитни бордюри и плочи за гробно оформление",
    description: "Изработка и монтаж на гранитни бордюри, плочи и пътеки за цялостно оформление на гробното място.",
    specs: { material: 'Гранит', color: 'Черен/Сив', features: ['Бордюри', 'Плочи', 'Пътеки'] }
  },
  {
    id: 'oformlenie-kombiniran',
    title: "Комбинирано оформление гранит и мрамор",
    seoTitle: "Комбинирано гробно оформление | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/nadgroben-pametnik-cheren-granit-byal-mramor-forma-krast.webp",
    alt: "Комбинирано оформление от гранит и мрамор",
    description: "Уникално съчетание от гранит и мрамор за ефектен контраст и завършен вид на гробното място.",
    specs: { material: 'Гранит & Мрамор', color: 'Комбиниран', features: ['Контраст', 'Комбинирани', 'Уникален'] }
  },
  {
    id: 'oformlenie-mozaika',
    title: "Мозаечно оформление",
    seoTitle: "Мозаечно гробно оформление | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/nadgroben-pametnik-byal-mramor-asimetrichen-s-kolona-i-vaza.webp",
    alt: "Мозаечно оформление на гроб",
    description: "Художествено оформление с мозаечни елементи и декоративни камъни за индивидуален вид.",
    specs: { material: 'Мозайка', color: 'Различни', features: ['Художествено', 'Мозаечни елементи', 'Индивидуален'] }
  },
  {
    id: 'oformlenie-cvetarnik',
    title: "Оформление с цветарник",
    seoTitle: "Гробно оформление с цветарник | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/nadgroben-pametnik-byal-mramor-asimetrichen-s-kolona-i-vaza.webp",
    alt: "Гробно оформление с вграден цветарник",
    description: "Практично оформление с вграден цветарник за засаждане на живи цветя и зеленина.",
    specs: { material: 'Мрамор/Гранит', color: 'По избор', features: ['Цветарник', 'Практично', 'Зеленина'] }
  },
  {
    id: 'oformlenie-semeen-kompleks',
    title: "Семеен комплекс - пълно оформление",
    seoTitle: "Семеен гробен комплекс | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/nadgroben-pametnik-siv-mramor-dvoin-s-razrez-tri-snimki.webp",
    alt: "Цялостно оформление на семеен гроб",
    description: "Пълно оформление на фамилно гробно място с няколко паметника, обща рамка и декоративни елементи.",
    specs: { material: 'По избор', color: 'По избор', features: ['Семеен', 'Няколко паметника', 'Обща рамка'] }
  }
];

const services = [
  "Изработка от гранит и мрамор",
  "Гравиране на надписи и портрети",
  "Професионален монтаж",
  "Доставка до гробищата",
  "Консултация и измерване на място",
  "Гаранция за качество"
];

const ITEMS_PER_PAGE = 12;

const Monuments = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Filter monuments based on category
  const filteredMonuments = selectedCategory === "all" 
    ? monumentsData 
    : monumentsData.filter(m => m.category === selectedCategory || m.category === "both");

  // Visible monuments based on pagination
  const visibleMonuments = filteredMonuments.slice(0, visibleCount);
  const hasMoreItems = visibleCount < filteredMonuments.length;

  const selectedMonument = selectedIndex !== null ? filteredMonuments[selectedIndex] : null;

  // Reset visible count when changing category
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [selectedCategory]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (selectedIndex === 0) {
      setSelectedIndex(filteredMonuments.length - 1);
    }
  }, [selectedIndex, filteredMonuments.length]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null && selectedIndex < filteredMonuments.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (selectedIndex === filteredMonuments.length - 1) {
      setSelectedIndex(0);
    }
  }, [selectedIndex, filteredMonuments.length]);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          closeLightbox();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext, closeLightbox]);

  const openLightbox = (monumentId: string) => {
    const index = filteredMonuments.findIndex(m => m.id === monumentId);
    if (index !== -1) {
      setSelectedIndex(index);
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Надгробни паметници в София | Траурна агенция Кипарис"
        description="Пълна организация на надгробни паметници в София. Денонощно: 02 846 55 24."
        serviceName="Надгробни паметници"
      />
      <Navigation />
      
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-2 md:px-4">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">Надгробни Паметници</h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Изработка и монтаж на качествени надгробни паметници от гранит и мрамор
            </p>
          </div>

          {/* Tabs with 4 categories */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-6 md:mb-10">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-4 h-auto">
              <TabsTrigger value="all" className="text-xs md:text-sm py-2">Всички</TabsTrigger>
              <TabsTrigger value="mramor" className="text-xs md:text-sm py-2">Мрамор</TabsTrigger>
              <TabsTrigger value="granit" className="text-xs md:text-sm py-2">Гранит</TabsTrigger>
              <TabsTrigger value="oformlenie" className="text-xs md:text-sm py-2">Оформления</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Grid: 2 cols mobile, 3 cols desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 mb-8">
            {visibleMonuments.map((monument) => (
              <Card 
                key={monument.id} 
                className="md:hover:shadow-2xl transition-all duration-300 overflow-hidden border-border bg-card cursor-pointer group"
                onClick={() => openLightbox(monument.id)}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={monument.image}
                    alt={monument.alt}
                    className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4">
                    <h3 className="text-xs md:text-lg font-semibold text-white leading-tight line-clamp-2">{monument.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreItems && (
            <div className="text-center mb-12">
              <Button 
                onClick={handleLoadMore}
                variant="outline"
                size="lg"
                className="px-8"
              >
                Виж още модели
              </Button>
            </div>
          )}

          {/* Immersive Lightbox Modal - Pure Image Viewer */}
          <Dialog open={selectedIndex !== null} onOpenChange={() => closeLightbox()}>
            <DialogContent className="max-w-[98vw] md:max-w-6xl max-h-[95vh] p-0 overflow-hidden bg-background border-border">
              {selectedMonument && (
                <div className="relative flex flex-col md:flex-row h-full max-h-[95vh]">
                  {/* Close button */}
                  <button
                    onClick={closeLightbox}
                    className="absolute top-2 right-2 md:top-4 md:right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    aria-label="Затвори"
                  >
                    <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </button>

                  {/* Desktop: Navigation arrows on sides - OUTSIDE content */}
                  <button
                    onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                    className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/40 hover:bg-black/60 transition-colors items-center justify-center"
                    aria-label="Предишен"
                  >
                    <ChevronLeft className="w-8 h-8 text-white" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); goToNext(); }}
                    className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/40 hover:bg-black/60 transition-colors items-center justify-center"
                    aria-label="Следващ"
                  >
                    <ChevronRight className="w-8 h-8 text-white" />
                  </button>

                  {/* Left: Image Section - Takes 70-75% on desktop */}
                  <div className="relative flex-shrink-0 w-full md:w-[72%] bg-black flex items-center justify-center">
                    {/* Image - Maximum size, never cropped */}
                    <img
                      src={selectedMonument.image}
                      alt={selectedMonument.alt}
                      className="w-full h-full max-h-[70vh] md:max-h-[85vh] object-contain"
                    />

                    {/* Counter overlay */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded-full">
                      <span className="text-white/80 text-sm">
                        {selectedIndex !== null ? selectedIndex + 1 : 0} / {filteredMonuments.length}
                      </span>
                    </div>

                    {/* Mobile: Navigation arrows at bottom */}
                    <div className="md:hidden absolute bottom-10 left-0 right-0 flex justify-between px-4">
                      <button
                        onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                        className="p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                        aria-label="Предишен"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); goToNext(); }}
                        className="p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                        aria-label="Следващ"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Right: Minimalist Content Sidebar */}
                  <div className="flex-1 overflow-y-auto p-4 md:p-5 bg-card flex flex-col">
                    <div className="space-y-3 md:space-y-4 flex-1">
                      {/* Header: Title - Gold color */}
                      <h2 className="text-lg md:text-xl font-bold text-secondary">{selectedMonument.title}</h2>
                      
                      {/* Sub-header: Personalization text (italic, muted) */}
                      <p className="text-xs md:text-sm text-muted-foreground italic">
                        „Всички детайли (размер, вид камък, орнаменти) подлежат на пълна персонализация."
                      </p>

                      {/* Body: Description */}
                      <p className="text-muted-foreground text-sm">{selectedMonument.description}</p>

                      {/* Specs badges */}
                      {selectedMonument.specs.features && selectedMonument.specs.features.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {selectedMonument.specs.features.map((feature, idx) => (
                            <span key={idx} className="text-xs bg-secondary/15 text-secondary px-2 py-0.5 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer: CTA Button - Always tel: link */}
                    <a 
                      href="tel:028465524"
                      className="flex items-center justify-center gap-3 bg-secondary text-secondary-foreground py-4 rounded-lg font-bold text-lg md:text-xl hover:bg-secondary/90 hover:scale-[1.02] transition-all w-full mt-4 shadow-lg"
                    >
                      <Phone className="w-6 h-6" />
                      02 846 55 24
                    </a>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          {/* Services Section */}
          <div className="max-w-4xl mx-auto bg-card p-6 md:p-8 rounded-lg border border-border">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Нашите Услуги</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <p className="text-base md:text-lg">{service}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 md:mt-8 text-center">
              <p className="text-base md:text-lg mb-2">За консултация и оглед на образци:</p>
              <a href="tel:028465524" className="text-xl md:text-2xl font-bold text-secondary hover:underline">
                02 846 55 24
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Monuments;
