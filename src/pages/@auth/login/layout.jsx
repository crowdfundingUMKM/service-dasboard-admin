import Head from 'next/head'


export default function LoginLayout({ children }) {
    return (
      <>
        <Head>
            <title>Login Akun | Admin Mode</title>
            <meta name="description" content="Silahkan Login sebagai Admin Crowdfiunding UMKM"/>
        </Head>
        {children}
      </>
    );
  }
  
  