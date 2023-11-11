import Head from 'next/head'

export default function TransactionInvestorLayout({ children }) {
    return (
      <>
        <Head>
            <title>Semua Trsansaksi | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  