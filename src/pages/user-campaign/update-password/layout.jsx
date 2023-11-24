import Head from 'next/head'

export default function UpdateUserCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Update Password User Campaign | Admin Mode</title>
            <meta name="description" content="Update password user campaign."/>

        </Head>
        {children}
      </>
    );
  }
  