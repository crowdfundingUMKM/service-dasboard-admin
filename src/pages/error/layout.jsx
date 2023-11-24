import Head from 'next/head'


export default function ErrorLayout({ children }) {
    return (
      <>
        <Head>
            <title>Page Not Found | Admin Mode</title>
            <meta name="description" content="Error Page, Not have data"/>
        </Head>
        {children}
      </>
    );
  }
  
  