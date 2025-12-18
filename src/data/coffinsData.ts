export interface CoffinSpecs {
  material: string;
  color: string;
  handles: string;
  lining?: string;
  dimensions?: string;
  finish?: string;
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
    id: "kovcheg-osogovo-fazer-model-000",
    internalModel: "000",
    title: "Ковчег Осогово - Модел № 000",
    seoTitle: "Български ковчег от фазер (Осогово) - Модел 000 | Кипарис",
    metaDescription: "Поръчайте Български ковчег Модел 000. Произход: Осогово. Материал: фазер. Цена: 77,21 евро. Денонощна доставка в София от Кипарис.",
    priceEUR: 77.21,
    category: "economy",
    image: "kovcheg-osogovo-fazer-model-000.webp",
    alt: "Български ковчег Осогово от фазер цвят кафяв и черен - Модел 000",
    description: "Качествен български ковчег от фазер (MDF/HDF) с тъмнокафяв цвят и черни преливащи канти. Матов завършек с декоративен кръст на капака. Произведен в България от фабрика Осогово.",
    specs: {
      material: "Фазер (MDF/HDF)",
      color: "Тъмнокафяв с черни преливащи канти",
      handles: "Без странични дръжки, декоративен кръст на капака",
      finish: "Мат"
    }
  },
  {
    id: "kovcheg-osogovo-fazer-model-00",
    internalModel: "00",
    title: "Ковчег Осогово - Модел № 00",
    seoTitle: "Български ковчег от фазер (Осогово) - Модел 00 | Кипарис",
    metaDescription: "Поръчайте Български ковчег Модел 00. Произход: Осогово. Материал: фазер. Цена: 118,62 евро. Денонощна доставка в София от Кипарис.",
    priceEUR: 118.62,
    category: "economy",
    image: "kovcheg-osogovo-fazer-model-00.webp",
    alt: "Български ковчег Осогово от фазер цвят тъмнокафяв с орнаменти - Модел 00",
    description: "Елегантен български ковчег от фазер с тъмнокафяв цвят и декоративни сребристи орнаменти. Гланцов лакиран завършек с метален кръст на капака. Произведен в България от фабрика Осогово.",
    specs: {
      material: "Фазер (MDF/HDF)",
      color: "Тъмнокафяв с декоративни сребристи орнаменти",
      handles: "Без външни дръжки, с метален кръст на капака",
      finish: "Гланц / Лакиран"
    }
  },
  {
    id: "kovcheg-osogovo-fazer-model-01",
    internalModel: "01",
    title: "Ковчег Осогово - Модел № 01",
    seoTitle: "Български ковчег от фазер (Осогово) - Модел 01 | Кипарис",
    metaDescription: "Поръчайте Български ковчег Модел 01. Произход: Осогово. Материал: фазер. Цена: 118 евро. Денонощна доставка в София от Кипарис.",
    priceEUR: 118,
    category: "economy",
    image: "kovcheg-osogovo-fazer-model-01.webp",
    alt: "Български ковчег Осогово от фазер цвят кафяв - Модел 01",
    description: "Стилен български ковчег от фазер с кафяв цвят и черна декоративна рамка. Матов завършек с релефна текстура. Стандартен модел без странични дръжки. Произведен в България от фабрика Осогово.",
    specs: {
      material: "Фазер",
      color: "Кафяв с черна декоративна рамка",
      handles: "Без дръжки (стандартен модел)",
      finish: "Матов с релефна текстура"
    }
  },
  {
    id: "kovcheg-osogovo-fazer-model-02-bordo",
    internalModel: "02-BORDO",
    title: "Ковчег Осогово - Модел № 02 Бордо",
    seoTitle: "Български ковчег от фазер (Осогово) - Модел 02 Бордо | Кипарис",
    metaDescription: "Поръчайте Български ковчег Модел 02 Бордо. Произход: Осогово. Материал: фазер. Цена: 130 евро. Денонощна доставка в София от Кипарис.",
    priceEUR: 130,
    category: "standard",
    image: "kovcheg-osogovo-fazer-model-02-bordo.webp",
    alt: "Български ковчег Осогово от фазер цвят бордо - Модел 02",
    description: "Изискан български ковчег от фазер в бордо цвят с черни акценти. Текстуриран матов завършек с флорални златни орнаменти и декоративни метални дръжки в златист цвят. Произведен в България от фабрика Осогово.",
    specs: {
      material: "Фазер",
      color: "Бордо с черни акценти",
      handles: "Декоративни метални дръжки в златист цвят",
      finish: "Текстуриран матов с флорални златни орнаменти"
    }
  },
  {
    id: "kovcheg-osogovo-fazer-model-02-byal",
    internalModel: "02-BYAL",
    title: "Ковчег Осогово - Модел № 02 Бял",
    seoTitle: "Български ковчег от фазер (Осогово) - Модел 02 Бял | Кипарис",
    metaDescription: "Поръчайте Български ковчег Модел 02 Бял. Произход: Осогово. Материал: фазер. Цена: 130 евро. Денонощна доставка в София от Кипарис.",
    priceEUR: 130,
    category: "standard",
    image: "kovcheg-osogovo-fazer-model-02-byal.webp",
    alt: "Български ковчег Осогово от фазер цвят бял - Модел 02",
    description: "Елегантен бял български ковчег от фазер с чист матов финиш. Декориран със златни ъглови орнаменти и луксозни метални дръжки в златист цвят. Произведен в България от фабрика Осогово.",
    specs: {
      material: "Фазер",
      color: "Бял",
      handles: "Луксозни метални дръжки в златист цвят",
      finish: "Чист матов финиш със златни ъглови орнаменти"
    }
  }
];

export const getCoffinById = (id: string): Coffin | undefined => {
  return coffinsData.find(coffin => coffin.id === id);
};

export const getCoffinsByCategory = (category: Coffin["category"]): Coffin[] => {
  return coffinsData.filter(coffin => coffin.category === category);
};
