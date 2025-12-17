export interface CoffinSpecs {
  material: string;
  color: string;
  handles: string;
  lining?: string;
  dimensions?: string;
}

export interface Coffin {
  id: string;
  internalModel: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  priceEUR: number;
  category: "economy" | "standard" | "premium" | "luxury";
  image: string;
  alt: string;
  description: string;
  specs: CoffinSpecs;
}

export const coffinsData: Coffin[] = [
  {
    id: "kovcheg-model-02-bordo",
    internalModel: "02-bordo",
    title: "Ковчег Модел 02 - Бордо",
    seoTitle: "Ковчег Бордо Модел 02 - Масивен дъб | Кипарис",
    metaDescription: "Елегантен ковчег от масивен дъб в бордо цвят с месингови дръжки. Луксозна тапицерия и внимание към детайла. Доставка в София.",
    priceEUR: 850,
    category: "premium",
    image: "02-bordo.webp",
    alt: "Ковчег от масивен дъб в бордо цвят с месингови дръжки",
    description: "Елегантен ковчег от масивен дъб с богата бордо лакировка. Изработен с внимание към всеки детайл, този модел предлага луксозен завършек с традиционен характер.",
    specs: {
      material: "Масивен дъб",
      color: "Бордо",
      handles: "Месингови, 6 броя",
      lining: "Бял сатен",
      dimensions: "200 x 70 x 55 см"
    }
  },
  {
    id: "kovcheg-model-05-orehovo",
    internalModel: "05-orehovo",
    title: "Ковчег Модел 05 - Орехово",
    seoTitle: "Ковчег Орехово Модел 05 - Масив с резба | Кипарис",
    metaDescription: "Ковчег от орехово дърво с ръчна резба и позлатени дръжки. Изключително качество и естетика. Траурна агенция Кипарис, София.",
    priceEUR: 1200,
    category: "luxury",
    image: "05-orehovo.webp",
    alt: "Луксозен ковчег от орехово дърво с ръчна резба",
    description: "Изискан ковчег от масивно орехово дърво с ръчно изработена резба по капака и страните. Позлатените дръжки и луксозната вътрешна тапицерия правят този модел перфектен избор за тези, които търсят най-доброто.",
    specs: {
      material: "Масивен орех",
      color: "Натурален орех",
      handles: "Позлатени, 6 броя",
      lining: "Кремав сатен с бродерия",
      dimensions: "205 x 72 x 58 см"
    }
  },
  {
    id: "kovcheg-model-08-mahagon",
    internalModel: "08-mahagon",
    title: "Ковчег Модел 08 - Махагон",
    seoTitle: "Ковчег Махагон Модел 08 - Класически дизайн | Кипарис",
    metaDescription: "Класически ковчег от махагон с полиран завършек. Стандартен размер с качествени дръжки. Достъпна цена от Траурна агенция Кипарис.",
    priceEUR: 680,
    category: "standard",
    image: "08-mahagon.webp",
    alt: "Класически ковчег от махагон с полиран завършек",
    description: "Класически модел ковчег с топъл махагонов оттенък и полиран завършек. Предлага отлично съотношение качество-цена с достойна визия.",
    specs: {
      material: "МДФ с махагоново покритие",
      color: "Махагон",
      handles: "Метални, бронзирани, 6 броя",
      lining: "Бял памук",
      dimensions: "198 x 68 x 52 см"
    }
  },
  {
    id: "kovcheg-model-12-byal",
    internalModel: "12-byal",
    title: "Ковчег Модел 12 - Бял",
    seoTitle: "Бял Ковчег Модел 12 - Елегантен и светъл | Кипарис",
    metaDescription: "Бял ковчег с чист и светъл дизайн. Подходящ за жени и деца. Качествена изработка от Траурна агенция Кипарис, София.",
    priceEUR: 720,
    category: "standard",
    image: "12-byal.webp",
    alt: "Бял елегантен ковчег със сребристи дръжки",
    description: "Елегантен бял ковчег с чисти линии и светъл, умиротворяващ вид. Сребристите дръжки и бялата сатенена тапицерия създават хармонична композиция.",
    specs: {
      material: "МДФ с бяло лаково покритие",
      color: "Бял",
      handles: "Сребристи, 6 броя",
      lining: "Бял сатен",
      dimensions: "198 x 68 x 52 см"
    }
  },
  {
    id: "kovcheg-model-15-ikonomichen",
    internalModel: "15-ikonomichen",
    title: "Ковчег Модел 15 - Икономичен",
    seoTitle: "Икономичен Ковчег Модел 15 | Кипарис София",
    metaDescription: "Качествен икономичен ковчег на достъпна цена. Подходящ за кремация или скромно погребение. Траурна агенция Кипарис.",
    priceEUR: 320,
    category: "economy",
    image: "15-ikonomichen.webp",
    alt: "Икономичен ковчег в тъмен цвят",
    description: "Качествен ковчег на достъпна цена, подходящ за кремация или за семейства с ограничен бюджет. Въпреки по-ниската цена, предлага достойна визия.",
    specs: {
      material: "ПДЧ с ламинирано покритие",
      color: "Тъмен орех",
      handles: "Пластмасови, 4 броя",
      lining: "Бял памук",
      dimensions: "195 x 65 x 50 см"
    }
  },
  {
    id: "kovcheg-model-20-cheren",
    internalModel: "20-cheren",
    title: "Ковчег Модел 20 - Черен",
    seoTitle: "Черен Ковчег Модел 20 - Класика в черно | Кипарис",
    metaDescription: "Черен ковчег с класически дизайн и хромирани дръжки. Елегантен избор за траурна церемония. Доставка в София от Кипарис.",
    priceEUR: 750,
    category: "premium",
    image: "20-cheren.webp",
    alt: "Черен ковчег с хромирани дръжки и полиран завършек",
    description: "Стилен черен ковчег с дълбок гланцов завършек и хромирани дръжки. Класическият черен цвят излъчва достойнство и уважение.",
    specs: {
      material: "МДФ с черно лаково покритие",
      color: "Черен",
      handles: "Хромирани, 6 броя",
      lining: "Бял сатен",
      dimensions: "200 x 70 x 54 см"
    }
  }
];

export const getCoffinById = (id: string): Coffin | undefined => {
  return coffinsData.find(coffin => coffin.id === id);
};

export const getCoffinsByCategory = (category: Coffin["category"]): Coffin[] => {
  return coffinsData.filter(coffin => coffin.category === category);
};
