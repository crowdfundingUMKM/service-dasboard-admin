import Head from 'next/head'

export default function UpdateUserReviewerLayout({ children }) {
    return (
      <>
        <Head>
            <title>Update Password Reviewer | Admin Mode</title>
        </Head>
        {children}
      </>
    );
  }
  