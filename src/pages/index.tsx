import type {NextPage} from "next";
import Head from "next/head";
import {trpc} from "../utils/trpc";

type TechnologyCardProps = {
    name: string;
    description: string;
    documentation: string;
};

const Home: NextPage = () => {
    const hello = trpc.useQuery(["example.hello", {text: "from tRPC"}]);

    return (
        <>
            <Head>
                <title>ГазХимОил</title>
                <meta name="description" content='ООО "ГазХимОил"'/>
                <link rel="icon" href="/favicons/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
                <link rel="manifest" href="/favicons/site.webmanifest"/>
            </Head>

            <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
                    <h1>Hi</h1>
            </main>
        </>
    );
};

export default Home;
