import Head from 'next/head'

export default function NotifFromUserLayout({ children }) {
    return (
      <>
        <Head>
            <title>Notifikasi dari User | Admin Mode</title>
            <meta name="description" content="Report yang diberikan user untuk admin."/>

        </Head>
        {children}
      </>
    );
  }
  