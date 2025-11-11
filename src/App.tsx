import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Pogrebenie from "./pages/Pogrebenie";
import Kremacia from "./pages/Kremacia";
import TransportNaPokojnik from "./pages/TransportNaPokojnik";
import Wreaths from "./pages/Wreaths";
import Flowers from "./pages/Flowers";
import Monuments from "./pages/Monuments";
import ContactPage from "./pages/ContactPage";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Main service pages with BG slugs */}
          <Route path="/pogrebenie" element={<Pogrebenie />} />
          <Route path="/kremacia" element={<Kremacia />} />
          <Route path="/transport-na-pokojnik" element={<TransportNaPokojnik />} />
          <Route path="/nadgrobni-pametnici" element={<Monuments />} />
          
          {/* Other pages */}
          <Route path="/wreaths" element={<Wreaths />} />
          <Route path="/flowers" element={<Flowers />} />
          <Route path="/kontakti" element={<ContactPage />} />
          <Route path="/contact" element={<Navigate to="/kontakti" replace />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* 301 Redirects from old English slugs to BG slugs */}
          <Route path="/funeral-services" element={<Navigate to="/pogrebenie" replace />} />
          <Route path="/monuments" element={<Navigate to="/nadgrobni-pametnici" replace />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
