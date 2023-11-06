import Head from 'next/head'

export default function PreviewCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Preview Campaign | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  