import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  alt: string;
  material: string;
  color: string;
  priceEur: number;
  availability: "InStock" | "PreOrder" | "OutOfStock";
}

export const ProductCard = ({
  id,
  title,
  image,
  alt,
  material,
  color,
  priceEur,
  availability,
}: ProductCardProps) => {
  const availabilityLabel = {
    InStock: "В наличност",
    PreOrder: "По поръчка",
    OutOfStock: "Изчерпан",
  };

  return (
    <article
      key={id}
      className="group bg-[hsl(150,15%,12%)] border border-border/30 rounded-lg overflow-hidden transition-all duration-300 hover:border-cta/50 hover:shadow-[0_0_20px_hsl(var(--cta)/0.15)]"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-[hsl(150,10%,8%)]">
        <img
          src={`/assets/coffins/${image}`}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
        {/* Title */}
        <h3 className="font-serif text-base sm:text-lg text-foreground leading-tight">
          {title}
        </h3>

        {/* Specs */}
        <div className="space-y-0.5 text-xs text-muted-foreground">
          <p className="truncate">{material}</p>
          <p className="truncate">{color}</p>
        </div>

        {/* Price */}
        <div className="pt-1">
          <p className="text-xl sm:text-2xl font-bold text-cta">
            {priceEur.toFixed(0)} €
          </p>
          <p className="text-[10px] text-muted-foreground">
            Крайна цена без скрити такси
          </p>
        </div>

        {/* Availability Badge */}
        <span
          className={`inline-block text-[10px] px-2 py-0.5 rounded-full ${
            availability === "InStock"
              ? "bg-green-900/50 text-green-300"
              : availability === "PreOrder"
              ? "bg-amber-900/50 text-amber-300"
              : "bg-red-900/50 text-red-300"
          }`}
        >
          {availabilityLabel[availability]}
        </span>

        {/* CTA Button */}
        <Button
          asChild
          variant="elegant"
          size="sm"
          className="w-full mt-2"
        >
          <a href="tel:028465524">
            <Phone className="w-3.5 h-3.5 mr-1.5" />
            Поръчай по телефона
          </a>
        </Button>
      </div>
    </article>
  );
};
