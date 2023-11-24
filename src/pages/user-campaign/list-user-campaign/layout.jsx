import Head from 'next/head'

export default function ListUserCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar user Campaign | Admin Mode</title>
            <meta name="description" content="Daftar user Campaign yang terdaftar."/>
        </Head>
        {children}
      </>
    );
  }
  