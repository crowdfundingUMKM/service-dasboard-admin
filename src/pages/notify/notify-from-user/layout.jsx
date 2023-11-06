import Head from 'next/head'

export default function NotifFromUserLayout({ children }) {
    return (
      <>
        <Head>
            <title>Notifikasi dari User | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  