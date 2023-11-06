import Head from 'next/head'

export default function DashboardLayout({ children }) {
    return (
      <>
        <Head>
            <title>Dashboard | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  