import Head from 'next/head'

export default function ListUserReviewerLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar user Reviewer | Admin Mode</title>
            <meta name="description" content="Daftar user Reviewer yang terdaftar."/>
        </Head>
        {children}
      </>
    );
  }
  