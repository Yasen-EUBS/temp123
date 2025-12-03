import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Общи условия | Траурна агенция Кипарис</title>
        <meta name="description" content="Общи условия за ползване на услугите на Траурна агенция Кипарис в София." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://kiparisbg.com/terms" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <article className="max-w-3xl mx-auto prose prose-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Общи условия
            </h1>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Общи положения
              </h2>
              <p className="text-muted-foreground mb-4">
                Настоящите общи условия уреждат отношенията между „ТРАУРНА АГЕНЦИЯ КИПАРИС" ЕООД 
                и клиентите, използващи нашите траурни услуги.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. Данни за дружеството
              </h2>
              <p className="text-muted-foreground mb-4">
                „ТРАУРНА АГЕНЦИЯ КИПАРИС" ЕООД<br />
                ЕИК: 203898716<br />
                Адрес: София 1504, ул. проф. Асен Златаров 8<br />
                Телефон: 02 846 55 24<br />
                Имейл: kiparis2000@abv.bg
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. Услуги
              </h2>
              <p className="text-muted-foreground mb-4">
                [Тук ще бъде добавен пълният текст за предлаганите услуги]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Цени и плащане
              </h2>
              <p className="text-muted-foreground mb-4">
                [Тук ще бъде добавен пълният текст за ценообразуване и условия на плащане]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Права и задължения
              </h2>
              <p className="text-muted-foreground mb-4">
                [Тук ще бъде добавен пълният текст за правата и задълженията на страните]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                6. Рекламации
              </h2>
              <p className="text-muted-foreground mb-4">
                [Тук ще бъде добавен пълният текст за процедурата по рекламации]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                7. Заключителни разпоредби
              </h2>
              <p className="text-muted-foreground mb-4">
                За неуредените в настоящите общи условия въпроси се прилага българското законодателство.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-8">
              Последна актуализация: Декември 2025
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Terms;
