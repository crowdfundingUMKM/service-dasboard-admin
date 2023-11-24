import Head from 'next/head'

export default function NotifAdminLayout({ children }) {
    return (
      <>
        <Head>
            <title>Notifikasi Admin | Admin Mode</title>
            <meta name="description" content="Daftar Notifikasi admin."/>
        </Head>
        {children}
      </>
    );
  }
  