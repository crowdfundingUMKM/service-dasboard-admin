import Head from 'next/head'

export default function UpdateUserInvestorLayout({ children }) {
    return (
      <>
        <Head>
            <title>Update Password Investor | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  