import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { CookieConsentProvider } from "@/hooks/useCookieConsent";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Pogrebenie from "./pages/Pogrebenie";
import Kremacia from "./pages/Kremacia";
import TransportNaPokojnik from "./pages/TransportNaPokojnik";
import Monuments from "./pages/Monuments";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Polezno from "./pages/Polezno";
import TraurniStoki from "./pages/TraurniStoki";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CookieConsentProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Main service pages with BG slugs */}
            <Route path="/pogrebenie" element={<Pogrebenie />} />
            <Route path="/kremacia" element={<Kremacia />} />
            <Route path="/transport-na-pokojnik" element={<TransportNaPokojnik />} />
            <Route path="/nadgrobni-pametnici" element={<Monuments />} />
            <Route path="/traurni-stoki" element={<TraurniStoki />} />
            
            {/* Other pages */}
            <Route path="/kontakti" element={<ContactPage />} />
            <Route path="/contact" element={<Navigate to="/kontakti" replace />} />
            
            {/* Legal pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            
            {/* Info pages */}
            <Route path="/polezno" element={<Polezno />} />
            
            {/* 301 Redirects from old English slugs to BG slugs */}
            <Route path="/funeral-services" element={<Navigate to="/pogrebenie" replace />} />
            <Route path="/monuments" element={<Navigate to="/nadgrobni-pametnici" replace />} />
            <Route path="/wreaths" element={<Navigate to="/traurni-stoki" replace />} />
            <Route path="/flowers" element={<Navigate to="/traurni-stoki" replace />} />
            <Route path="/blog" element={<Navigate to="/polezno" replace />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </CookieConsentProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
