import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/hooks/useCookieConsent";

export const CookieConsent = () => {
  const { isVisible, setIsVisible } = useCookieConsent();

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
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border shadow-lg p-3 sm:p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs sm:text-sm text-foreground text-center sm:text-left leading-tight">
          Използваме бисквитки за подобряване на преживяването.{" "}
          <Link 
            to="/privacy-policy" 
            className="text-muted-foreground hover:text-foreground underline"
          >
            Политика
          </Link>
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button 
            onClick={handleDecline}
            variant="outline"
            size="sm"
            className="px-3 py-2 text-xs"
          >
            Отказвам
          </Button>
          <Button 
            onClick={handleAccept}
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-2 text-xs"
            size="sm"
          >
            Приемам
          </Button>
        </div>
      </div>
    </div>
  );
};
