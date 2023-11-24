import Head from 'next/head'

export default function TransactionInvestorLayout({ children }) {
    return (
      <>
        <Head>
            <title>Semua Trsansaksi | Admin Mode</title>
            <meta name="description" content="Transaksi yang dilakukan oleh user."/>

        </Head>
        {children}
      </>
    );
  }
  