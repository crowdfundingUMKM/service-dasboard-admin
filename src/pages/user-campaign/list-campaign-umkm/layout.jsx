import Head from 'next/head'

export default function ListCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar Campaign UMKM | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  