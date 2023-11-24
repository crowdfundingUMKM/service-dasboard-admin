import Head from 'next/head'

export default function UpdateUserInvestorLayout({ children }) {
    return (
      <>
        <Head>
            <title>Update Password Investor | Admin Mode</title>
            <meta name="description" content="Update password user campaign."/>
        </Head>
        {children}
      </>
    );
  }
  