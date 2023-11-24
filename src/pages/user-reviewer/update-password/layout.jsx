import Head from 'next/head'

export default function UpdateUserReviewerLayout({ children }) {
    return (
      <>
        <Head>
            <title>Update Password Reviewer | Admin Mode</title>
            <meta name="description" content="Update password user reviewer."/>
        </Head>
        {children}
      </>
    );
  }
  