import { FormLogin, FormLoginSchema } from "@DK/components/FormLogin";
import Head from "next/head";
import Link from "next/link";

export default function Register() {
  async function handleSubmit(data: FormLoginSchema) {
    console.log(data);
  }

  return (
    <>
      <Head>
        <title>Login &#8213; DK Mangas</title>
        <meta
          name="description"
          content="Seu site pra ler mangas e semelhantes!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen flex justify-center items-center">
        <main className="w-full lg:max-w-xs mx-auto">
          <h1 className="text-neutral-900 text-4xl lg:text-5xl text-center font-medium drop-shadow-lg mb-4">
            DK Mangas
          </h1>
          <FormLogin buttonText="Registrar-se" formSubmit={handleSubmit} />
          <Link
            className="block text-xs text-right font-medium pr-4"
            href="/login"
          >
            tem conta? So logar!
          </Link>
        </main>
      </div>
    </>
  );
}
