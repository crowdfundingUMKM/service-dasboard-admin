import Head from 'next/head'

export default function FundDonationLayout({ children }) {
    return (
      <>
        <Head>
            <title>Pengajuan Pencairan Dana | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  