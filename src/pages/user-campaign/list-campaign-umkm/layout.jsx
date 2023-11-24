import Head from 'next/head'

export default function ListCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar Campaign UMKM | Admin Mode</title>
            <meta name="description" content="Daftar Campaign yang ada pada Crowdfunding UMKM."/>

        </Head>
        {children}
      </>
    );
  }
  