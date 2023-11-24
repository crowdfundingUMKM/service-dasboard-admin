import Head from 'next/head'

export default function ListUserInvestorLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar user Investor | Admin Mode</title>
            <meta name="description" content="Daftar user Investor yang terdaftar."/>

        </Head>
        {children}
      </>
    );
  }
  