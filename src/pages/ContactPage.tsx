import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { SEO } from "@/components/SEO";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Контакти | Траурна агенция Кипарис"
        description="Свържете се с нас за траурни услуги. Денонощно: 02 846 55 24."
      />
      <Navigation />
      <div className="py-20">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
