import Head from 'next/head'

export default function ListReviewLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar Review | Admin Mode</title>
            <meta name="description" content="Daftar review yang dibuat oleh user reviewer."/>

        </Head>
        {children}
      </>
    );
  }
  