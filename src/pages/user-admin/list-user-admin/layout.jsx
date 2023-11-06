import Head from 'next/head'

export default function ListUserAdminLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar User Admin | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  