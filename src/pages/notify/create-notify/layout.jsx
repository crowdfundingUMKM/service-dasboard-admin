import Head from 'next/head'

export default function CreateNotifLayout({ children }) {
    return (
      <>
        <Head>
            <title>Buat Notifikasi | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  