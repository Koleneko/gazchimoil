import type { NextPage } from "next";
import Head from "next/head";
import ContentContainer from "src/components/core/ContentContainer";

const CustomerInfo: NextPage = () => {
  return (
    <>
      <Head>
        <title>ГазХимОил</title>
        <meta name="description" content='ООО "ГазХимОил"' />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <ContentContainer>
          <span className={"text-2xl font-semibold"}>Клиентам</span>
        </ContentContainer>
      </main>
    </>
  );
};

export default CustomerInfo;
