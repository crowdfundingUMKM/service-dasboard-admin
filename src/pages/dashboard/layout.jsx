import Head from 'next/head'

export default function DashboardLayout({ children }) {
    return (
      <>
        <Head>
            <title>Dashboard | Admin Mode</title>
            <meta name="description" content="Selamat datang pada dashboard Crowdfunding UMKM sebagai Admin"/>
        </Head>
        {children}
      </>
    );
  }
  