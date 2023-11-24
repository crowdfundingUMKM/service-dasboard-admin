import Head from 'next/head'

export default function FundDonationLayout({ children }) {
    return (
      <>
        <Head>
            <title>Pengajuan Pencairan Dana | Admin Mode</title>
            <meta name="description" content="Pengajuan pencairan dana yang diminta oleh user Campaign."/>
        </Head>
        {children}
      </>
    );
  }
  