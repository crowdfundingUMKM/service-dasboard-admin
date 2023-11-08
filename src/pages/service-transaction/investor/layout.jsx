import Head from 'next/head'

export default function TransactionInvestorLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar Service Status | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  