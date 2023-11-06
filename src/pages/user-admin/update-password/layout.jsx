import Head from 'next/head'

export default function UpdatePassAdminLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar User Admin | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  