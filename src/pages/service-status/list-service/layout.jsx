import Head from 'next/head'

export default function ListServiceLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar Service Status | Admin Mode</title>
            <meta name="description" content="Daftar service yang aktif pada crowdfunding, Khusus Admin"/>

        </Head>
        {children}
      </>
    );
  }
  