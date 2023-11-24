import Head from 'next/head'

export default function BlankLayout({ children }) {
    return (
      <>
        <Head>
            <title>Not Have Data | Admin Mode</title>
            <meta name="description" content="Tidak Ada data Apapun"/>

        </Head>
        {children}
      </>
    );
  }
  