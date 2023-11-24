import Head from 'next/head'

export default function ListUserAdminLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar User Admin | Admin Mode</title>
            <meta name="description" content="Daftar user yang ada sebagai Admin, Khusus Admin Master."/>

        </Head>
        {children}
      </>
    );
  }
  