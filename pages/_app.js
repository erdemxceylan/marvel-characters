import Head from 'next/head';
import Layout from '../layout';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <title>Marvel Characters</title>
            <meta name='description' content='A practice project with marvel api' />
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </>
   );
}