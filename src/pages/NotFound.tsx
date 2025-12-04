import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Страницата не е намерена | Траурна агенция Кипарис</title>
        <meta name="description" content="Страницата, която търсите, не съществува. Върнете се към началната страница." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-secondary mb-4">404</h1>
          <p className="text-xl md:text-2xl text-foreground mb-2">Страницата не е намерена</p>
          <p className="text-muted-foreground mb-8">
            Страницата, която търсите, не съществува или е преместена.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/" className="inline-flex items-center gap-2">
              <Home className="h-5 w-5" />
              Към началната страница
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;