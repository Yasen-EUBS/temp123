import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  image?: string;
}

export const ServiceCard = ({ icon, title, description, image }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-border bg-card">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
        </div>
      )}
      <CardHeader>
        <div className="mb-4 text-secondary">{icon}</div>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed mb-4">{description}</CardDescription>
        <Button variant="elegant" className="w-full">
          Научете повече
        </Button>
      </CardContent>
    </Card>
  );
};
