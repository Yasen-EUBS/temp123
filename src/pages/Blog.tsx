import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

const Blog = () => {
  const articles = [
    {
      title: "Как да организираме достойно погребение",
      date: "15 Ноември 2024",
      excerpt: "Практически съвети и стъпки за организиране на погребална церемония. Какво трябва да знаете и как да се подготвите за този труден момент.",
      category: "Практически Съвети"
    },
    {
      title: "Избор на надгробен паметник",
      date: "10 Ноември 2024",
      excerpt: "Какво да вземете предвид при избора на надгробен паметник - материали, дизайн, цени и практически съвети за дълготрайност.",
      category: "Паметници"
    },
    {
      title: "Траурни традиции в България",
      date: "5 Ноември 2024",
      excerpt: "Запознайте се с българските траурни традиции и обичаи. Как се провежда поменът и какви са особеностите на траурните церемонии.",
      category: "Традиции"
    },
    {
      title: "Грижа за гробното място",
      date: "1 Ноември 2024",
      excerpt: "Как да поддържаме гробното място през различните сезони. Съвети за почистване и украсяване.",
      category: "Грижа"
    },
    {
      title: "Предимствата на кремацията",
      date: "25 Октомври 2024",
      excerpt: "Информация за процеса на кремация, нейните предимства и как се организира кремационна церемония в България.",
      category: "Кремация"
    },
    {
      title: "Траурни цветя - символика и значение",
      date: "20 Октомври 2024",
      excerpt: "Какви цветя да изберем за последно сбогом. Символиката на различните цветя и цветове в траурната флористика.",
      category: "Цветя"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Блог | Траурна агенция Кипарис"
        description="Полезна информация, съвети и традиции свързани с траурните церемонии. Денонощно: 02 846 55 24."
      />
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Блог</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полезна информация, съвети и традиции свързани с траурните церемонии
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-border bg-card">
                <CardHeader>
                  <div className="text-sm text-secondary font-semibold mb-2">{article.category}</div>
                  <CardTitle className="text-2xl mb-2">{article.title}</CardTitle>
                  <div className="text-sm text-muted-foreground">{article.date}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{article.excerpt}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
