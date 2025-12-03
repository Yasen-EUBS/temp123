import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Политика за поверителност | Траурна агенция Кипарис</title>
        <meta name="description" content="Политика за поверителност на Траурна агенция Кипарис. Информация за обработка на лични данни съгласно GDPR." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://kiparisbg.com/privacy-policy" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <article className="max-w-3xl mx-auto prose prose-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Политика за поверителност
            </h1>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Общи положения
              </h2>
              <p className="text-muted-foreground mb-4">
                Настоящата политика за поверителност описва как „ТРАУРНА АГЕНЦИЯ КИПАРИС" ЕООД 
                събира, използва и защитава вашите лични данни в съответствие с Общия регламент 
                относно защитата на данните (GDPR) и българското законодателство.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. Администратор на лични данни
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
                3. Какви данни събираме
              </h2>
              <p className="text-muted-foreground mb-4">
                [Тук ще бъде добавен пълният текст за видовете събирани данни]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Цели на обработката
              </h2>
              <p className="text-muted-foreground mb-4">
                [Тук ще бъде добавен пълният текст за целите на обработката]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Вашите права
              </h2>
              <p className="text-muted-foreground mb-4">
                Съгласно GDPR, вие имате право на достъп, коригиране, изтриване и преносимост 
                на вашите лични данни, както и право на възражение срещу обработката.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                6. Бисквитки (Cookies)
              </h2>
              <p className="text-muted-foreground mb-4">
                Този уебсайт използва бисквитки за подобряване на потребителското преживяване. 
                Бисквитките са малки текстови файлове, които се съхраняват на вашето устройство.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                7. Контакт
              </h2>
              <p className="text-muted-foreground mb-4">
                За въпроси относно защитата на личните данни, моля свържете се с нас на 
                kiparis2000@abv.bg или на телефон 02 846 55 24.
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

export default PrivacyPolicy;
