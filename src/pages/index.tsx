import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { getBaseUrl } from "src/pages/_app";

export interface HomePageProps {
  baseUrl: string;
}

const Home: NextPage<HomePageProps> = ({ baseUrl }) => {
  const imageUrl = `${baseUrl}/api/og?title=Hello%20World`;

  return (
    <>
      <Head>
        <title>ГазХимОйл</title>
        <meta name="description" content='ООО "ГазХимОил"' />
        <meta property="og:image" content={imageUrl} />
      </Head>
      <main className=" w-full h-full md:container mx-auto flex flex-col md:py-10 items-center justify-center min-h-screen gap-4">
        <section className="bg-white text-justify bg-opacity-90 flex gap-4 pb-2 md:py-10 py-2 px-4 md:px-10 flex-col justify-center items-center  md:rounded-2xl">
          <h2 className="text-primary text-4xl font-semibold self-start">
            О компании
          </h2>
          <p className="indent-3 md:indent-10">
            Компания &quot;ГазХимОйл&quot; является частью Группы
            &quot;CHEMIOL&quot; и была основана для работы в новых реалиях на
            рынках Европы, России и Евразийского союза. Опытные и молодые
            сотрудники группы имеют широкие компетенции в проектах в
            нефтегазовой промышленности - от стадий добычи углеводородов до
            переработки и производства различных видов продукции.
          </p>
          <p className="indent-3 md:indent-10">
            Существующие производственные мощности Компании и группы позволяют
            производить нефтехимическую продукцию высокого качества для
            потребления на внутреннем рынке и поставок на экспорт. Вместе с тем,
            компания планирует в текущем и в наступающем годах существенно
            расширить линейку продукции и вывести на рынок собственную торговую
            марку для предложения потребительскому рынку.
          </p>
          <p className="indent-3 md:indent-10">
            Компания тесно сотрудничает с основными игроками нефтегазового рынка
            Российской Федерации, такими как НК&quot;Роснефть&quot;, ЛУКОЙЛ,
            Газпромнефть, НОВАТЭК и другими компаниями.
          </p>
        </section>
        <section className="bg-white text-justify bg-opacity-90 flex gap-4 pb-2 md:py-10 py-2 px-4 md:px-10 flex-col justify-center items-center  md:rounded-2xl">
          <h2 className="text-primary text-4xl font-semibold self-start">
            СМИ о нас
          </h2>
          <article className="p-4 rounded-lg flex flex-col">
            <span className="self-end text-neutral-500">
              03 сентября 2022 г.
            </span>
            <hr className="mb-2" />
            <p className="indent-3 md:indent-8 text-lg">
              Компания &quot;ГазХимОйл&quot; поздравляет всех партнеров и
              сотрудников с Днем работника нефтяной и газовой промышленности!
              Руководство группы желает всем сотрудникам уверенности в жизни,
              здоровья и достатка в семьях!
            </p>
          </article>
          <article className="p-4 rounded-lg flex flex-col">
            <span className="self-end text-neutral-500">
              04 сентября 2022 г.
            </span>
            <hr className="mb-2" />
            <p className="indent-3 md:indent-8 text-lg">
              В канун Дня нефтяной и газовой промышленности Компания вместе с
              сотрудниками запустила новую производственную площадку в пгт.
              Сафоново Смоленской области по выпуску химической продукции
              высокого качества. Руководство компании искренне поздравило
              коллектив НПЗ с профессиональным праздником и поделилось с
              коллективом новыми планами на ближайший период.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const baseUrl = getBaseUrl();

  return {
    props: {
      baseUrl,
    },
  };
};

export default Home;
