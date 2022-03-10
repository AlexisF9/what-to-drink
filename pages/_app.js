import "../styles/app.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>What to drink ?</title>
          <meta name="description" content="Cocktails recipes app" />
          <meta name="robots" content="index, follow"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta charset="UTF-8"/>
          <meta name="google-site-verification" content="wMUZosmcwR5wHY7xF-eTT0-NlGJLQPb1JSN9416waBA" />
          <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
    );
}

export default MyApp;
