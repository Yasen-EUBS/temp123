export interface CoffinSpecs {
  material: string;
  color: string;
  finish: string;
  handles: string;
}

export interface CoffinPrice {
  eur: number;
  currency: "EUR";
}

export interface Coffin {
  id: string;
  internalModel: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  price: CoffinPrice;
  category: "Economy" | "Standard" | "Premium" | "Luxury";
  specs: CoffinSpecs;
  image: string;
  alt: string;
  availability: "InStock" | "PreOrder" | "OutOfStock";
}

export const coffinCatalog: Coffin[] = [
  {
    id: "model-000-fazer-ikonomichen",
    internalModel: "000",
    title: "Модел № 000",
    seoTitle: "Бюджетен ковчег от фазер - Модел 000 | Кипарис",
    metaDescription: "Търсите ниска цена? Изберете икономичен ковчег Модел 000 от облицован фазер с опушен ефект. Експресна доставка в София и региона от Траурна агенция Кипарис.",
    price: {
      eur: 77.21,
      currency: "EUR"
    },
    category: "Economy",
    specs: {
      material: "Облицован фазер (Бюджетен клас)",
      color: "Бежов с черна сянка (Опушен ефект)",
      finish: "Мат",
      handles: "Без странични дръжки"
    },
    image: "000_obiknoven.webp",
    alt: "Coffin beige and black gradient fiberboard with no handles - Model 000",
    availability: "InStock"
  }
];
