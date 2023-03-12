import { PageHeader } from "@DK/components/layout/PageHeader";
import { SiteFooter } from "@DK/components/layout/SiteFooter";
import { SiteHeader } from "@DK/components/layout/SiteHeader";
import { FormSerieSchema, SerieForm } from "@DK/components/series/SerieForm";
import Head from "next/head";

export default function New() {
  async function handleSubmit(data: FormSerieSchema) {
    console.log(data);
  }

  return (
    <>
      <Head>
        <title>Nova Série &#8213; DK Mangas</title>
        <meta
          name="description"
          content="Seu site pra ler mangas e semelhantes!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader title="DK Mangas" tagTitle="h2" />
      <main id="site-main">
        <PageHeader pageTitle="Nova Série" />
        <SerieForm buttonText="Cadastrar" formSubmit={handleSubmit} />
      </main>
      <SiteFooter />
    </>
  );
}
