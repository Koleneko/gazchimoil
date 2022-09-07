import type { NextPage } from "next";
import Head from "next/head";
import ContentContainer from "src/components/core/ContentContainer";

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>ГазХимОйл • Контакты</title>
        <meta name="description" content='ООО "ГазХимОил"' />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <ContentContainer>
          <span className={"text-xl md:text-2xl font-semibold"}>Контакты</span>
        </ContentContainer>
      </main>
    </>
  );
};

export default Contacts;
