import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground text-center sm:text-left">
          Този уебсайт използва бисквитки, за да подобри вашето преживяване. 
          Продължавайки да разглеждате сайта, вие се съгласявате с нашата политика.
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link 
            to="/privacy-policy" 
            className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
          >
            Политика
          </Link>
          <Button 
            onClick={handleDecline}
            variant="outline"
            size="sm"
            className="px-4"
          >
            Отказвам
          </Button>
          <Button 
            onClick={handleAccept}
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-4"
            size="sm"
          >
            Приемам
          </Button>
        </div>
      </div>
    </div>
  );
};
