import { SiteFooter } from "@DK/components/layout/SiteFooter";
import { SiteHeader } from "@DK/components/layout/SiteHeader";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DK Mangas</title>
        <meta
          name="description"
          content="Seu site pra ler mangas e semelhantes!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader title="DK Mangas" tagTitle="h1" />
      <main id="site-main">
        <h1>Hello World</h1>
      </main>
      <SiteFooter />
    </>
  );
}
