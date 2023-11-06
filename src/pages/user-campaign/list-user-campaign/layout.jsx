import Head from 'next/head'

export default function ListUserCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar user Campaign | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  