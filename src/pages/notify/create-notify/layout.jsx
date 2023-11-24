import Head from 'next/head'

export default function CreateNotifLayout({ children }) {
    return (
      <>
        <Head>
            <title>Buat Notifikasi | Admin Mode</title>
            <meta name="description" content="Buat Notifikasi untuk user Crowdfunding"/>

        </Head>
        {children}
      </>
    );
  }
  