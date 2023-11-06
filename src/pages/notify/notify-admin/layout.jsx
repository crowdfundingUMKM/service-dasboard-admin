import Head from 'next/head'

export default function NotifAdminLayout({ children }) {
    return (
      <>
        <Head>
            <title>Notifikasi Admin | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  