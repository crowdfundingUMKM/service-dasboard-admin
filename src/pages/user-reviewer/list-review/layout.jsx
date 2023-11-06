import Head from 'next/head'

export default function ListReviewLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar Review | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  