import Head from 'next/head'

export default function ListUserInvestorLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar user Investor | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  