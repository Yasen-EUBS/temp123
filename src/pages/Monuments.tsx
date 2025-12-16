import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
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
  {
    id: 'black-granite-monument-pillow-style',
    title: 'Паметник от черен гранит тип Пулт (Възглавница)',
    seoTitle: 'Надгробен паметник от черен гранит - модел Пулт | Кипарис',
    category: 'granit',
    image: '/assets/monuments/nadgroben-pametnik-cheren-granit-pult-vazglavnitsa.webp',
    alt: 'Масивен надгробен паметник от черен гранит с форма на пулт и златен надпис',
    description: 'Този елегантен модел, известен като тип "Пулт" или "Възглавница", е изработен от висококачествен масивен черен гранит. Дизайнът се отличава с хоризонтална ориентация и лек наклон на лицевата част, което осигурява отлична четимост на надписите и предотвратява задържането на вода или сняг. Огледално полираната повърхност придава дълбочина на черния цвят и създава изискан контраст с гравираните букви, оцветени в злато. Моделът е компактен, но внушителен, подходящ за клиенти, които търсят стилна, изчистена визия и вечна устойчивост.',
    specs: { material: 'Cheren Granit', color: 'Black', features: ['Тип Пулт / Възглавница', 'Златен надпис', 'Огледално полиране', 'Хоризонтален'], availability: 'PreOrder' }
  },
  {
    id: 'combined-granite-monument-red-black-portrait',
    title: 'Комбиниран паметник от червен и черен гранит с портрет',
    seoTitle: 'Комбиниран паметник от гранит с портрет | Кипарис',
    category: 'granit',
    image: '/assets/monuments/nadgroben-pametnik-granit-cherven-cheren-asimetriechen-portret.webp',
    alt: 'Комбиниран надгробен паметник от кафяв и черен гранит с лазерно гравиран портрет и рози',
    description: 'Този изключителен модел представя хармонично съчетание на два вида естествен камък, създавайки уникална и запомняща се визия. Задната част е изработена от масивен червено-кафяв гранит с красива зърнеста структура, символизиращ устойчивост и топлина. Предната плоча е от висок клас черен гранит (Абсолют Блек) с елегантна асиметрична извивка, която служи като идеално платно за изкуство. Черният камък позволява прецизно лазерно гравиране на фотореалистичен портрет, който запазва спомена жив завинаги. Композицията е завършена с деликатно гравирани символи – запалена свещ и роза в основата, добавящи емоционален акцент към паметника.',
    specs: { material: 'Granit (Cheren i Cherven)', color: 'Black and Red', features: ['Комбинирани цветове', 'Лазерно гравиране', 'Портрет', 'Асиметрична форма', 'Гравирана свещ'], availability: 'PreOrder' }
  },
  {
    id: 'combined-granite-monument-brown-black-asymmetric',
    title: 'Луксозен комбиниран паметник от кафяв и черен гранит',
    seoTitle: 'Комбиниран надгробен паметник от гранит - асиметричен модел | Кипарис',
    category: 'granit',
    image: '/assets/monuments/nadgroben-pametnik-kombiniran-granit-kafyav-cheren-asimetriechen.webp',
    alt: 'Асиметричен надгробен паметник черен гранит с лазерно гравиран портрет и надпис Обичаме те',
    description: 'Този изискан модел се отличава с модерна архитектура, съчетаваща два вида естествен камък за постигане на впечатляващ контраст. Задният елемент е изработен от масивен черен гранит със заоблен връх, който придава топлина и достолепие на композицията. Предната плоча е от висококачествен черен гранит с елегантна асиметрична извивка, служеща за основа на прецизно лазерно гравиран портрет. Дизайнът е завършен с емоционално послание "Обичаме те..." и художествена гравюра на горяща свещ с роза, символизиращи вечната памет. Към модела е включена и каменна ваза, съчетана цветово с основния материал.',
    specs: { material: 'Granit (Kombiniran)', color: 'Brown and Black', features: ['Асиметрична форма', 'Лазерно гравиране', 'Портрет', 'Гравирана свещ и роза', 'Включена ваза', "Надпис 'Обичаме те'"], availability: 'PreOrder' }
  },
  {
    id: 'black-granite-monument-heart-shape',
    title: 'Паметник от черен гранит с форма на Сърце',
    seoTitle: 'Надгробен паметник от черен гранит - форма Сърце | Кипарис',
    category: 'granit',
    image: '/assets/monuments/nadgroben-pametnik-cheren-granit-forma-sartse-portret-roza-krast.webp',
    alt: 'Надгробен паметник от черен гранит с форма на сърце, лазерно гравиран портрет и роза',
    description: 'Този изключителен модел е изработен от масивен черен гранит, оформен в красива и символична форма на сърце – вечният знак на любовта и привързаността. Черният цвят на камъка е дълбок и наситен, осигуряващ идеален контраст за висококачествено лазерно гравиране. Дизайнът включва възможност за прецизно изобразяване на портрет, както и деликатни художествени елементи като роза и дискретен кръст. Широката лицева част позволява разполагането на имена, дати и трогателен епитаф в основата, като "Обичаме те, винаги ще бъдеш с нас...". Това е паметник, който изразява дълбока емоция и почит.',
    specs: { material: 'Cheren Granit', color: 'Black', features: ['Форма Сърце', 'Лазерно гравиране', 'Портрет', 'Гравирана роза', 'Гравиран кръст'], availability: 'PreOrder' }
  },
  {
    id: 'black-granite-monument-cross-rays',
    title: 'Паметник от черен гранит с бучарда и кръст с лъчи',
    seoTitle: 'Паметник от черен гранит - Кръст с лъчи | Кипарис',
    category: 'granit',
    image: '/assets/monuments/nadgroben-pametnik-cheren-granit-bucharda-krast-luchi.webp',
    alt: 'Надгробен паметник от черен гранит с изрязан кръст, слънчеви лъчи и бучарда обработка',
    description: 'Този изискан модел надгробен паметник съчетава класическата елегантност на черния гранит с майсторска каменоделска обработка. Лявата половина на плочата е оформена с внушителен релефен кръст, разположен върху фон от стилизирани лъчи (слънчев изгрев). Използвана е техника „бучарда" за създаване на грапава текстура на лъчите, което осигурява силен и красив контраст с полирания черен кръст и гладката повърхност за надписите. Символиката на светлината и възкресението е предадена чрез трайността на естествения камък.',
    specs: { material: 'Cheren Granit', color: 'Black', features: ['Кръст', 'Бучарда', 'Слънчеви лъчи', 'Релеф'], availability: 'PreOrder' }
  },
  {
    id: 'red-black-granite-monument-asymmetric',
    title: 'Комбиниран паметник от червен и черен гранит',
    seoTitle: 'Паметник от червен и черен гранит - Асиметричен модел | Кипарис',
    category: 'granit',
    image: '/assets/monuments/nadgroben-pametnik-kombiniran-granit-cheren-i-cherven.webp',
    alt: 'Комбиниран надгробен паметник от червен и черен гранит с асиметрична височина и вълнообразна форма',
    description: 'Този модел се отличава с впечатляващата си комбинация от два вида естествен камък, създавайки модерна и разчупена визия. Композицията включва висок вертикален елемент от масивен червен гранит с елегантна, вълнообразна форма, която придава височина и присъствие на мемориала. До него е разположена по-ниска, скосена плоча от полиран черен гранит, идеална за прецизно лазерно гравиране на портрет и възпоменателен текст. Контрастът между пъстрите червеникави нюанси и дълбокия черен цвят създава усещане за достолепие и уникалност.',
    specs: { material: 'Cheren i Cherven Granit', color: 'Red & Black', features: ['Двуцветен', 'Асиметрична форма', 'Вълнообразен елемент', 'Комбинация'], availability: 'PreOrder' }
  },
  {
    id: 'black-granite-portal-columns',
    title: 'Луксозен надгробен паметник от черен гранит с колони - тип Портал',
    seoTitle: 'Паметник от черен гранит с колони и портал | Кипарис',
    category: 'granit',
    image: '/assets/monuments/nadgroben-pametnik-cheren-granit-portal-s-koloni.webp',
    alt: 'Масивен надгробен паметник от полиран черен гранит с две странични колони и гравиран кръст',
    description: 'Този изключителен модел представлява върха на каменоделското изкуство. Композицията е изпълнена в стил "Портал", символизиращ прехода към вечността. Конструкцията включва основна плоча от висококачествен черен гранит, фланкирана от две масивни, полирани колони, които поддържат арковиден покривен елемент (шапка). Дизайнът е завършен с дискретно гравиран кръст в горната част, подчертан със златен бронз. Черният гранит е идеалната основа за детайлни портретни гравюри и контрастни надписи. Моделът излъчва стабилност, уважение и вечна памет.',
    specs: { material: 'Cheren Granit', color: 'Black', features: ['Колони', 'Портална конструкция', 'Кръст', 'Полиран', 'Златни букви'], availability: 'PreOrder' }
  },
  {
    id: 'red-granite-monument-diamond-cross',
    title: 'Надгробен паметник от червен гранит с черен ромб',
    seoTitle: 'Паметник от червен и черен гранит с ромб | Кипарис',
    category: 'granit',
    image: '/assets/monuments/nadgroben-pametnik-cherven-granit-s-cheren-romb.webp',
    alt: 'Комбиниран надгробен паметник от червен и черен гранит с геометрична форма и кръст',
    description: 'Този модерен паметник се отличава с уникална геометрична композиция, съчетаваща топлината на червения гранит със строгостта на черния. Дизайнът се състои от два вертикални модула от полиран червен гранит, артистично свързани в горната част от диагонално разположен елемент (ромб) от черен гранит. Върху черния елемент е гравиран изчистен латински кръст, който стои като акцент на върха на композицията. Дясната плоча включва вградена плочка от черен гранит за лазерно гравиран портрет, осигуряващ максимален детайл, а надписите са изпълнени с позлата за висок контраст и четимост. Това е модел за ценители на разчупената архитектура и цветовия баланс.',
    specs: { material: 'Cherven i Cheren Granit', color: 'Red and Black', features: ['Двуцветен', 'Ромб', 'Кръст', 'Разчупена форма', 'Вграден портрет'], availability: 'PreOrder' }
  },
  {
    id: 'red-granite-monument-carved-cross-rose',
    title: 'Надгробен паметник от червен гранит с релефен кръст и роза',
    seoTitle: 'Паметник от червен гранит с кръст и лъчи | Кипарис',
    category: 'granit',
    image: '/assets/monuments/nadgroben-pametnik-cherven-granit-krast-luchi-roza.webp',
    alt: 'Надгробен паметник от червен гранит с издялан кръст с лъчи и роза',
    description: 'Този модел се отличава с изключителна художествена стойност и детайлна каменоделска обработка. Изработен е от масивен червен гранит с естествена, асиметрична форма, която придава уникалност на паметника. Лявата част е доминирана от голям релефен кръст, заобиколен от стилизирани лъчи ("сияние"), гравирани директно в камъка. В дясната част е изящно скулптирана роза – вечният символ на обичта. За постигане на фотореалистичен образ, портретът е изпълнен върху вградена плоча от черен гранит, който контрастира красиво с основния червен цвят. Идеалният избор за почитане на паметта с дълбока символика и артистичност.',
    specs: { material: 'Cherven Granit', color: 'Red Brown', features: ['Релефен кръст', 'Слънчеви лъчи', 'Каменна роза', 'Вграден портрет', 'Неправилна форма'], availability: 'PreOrder' }
  },

  // === OFORMLENIE (ЦЯЛОСТНИ ОФОРМЛЕНИЯ) ===
  {
    id: 'double-grave-layout-marble-balustrade',
    title: "Двоен гроб с цялостно оформление от мрамор и балюстри",
    seoTitle: "Двойно гробно оформление от мрамор с ограда | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/grobno-oformlenie-dvoen-grob-mramor-balustri.webp",
    alt: "Двоен гроб от бял мрамор с масивна ограда от балюстри, покривни плочи и цялостна облицовка",
    description: "Това изключително гробно оформление за двойно място съчетава монументалност с класическа елегантност. Изработено е изцяло от висококачествен мрамор с естествена сива нишка.",
    specs: { material: 'Бял мрамор', color: 'Бял със сива нишка', features: ['Два паметника', 'Масивни покривни плочи', 'Ограда с балюстри', 'Каменна настилка', 'Затворен тип'] }
  },
  {
    id: 'brown-granite-layout-full-cover-cross-cutout',
    title: "Цялостно гробно оформление от кафяв гранит с врязан кръст",
    seoTitle: "Гробно оформление от кафяв гранит - затворен тип | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/grobno-oformlenie-kafev-granit-zatvoren-tip-vryazan-krast.webp",
    alt: "Гробно оформление от кафяв гранит с цялостна покривна плоча и паметник с врязан кръст",
    description: "Това цялостно гробно оформление се отличава с топлите нюанси на полирания кафяв гранит и изчистена, монументална визия. Конструкцията е от затворен тип с масивна цялостна покривна плоча, което осигурява максимална чистота, дълговечност и изключително лесна поддръжка през всички сезони.",
    specs: { material: 'Кафяв гранит', color: 'Кафяв', features: ['Врязан кръст', 'Цялостна покривна плоча', 'Масивни бордюри', 'Керамична снимка', 'Затворен тип'] }
  },
  {
    id: 'white-marble-double-grave-full-cover-layout',
    title: "Цялостно оформление на двоен гроб от бял мрамор",
    seoTitle: "Семеен гроб от бял мрамор - затворен тип с плочи | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/grobno-oformlenie-byal-mramor-dvoen-zatvoren-plochi.webp",
    alt: "Двоен семеен гроб от бял мрамор с две покривни плочи и два паметника",
    description: "Това представително гробно оформление е проектирано специално за семеен гроб (двойно място), изпълнено изцяло от висококачествен бял мрамор. Конструкцията е от затворен тип, което осигурява безупречна чистота и изключително лесна поддръжка.",
    specs: { material: 'Бял мрамор', color: 'Бял', features: ['Два паметника', 'Покривни плочи', 'Мраморна облицовка', 'Семеен/двоен гроб', 'Затворен тип'] }
  },
  {
    id: 'white-marble-full-cover-layout-bench',
    title: "Луксозно гробно оформление от бял мрамор с цялостно покритие",
    seoTitle: "Гробно оформление от бял мрамор - затворен тип | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/grobno-oformlenie-byal-mramor-cyalosno-pokritie-peika.webp",
    alt: "Луксозен гроб от бял мрамор с масивна паметна плоча, странични надписи и каменна пейка за сядане",
    description: "Това изящно гробно оформление е изпълнено от висококачествен бял мрамор, символизиращ светлина и покой. Конструкцията е от затворен тип с масивни покривни плочи, което гарантира изключително лесна поддръжка и устойчивост на атмосферни влияния.",
    specs: { material: 'Бял мрамор', color: 'Бял', features: ['Масивен паметник', 'Покривни плочи', 'Страничен надпис', 'Каменна пейка', 'Затворен тип'] }
  },
  {
    id: 'lux-black-granite-layout-bench',
    title: "Елитно гробно оформление от черен гранит с масивна пейка",
    seoTitle: "Гробно оформление от черен гранит - масив и пейка | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/grobno-oformlenie-cheren-granit-masiv-peika.webp",
    alt: "Цялостно облицован гроб от полиран черен гранит с масивна плоча и модерна каменна пейка",
    description: "Това първокласно гробно оформление е изпълнено изцяло от висококачествен черен гранит с огледален полир. Дизайнът е от 'затворен тип', което гарантира максимална чистота, устойчивост на атмосферни влияния и изключително лесна поддръжка.",
    specs: { material: 'Черен гранит', color: 'Черен', features: ['Масивна покривна плоча', 'Облицовка на фундамент', 'Гранитна пейка', 'Гравиран надпис', 'Затворен тип'] }
  },
  {
    id: 'white-marble-double-layout-balustrade',
    title: "Фамилно гробно оформление от бял мрамор с балустри",
    seoTitle: "Двоен гроб от бял мрамор с ограда тип балустри | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/grobno-oformlenie-bql-mramor-dvoen-balustri.webp",
    alt: "Семеен гроб с цялостна облицовка от бял мрамор, ограда с балустри и два черни паметника",
    description: "Това величествено фамилно оформление съчетава класическата красота на белия мрамор с контраста на черния гранит. Композицията е проектирана за два гробни места с обща мраморна настилка и ограда с изящни балустри.",
    specs: { material: 'Бял мрамор', color: 'Бял', features: ['Ограда с балустри', 'Мраморни покривни плочи', 'Паметници от черен гранит', 'Декоративни вази', 'Затворен тип'] }
  },
  {
    id: 'white-marble-layout-wave-shape',
    title: "Луксозно гробно оформление от мрамор с фигурална плоча",
    seoTitle: "Гробно оформление от бял мрамор - фигурален масив | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/grobno-oformlenie-bql-mramor-masiv-vylna.webp",
    alt: "Единичен гроб от полиран бял мрамор с масивна фигурална покривна плоча и паметник с вълнообразна форма",
    description: "Това изтънчено гробно оформление се отличава с майсторска каменна обработка на висококачествен бял мрамор. Акцентът е масивната покривна плоча с уникално оформен, вълнообразен долен ръб.",
    specs: { material: 'Бял мрамор', color: 'Бял', features: ['Паметник тип Вълна', 'Фигурална покривна плоча', 'Мраморна настилка', 'Мраморна ваза', 'Мраморен фенер'] }
  },
  {
    id: 'double-grave-layout-grey-black-granite-cladding',
    title: "Двойно гробно оформление от сив и черен гранит",
    seoTitle: "Двойно гробно оформление с гранитна облицовка | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/grobno-oformlenie-siv-granit-dvoen-oblicovka.webp",
    alt: "Цялостно оформление на двоен гроб с паметник от черен гранит, сиви гранитни бордюри и облицована основа",
    description: "Това цялостно решение за двоен гроб съчетава елегантността на черния гранит с практичността на сивия. Композицията включва централен паметник с разчупена форма, монтиран върху масивна бетонна основа, която е повдигната и облицована с естествен камък.",
    specs: { material: 'Сив и черен гранит', color: 'Сив и черен', features: ['Паметник от черен гранит', 'Бордюри от сив гранит', 'Каменна облицовка', 'Пътека', 'Полузатворен тип'] }
  },
  {
    id: 'black-granite-custom-oval-layout-bench',
    title: "Луксозно гробно оформление от черен гранит с овална форма",
    seoTitle: "Гробно оформление от черен гранит - овал и пейка | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/grobno-oformlenie-cheren-granit-oval-peika.webp",
    alt: "Луксозен гроб от черен гранит с овална форма за цветя, масивна основа и гранитна пейка",
    description: "Това дизайнерско гробно оформление е пример за висше каменоделско майсторство, изпълнено изцяло от полиран черен гранит. Отличава се с масивна, повдигната основа и уникална овална (бъбрековидна) форма на бордюра.",
    specs: { material: 'Черен гранит', color: 'Черен', features: ['Паметник с нестандартна форма', 'Овални бордюри', 'Облицована основа', 'Гранитна пейка', 'Полузатворен тип'] }
  },
  {
    id: 'white-marble-semi-closed-layout-drapery',
    title: "Гробно оформление от бял мрамор с фигурален паметник",
    seoTitle: "Облицовка на гроб от мрамор - полузатворен тип | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/grobno-oformlenie-mramor-poluzatvoreno-figuralen-pametnik.webp",
    alt: "Полузатворен гроб от бял мрамор с фигурален паметник драперия и мраморна пътека",
    description: "Това луксозно гробно оформление съчетава класическата красота на белия мрамор с артистични елементи. Композицията включва масивна паметна плоча с майсторски изработен релеф, наподобяващ драперия.",
    specs: { material: 'Бял мрамор', color: 'Бял', features: ['Фигурален паметник', 'Облицовка на бордюри', 'Мраморна ваза', 'Отвор за озеленяване', 'Полузатворен тип'] }
  },
  {
    id: 'black-granite-open-layout-landscaping',
    title: "Масивно гробно оформление от черен гранит с озеленяване",
    seoTitle: "Гробно оформление от черен гранит - отворен тип | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/grobno-oformlenie-cheren-granit-ozelenyavane.webp",
    alt: "Гробно място с масивна облицовка от черен гранит, профилирани бордюри и декоративно озеленяване",
    description: "Това е едно от най-представителните ни предложения, съчетаващо масивен черен гранит с жива зеленина. Двойната структура с профилирани бордюри оформя пространство за вечнозелена градина.",
    specs: { material: 'Черен гранит', color: 'Черен', features: ['Масивна облицовка', 'Профилирани бордюри', 'Гранитна ваза', 'Озеленяване', 'Отворен тип'] }
  },
  {
    id: 'dark-granite-layout-marble-cross-open',
    title: "Гробно оформление от тъмен гранит с масивен мраморен кръст",
    seoTitle: "Облицовка на гроб от гранит и мрамор - отворен тип | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/grobno-oformlenie-granit-mramor-krast.webp",
    alt: "Гробно място с облицовка от тъмен полиран гранит, голям бял мраморен кръст и декоративна зелена посипка",
    description: "Това гробно оформление се отличава със силния визуален контраст между използваните естествени камъни. Основата е изградена от масивни бордюри и облицовка от тъмен полиран гранит.",
    specs: { material: 'Тъмен гранит и бял мрамор', color: 'Тъмносив и бял', features: ['Мраморен кръст', 'Гранитен бордюр', 'Декоративна посипка', 'Гранитна книга', 'Отворен тип'] }
  },
  {
    id: 'white-marble-layout-pebbles-bench-table',
    title: "Цялостно гробно оформление от бял мрамор с декоративни камъни",
    seoTitle: "Гробно оформление от бял мрамор с пейка и маса | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/grobno-oformlenie-bjal-mramor-peika-dekorativni-kamani.webp",
    alt: "Гроб от бял мрамор с бели декоративни камъни, мраморна пейка и масичка",
    description: "Това изискано гробно оформление съчетава класическата красота на белия мрамор с модерен и практичен дизайн. Вътрешната част е запълнена с едри бели декоративни камъни за лесна поддръжка.",
    specs: { material: 'Бял мрамор', color: 'Бял', features: ['Мраморни бордюри', 'Декоративни бели камъни', 'Мраморна пейка', 'Мраморна масичка', 'Отворен тип'] }
  },
  {
    id: 'yellow-granite-temple-design-pebbles',
    title: "Авторско гробно оформление от жълт гранит - модел Храм",
    seoTitle: "Гробно оформление от жълт гранит с паметник тип Храм | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/grobno-oformlenie-zhalt-granit-hram-kamani.webp",
    alt: "Луксозен гроб от жълт гранит с паметник тип храм с колони и бели камъни",
    description: "Това ексклузивно гробно оформление се отличава с впечатляващ архитектурен стил. Паметникът е проектиран като 'Храм' с масивни колони и триъгълен фронтон от полиран жълт гранит.",
    specs: { material: 'Жълт гранит', color: 'Жълт/Бежов', features: ['Паметник тип Храм', 'Гранитни колони', 'Декоративни камъни', 'Каменна основа', 'Отворен тип'] }
  },
  {
    id: 'granite-layout-rock-style-mosaic-fill',
    title: "Гробно оформление с паметник тип \"Морена\" и мозаечен пълнеж",
    seoTitle: "Гробно оформление с морена и мозайка | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/grobno-oformlenie-granit-morena-mozaika.webp",
    alt: "Гроб с паметник от черен гранит тип морена, порцеланова снимка и пълнеж от тъмна мозайка с гранитни бордюри",
    description: "Това класическо оформление съчетава естествената сила на камъка с практичност. Централният елемент е паметник от черен гранит с дизайн тип 'морена' – запазена естествена форма по периферията.",
    specs: { material: 'Черен гранит', color: 'Черен и сив', features: ['Паметник тип морена', 'Порцеланова снимка', 'Мозаечен пълнеж', 'Външен бордюр', 'Затворен тип'] }
  },
  {
    id: 'marble-granite-layout-bench-mosaic',
    title: "Комбинирано гробно оформление от бял мрамор и черен гранит",
    seoTitle: "Оформление от мрамор и гранит с пейка и мозайка | Кипарис",
    category: "oformlenie",
    image: "/assets/monuments/grobno-oformlenie-mramor-granit-peika-mozaika.webp",
    alt: "Гробно място с бордюри от бял мрамор, паметник от черен гранит, мраморна пейка и пълнеж от мозайка",
    description: "Това изискано цялостно оформление залага на класическия контраст между материалите. Конструкцията е изградена от бял мрамор и паметна плоча от черен гранит с мозаечен пълнеж.",
    specs: { material: 'Бял мрамор и черен гранит', color: 'Бял и черен', features: ['Мраморни бордюри', 'Паметник от черен гранит', 'Мраморна пейка', 'Мраморна масичка', 'Затворен тип'] }
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
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Deep linking: set category based on URL hash
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && ["granit", "mramor", "oformlenie"].includes(hash)) {
      setSelectedCategory(hash);
      setVisibleCount(ITEMS_PER_PAGE);
    }
  }, [location.hash]);

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
