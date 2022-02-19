import Head from "next/head";
import { Toaster } from "react-hot-toast";

import Nav from "@/components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="I am Hussein, a problem solver who is passionate for creating software that doesn’t just work but works as perfect as it can be."
        />
        <meta
          name="keywords"
          content="software development, web development, frontend, backend, production, seo, optimization, performance, javascript, react, node, blogs, ecommerce, services, development, products"
        />
        <meta name="author" content="@Husn_Hsn" />
        <meta property="og:title" content="Hussein Hassan" />
        <meta
          property="og:description"
          content="I am Hussein, a problem solver who is passionate for creating software that doesn’t just work but works as perfect as it can be."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtp45ukcw/image/upload/v1627667003/index_-_Copy_misn2h.jpg"
        />
        <meta property="og:url" content="https://www.husseinhassan.me/" />
        <title>Hussein Hassan</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="py-8 px-6 md:px-16 lg:py-16 lg:px-24">
        <Toaster position="top-center" />
        <Nav />
        <section className="mt-12 lg:pl-32">
          <div className="max-w-md">
            <Component {...pageProps} />
          </div>
        </section>
      </main>
    </>
  );
}

export default MyApp;
