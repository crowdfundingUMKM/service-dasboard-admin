import Head from 'next/head'

export default function ListServiceLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar Service Status | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  